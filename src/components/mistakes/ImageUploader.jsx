import { useRef, useState } from "react";
import { compressImage } from "../../utils/imageCompression.js";

export function ImageUploader({ value, onChange, label }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = async (file) => {
    if (!file || !file.type.startsWith("image/")) {
      setError("Selecteaza un fisier imagine.");
      return;
    }
    setError(null);
    setBusy(true);
    try {
      const dataUrl = await compressImage(file);
      onChange(dataUrl);
    } catch {
      setError("Nu am putut procesa imaginea.");
    } finally {
      setBusy(false);
    }
  };

  const onPick = (e) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = "";
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = () => setDragOver(false);

  const clear = () => onChange(null);

  return (
    <div className="image-uploader">
      {label && <span className="image-uploader-label">{label}</span>}
      {value ? (
        <div className="image-preview">
          <img src={value} alt={label ?? "preview"} />
          <button
            type="button"
            className="image-preview-remove"
            onClick={clear}
            aria-label="Sterge imaginea"
          >
            ×
          </button>
        </div>
      ) : (
        <button
          type="button"
          className={`image-upload-zone${dragOver ? " drag-over" : ""}${busy ? " busy" : ""}`}
          onClick={() => inputRef.current?.click()}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
        >
          <span className="image-upload-icon">+</span>
          <span className="image-upload-hint">
            {busy ? "Procesez..." : "Apasa sau trage o imagine"}
          </span>
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onPick}
        style={{ display: "none" }}
      />
      {error && <span className="image-uploader-error">{error}</span>}
    </div>
  );
}
