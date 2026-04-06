import { useState } from "react";
import { useAppState, ACTIONS } from "./hooks/useAppState.js";
import { useSession } from "./hooks/useSession.js";
import { useAdaptiveEngine } from "./hooks/useAdaptiveEngine.js";

import { TopBar } from "./components/layout/TopBar.jsx";
import { PlacementIntro } from "./components/placement/PlacementIntro.jsx";
import { PlacementFlow } from "./components/placement/PlacementFlow.jsx";
import { PlacementResults } from "./components/placement/PlacementResults.jsx";
import { SkillTree } from "./components/skillTree/SkillTree.jsx";
import { RoadmapView } from "./components/roadmap/RoadmapView.jsx";
import { SessionRunner } from "./components/session/SessionRunner.jsx";
import { CelebrationOverlay } from "./components/gamification/CelebrationOverlay.jsx";
import { Statistics } from "./components/legacy/Statistics.jsx";
import { AssessmentMatrix } from "./components/legacy/AssessmentMatrix.jsx";
import { WeeklyCoach } from "./components/legacy/WeeklyCoach.jsx";
import { MistakesPage } from "./components/mistakes/MistakesPage.jsx";

export default function App() {
  const { state, dispatch } = useAppState();
  const { getDifficultyMix } = useAdaptiveEngine(state);
  const { session, startSession, submitAnswer, nextQuestion, finishSession, resetSession } = useSession(dispatch);
  const [activeTab, setActiveTab] = useState("skillTree");
  const [placementPhase, setPlacementPhase] = useState("intro"); // "intro" | "flow" | "results"
  const [placementResults, setPlacementResults] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [noQuestionsMsg, setNoQuestionsMsg] = useState(null);

  const placementDone = state.placement.completed;

  // --- Placement handlers ---
  const handlePlacementStart = () => setPlacementPhase("flow");

  const handlePlacementSkip = () => {
    // All chapters → beginner; mark placement complete
    const results = {};
    [...state.chapters.math, ...state.chapters.informatics].forEach((c) => {
      results[c.id] = { correct: 0, asked: 0, determinedLevel: "beginner" };
    });
    dispatch({ type: ACTIONS.COMPLETE_PLACEMENT, chapterResults: results });
  };

  const handlePlacementComplete = (results) => {
    setPlacementResults(results);
    setPlacementPhase("results");
  };

  const handlePlacementFinish = () => {
    dispatch({ type: ACTIONS.COMPLETE_PLACEMENT, chapterResults: placementResults ?? {} });
  };

  // --- Session handlers ---
  const handleStartLesson = (chapterId) => {
    const mix = getDifficultyMix(chapterId);
    const started = startSession(chapterId, "lesson", mix);
    if (!started) {
      setNoQuestionsMsg(chapterId);
      setTimeout(() => setNoQuestionsMsg(null), 3000);
    }
  };

  const handleFinishSession = () => {
    const heartsLost = 5 - session.hearts;
    if (heartsLost === 0 && session.answers.length > 0) {
      setShowCelebration(true);
    }
    finishSession();
  };

  // --- Routing logic ---
  const inSession = session.phase !== "idle";

  const allChapters = [...state.chapters.math, ...state.chapters.informatics];
  const activeChapter = inSession
    ? allChapters.find((c) => c.id === session.chapterId)
    : null;

  // Render placement flow if not done
  if (!placementDone) {
    return (
      <div className="app-shell">
        <div className="ambient ambient-top-left" />
        <div className="ambient ambient-bottom-right" />
        <main className="main-content">
          {placementPhase === "intro" && (
            <PlacementIntro onStart={handlePlacementStart} onSkip={handlePlacementSkip} />
          )}
          {placementPhase === "flow" && (
            <PlacementFlow onComplete={handlePlacementComplete} />
          )}
          {placementPhase === "results" && (
            <PlacementResults
              chapterResults={placementResults ?? {}}
              onContinue={handlePlacementFinish}
            />
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="ambient ambient-top-left" />
      <div className="ambient ambient-bottom-right" />

      <TopBar
        gamification={state.gamification}
        activeTab={inSession ? null : activeTab}
        onTabChange={(tab) => { resetSession(); setActiveTab(tab); }}
        onReset={() => dispatch({ type: ACTIONS.RESET })}
      />

      <main className="main-content">
        {inSession ? (
          <SessionRunner
            session={session}
            onSubmitAnswer={submitAnswer}
            onNextQuestion={nextQuestion}
            onFinish={handleFinishSession}
            chapterName={activeChapter?.name ?? ""}
          />
        ) : (
          <>
            {activeTab === "skillTree" && (
              <div className="content-col">
                {noQuestionsMsg && (
                  <div className="empty-card" style={{ color: "var(--yellow)" }}>
                    Nu exista intrebari inca pentru acest capitol. Revino curand!
                  </div>
                )}
                <SkillTree state={state} onStartLesson={handleStartLesson} />
              </div>
            )}
            {activeTab === "roadmap" && (
              <div className="content-col">
                <RoadmapView state={state} dispatch={dispatch} onStartLesson={handleStartLesson} />
              </div>
            )}
            {activeTab === "statistics" && (
              <Statistics state={state} dispatch={dispatch} />
            )}
            {activeTab === "assessment" && (
              <div className="content-col">
                <AssessmentMatrix state={state} dispatch={dispatch} />
              </div>
            )}
            {activeTab === "weekly" && (
              <div className="content-col">
                <WeeklyCoach state={state} />
              </div>
            )}
            {activeTab === "mistakes" && (
              <div className="content-col">
                <MistakesPage state={state} dispatch={dispatch} />
              </div>
            )}
          </>
        )}
      </main>

      <CelebrationOverlay
        show={showCelebration}
        onDone={() => setShowCelebration(false)}
      />
    </div>
  );
}
