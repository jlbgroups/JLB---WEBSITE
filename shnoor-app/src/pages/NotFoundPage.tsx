import Button from '../components/Button'

export default function NotFoundPage() {
  return (
    <main className="bg-bg min-h-screen flex items-center justify-center px-6 pt-[68px]">
      <div className="text-center">
        <span className="font-heading font-bold text-[120px] text-forest/8 leading-none block">404</span>
        <h1 className="font-heading font-bold text-forest text-[28px] md:text-[34px] -mt-6 mb-3 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-textSecondary text-[15px] mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary" withArrow>Go Home</Button>
          <Button href="/contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </main>
  )
}
