export default function Footer() {
    return (
      <footer className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-700">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Angel Intermediary. All rights reserved.</p>
            <p className="text-xs">
              Helping NYC institutions fully utilize SCAHC grants—compliantly and efficiently.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  