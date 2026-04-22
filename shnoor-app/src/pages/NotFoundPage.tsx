import Button from '../components/Button'

export default function NotFoundPage() {
  return (
    <main className="bg-bg min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center">
        <span className="font-heading font-bold text-8xl text-forest/10">404</span>
        <h1 className="font-heading font-bold text-forest text-3xl -mt-4 mb-3">Page Not Found</h1>
        <p className="text-textSecondary mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary">Go Home</Button>
          <Button href="/contact" variant="secondary">Contact Us</Button>
        </div>
      </div>
    </main>
  )
}
