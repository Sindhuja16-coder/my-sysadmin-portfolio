import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function IntuneLabGuide() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Back to Knowledge Hub</Link>
        </div>

        <div className="mb-10 border-b border-slate-200 pb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">Technical Guide: Fixing Intune Lab Errors</h1>
          <p className="text-slate-600 italic">Documentation of the exact steps taken to resolve virtualization and enrollment blocks.</p>
        </div>

        <div className="space-y-12">
          
          {/* ERROR 1: BIOS/VT-x */}
          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Error: Intel VT-x is disabled</h2>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2">
                <Image src="/images/vm-error.png" alt="Intel VT-x error" width={400} height={250} className="rounded border shadow-sm" />
                <p className="text-[10px] text-slate-400 mt-1 uppercase">The error that stops the VM from booting</p>
              </div>
              <div className="md:w-1/2 space-y-3">
                <h3 className="font-bold">The Solution:</h3>
                <ol className="list-decimal pl-5 text-sm space-y-2 text-slate-700">
                  <li>Shut down your physical laptop completely.</li>
                  <li>Press the <strong>Power Button</strong> and immediately tap <strong>F10</strong> (or the key shown on your Startup Menu).</li>
                  <li>Navigate to <strong>Advanced</strong> or <strong>System Configuration</strong>.</li>
                  <li>Find <strong>Virtualization Technology (VTx)</strong> and change it to <strong>Enabled</strong>.</li>
                  <li>Press <strong>F10 to Save and Exit</strong>.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* ERROR 2: OOBE KEYBOARD */}
          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Error: OOBEKEYBOARD / Something went wrong</h2>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2 space-y-3 order-2 md:order-1">
                <h3 className="font-bold">The Solution (The "Command Line" Fix):</h3>
                <p className="text-sm text-slate-600">If clicking "Try again" doesn't work, follow these expert steps:</p>
                <ul className="list-disc pl-5 text-sm space-y-2 text-slate-700">
                  <li>On the error screen, press <strong>Shift + F10</strong> on your keyboard to open the Command Prompt.</li>
                  <li>Type the following command and press Enter: <br/> <code className="bg-slate-100 px-2 py-1 rounded text-blue-700 font-bold">oobe\bypassnro</code></li>
                  <li>The VM will restart and allow you to continue the setup without the keyboard loop.</li>
                </ul>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <Image src="/images/oobe-error.png" alt="OOBE Keyboard error" width={400} height={250} className="rounded border shadow-sm" />
                <p className="text-[10px] text-slate-400 mt-1 uppercase">Stuck on the OOBE loop</p>
              </div>
            </div>
          </section>

          {/* FINAL MANAGEMENT PROCESS */}
          <section className="bg-slate-900 text-white p-8 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Final Step: Intune Policy Check</h2>
            <p className="mb-6 text-slate-300">Once the device reaches the desktop, verify management:</p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">1.</span> 
                  Go to <strong>Settings &gt; Accounts &gt; Access Work or School</strong>.
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">2.</span> 
                  Click your account and select <strong>Info</strong>.
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">3.</span> 
                  Click <strong>Sync</strong> to pull the latest security updates.
                </li>
              </ul>
              <div className="border-2 border-slate-700 rounded-lg overflow-hidden">
                <Image src="/images/win-success.png" alt="Success screen" width={400} height={250} className="w-full" />
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}