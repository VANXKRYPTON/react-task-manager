function NotificationModal({
  open,
  title,
  message,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>{title}</h2>

        <p>{message}</p>

        <button
          onClick={onClose}
        >
          OK
        </button>

      </div>

    </div>
  );
}

export default NotificationModal;