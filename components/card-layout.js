export default function CardLayout({ title, children, width="is-6" }) {
  const [content, footer] = Array.isArray(children) ? children : [children, null];  // Ensure children is an array
  return (
    <div className="columns is-centered is-vcentered">
      <div className={`column ${width}`}>
        <div className="card">
          <header className="card-header">
            <h3 className="card-header-title">
              {title}
            </h3>
          </header>
          <div className="card-content">
            <div className="content">
              {content}
            </div>
          </div>
          {footer && (  // Only render footer if it exists
            <footer className="card-footer">
              {footer}
            </footer>
          )}
        </div>
      </div>
    </div>
  )
}
