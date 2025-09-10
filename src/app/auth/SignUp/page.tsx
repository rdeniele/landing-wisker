"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import Image from "next/image";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [showCheckEmail, setShowCheckEmail] = useState(false);
	const [agreeToc, setAgreeToc] = useState(false);
	const [showTocModal, setShowTocModal] = useState(false);
	const [agreeNewsletter, setAgreeNewsletter] = useState(false);
	const [passwordTouched, setPasswordTouched] = useState(false);

		const handleSignUp = async (e: React.FormEvent) => {
			e.preventDefault();
			setError("");
			if (!agreeToc) {
				setError("You must agree to the Terms & Conditions.");
				return;
			}
			if (password !== confirmPassword) {
				setError("Passwords do not match.");
				return;
			}
			// You can send agreeNewsletter to your backend if needed
			const { error } = await supabase.auth.signUp({ email, password });
			if (error) {
				setError(error.message);
			} else {
				setShowCheckEmail(true);
			}
		};

	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#e6f0ff] to-[#f5faff]">
			{showCheckEmail ? (
				<div className="mt-8 text-center bg-white/95 border-4 border-neutral-700 rounded-2xl shadow-[12px_12px_0_#5c5c5c,0_4px_24px_rgba(0,0,0,0.10)] p-11 w-[420px] backdrop-blur-sm">
				<Image
							src="/Wisker.png"
							alt="Wisker Logo"
							width={48}
							height={48}
							className="mb-4 rounded-lg border-2 border-[#b3d1ff] bg-[#f5faff]"
						/>
						<h2 className="text-xl font-bold text-[#2a4365]">Check your email!</h2>
						<p className="mt-4 text-[#2a4365]">We&apos;ve sent a confirmation link to your inbox.<br />Please check your email (and spam folder) to complete your signup.</p>
					</div>
				) : (
									<form
        onSubmit={handleSignUp}
        className="flex flex-col gap-6 w-[420px] bg-white/95 border-4 border-neutral-700 rounded-2xl shadow-[12px_12px_0_#5c5c5c,0_4px_24px_rgba(0,0,0,0.10)] p-11 items-center backdrop-blur-sm"
      >
        <Image
          src="/Wisker.png"
          alt="Wisker Logo"
          width={56}
          height={56}
          className="mb-5 rounded-xl border-2 border-[#b3d1ff] bg-[#f5faff] shadow-[0_2px_8px_#b3d1ff33]"
        />
        <h1 className="text-4xl font-bold text-[#2a4365] mb-5 tracking-tight">Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="p-4 text-base rounded-xl border-[1.5px] border-[#b3d1ff] bg-[#f5faff] text-[#2a4365] w-full max-w-[340px] shadow-[0_1px_4px_#b3d1ff22] outline-none transition-colors focus:border-[#4a90e2]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          required
          className={`p-4 text-base rounded-xl w-full max-w-[340px] shadow-[0_1px_4px_#b3d1ff22] outline-none transition-colors bg-[#f5faff] text-[#2a4365] ${passwordTouched && !password ? 'border-2 border-[#e53e3e]' : (password && confirmPassword && password !== confirmPassword ? 'border-2 border-[#e53e3e]' : 'border-[1.5px] border-[#b3d1ff]')}`}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          className={`p-4 text-base rounded-xl w-full max-w-[340px] shadow-[0_1px_4px_#b3d1ff22] outline-none transition-colors bg-[#f5faff] text-[#2a4365] ${password && confirmPassword && password !== confirmPassword ? 'border-2 border-[#e53e3e]' : 'border-[1.5px] border-[#b3d1ff]'}`}
        />
        {passwordTouched && !password && (
          <span className="text-[#e53e3e] text-sm font-bold -mt-4 self-start">Password is required.</span>
        )}
        {password && confirmPassword && password !== confirmPassword && (
          <span className="text-[#e53e3e] text-sm font-bold -mt-4 self-start">Passwords do not match.</span>
        )}
        <div className="w-full flex flex-col gap-3">
          <label className="flex items-center text-base text-[#2a4365]">
            <input
              type="checkbox"
              checked={agreeToc}
              onChange={e => setAgreeToc(e.target.checked)}
              required
              className="mr-2 accent-[#4a90e2]"
            />
            I agree to the <span className="text-[#4a90e2] underline cursor-pointer ml-1" onClick={() => setShowTocModal(true)}>Terms & Conditions</span>
          </label>
          <label className="flex items-center text-base text-[#2a4365]">
            <input
              type="checkbox"
              checked={agreeNewsletter}
              onChange={e => setAgreeNewsletter(e.target.checked)}
              className="mr-2 accent-[#4a90e2]"
            />
            Subscribe to our newsletter
          </label>
        </div>
        <button
          type="submit"
          className="p-4 text-base font-bold bg-gradient-to-r from-[#b3d1ff] to-[#8bb6f7] text-[#2a4365] rounded-xl border-none shadow-[0_2px_8px_#b3d1ff33] cursor-pointer transition-colors mt-2 w-full"
        >
          Sign Up
        </button>
        {error && <p className="text-[#e53e3e] font-bold mt-2">{error}</p>}
        {showTocModal && (
          <div className="fixed inset-0 w-screen h-screen bg-black/25 flex items-center justify-center z-[1000]">
            <div className="bg-white rounded-xl shadow-[0_4px_24px_#b3d1ff44] p-8 max-w-[480px] w-[90%] text-left relative">
              <h2 className="text-2xl font-bold text-[#2a4365] mb-4">Terms & Conditions</h2>
              <ul className="text-base text-[#2a4365] mb-6 pl-5 list-disc">
                <li>1. You agree to provide a valid email address for signup.</li>
                <li>2. Your data will be handled securely and not shared with third parties.</li>
                <li>3. You may receive updates and product news if you opt in for the newsletter.</li>
                <li>4. You can unsubscribe from the newsletter at any time.</li>
                <li>5. Use of this service is subject to change and may be discontinued at any time.</li>
              </ul>
              <button onClick={() => setShowTocModal(false)} className="absolute top-4 right-4 bg-none border-none text-2xl text-[#2a4365] cursor-pointer">×</button>
              <button onClick={() => setShowTocModal(false)} className="px-4 py-2 text-base font-bold bg-[#b3d1ff] text-[#2a4365] rounded-lg border-none shadow-[0_2px_8px_#b3d1ff33] cursor-pointer mt-4">Close</button>
            </div>
          </div>
        )}
					</form>
				)}
						</main>
				);
			}

