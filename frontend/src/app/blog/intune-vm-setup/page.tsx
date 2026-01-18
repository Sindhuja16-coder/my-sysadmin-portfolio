import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function IntuneLabGuide() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
            ← Back to Knowledge Base
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Lab Documentation
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 mb-4 text-slate-900">
            How to Build a Safe Intune Testing Lab
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We cannot test corporate policies on our personal laptops. This guide documents how I built a <strong>virtual sandbox</strong> to safely enroll, manage, and break Windows 11 instances without risking my own hardware.
          </p>
        </div>

        {/* SCENARIO 1: THE HARDWARE BLOCK */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          <div className="bg-slate-900 p-6 border-b border-slate-800">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
              <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">Scenario 1</span>
              The Hypervisor Block
            </h2>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">🔴 Problem</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Upon attempting to boot the Windows 11 ISO in VMware Workstation, the VM immediately crashed.
                  <strong>Error:</strong> "Intel VT-x is disabled."
                </p>
                <div className="bg-slate-100 p-3 rounded text-xs font-mono text-red-600 border border-slate-200">
                  This host supports Intel VT-x, but Intel VT-x is disabled.<br/>
                  Module 'MonitorMode' power on failed.
                </div>
              </div>
              <div className="relative h-48 w-full border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                 <Image src="/images/vm-error.png" alt="VMware VT-x Error" fill style={{objectFit: "contain"}} />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8 grid md:grid-cols-2 gap-8">
               <div className="relative h-48 w-full border border-slate-200 rounded-lg overflow-hidden shadow-sm order-2 md:order-1">
                 <Image src="/images/bios-setup.png" alt="BIOS Setup Menu" fill style={{objectFit: "cover"}} />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="font-bold text-slate-900 mb-2">🟢 Action & Solution</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">1.</span>
                    <span><strong>Access BIOS:</strong> Restarted the physical host and interrupted boot (F10 on HP) to enter the Startup Menu.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">2.</span>
                    <span><strong>Enable Virtualization:</strong> Navigated to <em>System Configuration</em> and toggled <strong>Virtualization Technology (VTx)</strong> to <span className="text-green-600 font-bold">Enabled</span>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">3.</span>
                    <span><strong>Result:</strong> VMware could finally access the CPU's hardware virtualization extensions, allowing the 64-bit guest OS to boot.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SCENARIO 2: THE ENROLLMENT LOOP */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          <div className="bg-slate-900 p-6 border-b border-slate-800">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
              <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">Scenario 2</span>
              The OOBE Loop
            </h2>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">🔴 Problem</h3>
                <p className="text-slate-600 text-sm mb-4">
                  During the "Out of Box Experience" (Windows Setup), the installer got stuck in a loop.
                  <strong>Error:</strong> "Something went wrong - OOBEKEYBOARD."
                </p>
                <p className="text-slate-600 text-sm">
                  Clicking "Try Again" simply reloaded the same error, effectively soft-locking the VM.
                </p>
              </div>
              <div className="relative h-48 w-full border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                 <Image src="/images/oobe-error.png" alt="OOBE Keyboard Error" fill style={{objectFit: "contain"}} />
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-blue-900 mb-2">🟢 The Command Line Solution</h3>
              <p className="text-sm text-blue-800 mb-4">
                Since the GUI was broken, I had to force a bypass using the hidden administrator console.
              </p>
              <div className="bg-slate-900 text-slate-50 p-4 rounded font-mono text-sm shadow-inner">
                <span className="text-slate-500"># 1. Open Console</span><br/>
                Shift + F10<br/><br/>
                <span className="text-slate-500"># 2. Execute Bypass Command</span><br/>
                <span className="text-yellow-400">oobe\bypassnro</span>
              </div>
              <p className="text-sm text-blue-800 mt-4">
                <strong>Result:</strong> The VM rebooted, bypassed the network check, and allowed me to create a local "Admin" account to finish the setup.
              </p>
            </div>
          </div>
        </div>

        {/* SCENARIO 3: SUCCESS */}
        <div className="bg-green-50 rounded-2xl border border-green-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-4">✅ Final Result: Lab Ready</h2>
          <p className="text-green-800 mb-8 max-w-2xl mx-auto">
            The Virtual Machine is now fully operational and enrolled. It is isolated from my personal host machine, meaning I can safely push experimental Intune security policies without risk.
          </p>
          <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg border-4 border-white">
             <Image src="/images/win-success.png" alt="Windows Success Desktop" fill style={{objectFit: "cover"}} />
          </div>
        </div>

      </main>
    </div>
  );
}
