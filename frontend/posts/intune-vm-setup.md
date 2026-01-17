---
title: "My Journey: Installing Windows 11 VM for Intune (Fixing Errors)"
date: "2026-01-18"
description: "It wasn't a straight path. Here is how I overcame TPM errors and update loops to create the perfect Intune Lab."
category: "Lab Setup"
---

## The Challenge
I thought setting up a Windows 11 Virtual Machine would be a simple "Next, Next, Finish" process. I was wrong. 

I faced multiple errors regarding **TPM 2.0 requirements**, **Secure Boot**, and endless update loops. This log documents exactly how I solved them to build a clean base for my Intune testing.

![Screenshot of the error I initially faced](/images/error-screenshot.png)
*(Above: The frustrating error message I started with)*

---

### Step 1: Getting the Right Foundation
The first mistake I made was selecting the wrong generation. Windows 11 requires modern hardware emulation.

1. Open **Hyper-V Manager**.
2. Click **New > Virtual Machine**.
3. **The Critical Step:** When asked for Generation, you **MUST** select **Generation 2**.
   * *Why?* Generation 1 does not support UEFI or TPM, which causes the installation to fail immediately.

![Screenshot of selecting Generation 2](/images/gen2-selection.png)

---

### Step 2: Fixing the "This PC can't run Windows 11" Error
Even with Generation 2, I hit a wall. The installer complained about missing hardware. This is because Hyper-V disables TPM by default.

**The Fix:**
Instead of fighting through the GUI menus, I found that **PowerShell** is the cleanest way to force these settings.

Run this command on your Host machine (as Administrator) before starting the VM:

```powershell
# 1. create a Key Protector (Required for TPM)
Set-VMKeyProtector -VMName "IntuneLab-01" -NewLocalKeyProtector

# 2. Enable the TPM chip
Enable-VMTPM -VMName "IntuneLab-01"