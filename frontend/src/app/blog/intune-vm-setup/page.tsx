import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function IntuneLabGuide() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Back to Knowledge Hub</Link>
        </div>

        {/* Introduction */}
        <div className="mb-10 border-b border-slate-200 pb-8">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase">Lab Tutorial</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">How I Built My Intune Home Lab</h1>
          <p className="text-lg text-slate-600">
            A beginner-friendly guide showing how to set up a Windows 11 test machine and fix the common errors that happen along the way.
          </p>
        </div>

        <div className="space-y-12">

          {/* SECTION 1: THE HARDWARE ERROR */}
          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Fixing the Virtualization Block</h2>
            <p className="text-slate-600 mb-6">
              To test Intune, we use a <strong>Virtual Machine (VM)</strong> so we don't mess up our real computer. When I first tried to start my VM, I got a scary error message.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <Image src="/images/vm-error.png" alt="Intel VT-x error" width={400} height={250} className="rounded-lg shadow-md border" />
                <p className="text-xs text-slate-500 mt-2 italic text-center">The "Intel VT-x is disabled" error</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">What happened?</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                  <li>The computer's "brain" (CPU) had its virtualization feature turned off.</li>
                  <li>Without this, the VM cannot "talk" to your hardware.</li>
                  <li><strong>The Fix:</strong> I had to restart my laptop and enter the <strong>BIOS Startup Menu</strong> to turn it on.</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <Image src="/images/bios-setup.png" alt="BIOS Setup Menu" width={600} height={300} className="rounded-lg mx-auto shadow-sm" />
              <p className="text-xs text-slate-500 mt-2 text-center">Entering the BIOS (Startup Menu) to change settings</p>
            </div>
          </section>

          {/* SECTION 2: THE WINDOWS SETUP */}
          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Starting the Windows "OOBE"</h2>
            <p className="text-slate-600 mb-6">
              Once the hardware was fixed, Windows 11 started. This is called the <strong>Out-of-Box Experience (OOBE)</strong>. This is where you tell the computer who owns it.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <Image src="/images/win-setup.png" alt="Windows region setup" width={400} height={250} className="rounded-lg shadow-md border" />
                <p className="text-xs text-slate-500 mt-2 text-center">Picking the region to start setup</p>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-bold text-slate-800 mb-2">Why this matters for Intune:</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                  <li>In this stage, you sign in with your <strong>Work or School account</strong>.</li>
                  <li>Instead of a personal email, using a work email tells the device to "Enroll" into Intune automatically.</li>
                  <li>If you see a <strong>"Something went wrong" (OOBEKEYBOARD)</strong> error like I did, don't panic! Just click "Try Again" or restart the VM.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 3: THE SUCCESS */}
          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-green-500">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Success: Intune is in Control!</h2>
            <p className="text-slate-600 mb-6">
              After signing in, the magic happens. The device connects to the cloud and starts downloading the rules (policies) and apps you set up in the Intune Portal.
            </p>

            <div className="max-w-2xl mx-auto text-center">
              <Image src="/images/win-success.png" alt="Intune Sync Success" width={600} height={350} className="rounded-xl shadow-2xl border-4 border-white" />
              <div className="mt-6 bg-green-50 p-6 rounded-lg inline-block">
                <h3 className="text-green-800 font-bold text-xl mb-2">Final Result ✅</h3>
                <p className="text-green-700 text-sm">
                  The device is now downloading the latest features and security updates. 
                  It is officially managed by Intune!
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}