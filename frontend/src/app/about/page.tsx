{/* FAQ Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Intune FAQ for Beginners</h2>
              <div className="space-y-4">
                
                <div className="bg-white border border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-600 mb-2">Q: What is the difference between Enrollment and Registration?</h3>
                  <p className="text-sm text-slate-600">
                    <strong>Registration</strong> (Azure AD Join) gives a device an identity in the cloud so you can use Single Sign-On. 
                    <strong>Enrollment</strong> (Intune) goes a step further by giving the company full control to push apps, security rules, and remote wipes.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-600 mb-2">Q: How does a device "check-in" with Intune?</h3>
                  <p className="text-sm text-slate-600">
                    Windows devices usually check-in every 8 hours automatically. However, as an Admin, you can force a manual sync from the <strong>Settings > Accounts > Access Work or School</strong> menu to apply new policies immediately.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-600 mb-2">Q: What happens if a device is "Non-Compliant"?</h3>
                  <p className="text-sm text-slate-600">
                    If a device fails a security check (like having BitLocker turned off), Intune marks it as <strong>Non-Compliant</strong>. Combined with Conditional Access, we can block that device from accessing company email or Teams until the user fixes the issue.
                  </p>
                </div>

              </div>
            </section>