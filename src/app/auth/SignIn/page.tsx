
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

import Image from "next/image";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordTouched, setPasswordTouched] = useState(false);
	const [error, setError] = useState("");
	const router = useRouter();

	const handleSignIn = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			setError(error.message);
		} else {
			router.push("/authenticated/coming-soon");
		}
	};

			return (
					<main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #e6f0ff 0%, #f5faff 100%)'}}>
										<form onSubmit={handleSignIn} style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '1.5rem',
											width: '420px',
											background: 'rgba(255,255,255,0.95)',
											border: '4px solid #5c5c5c',
											borderRadius: '1.75rem',
											boxShadow: '12px 12px 0 #5c5c5c, 0 4px 24px rgba(0,0,0,0.10)',
											padding: '2.75rem 2.25rem',
											alignItems: 'center',
											backdropFilter: 'blur(2px)'
										}}>
						<Image
							src="/Wisker.png"
							alt="Wisker Logo"
							width={56}
							height={56}
							style={{marginBottom: '1.25rem', borderRadius: '0.75rem', border: '2px solid #b3d1ff', background: '#f5faff', boxShadow: '0 2px 8px #b3d1ff33'}}
						/>
						<h1 style={{fontSize: '2.25rem', fontWeight: 'bold', color: '#2a4365', marginBottom: '1.25rem', letterSpacing: '-1px'}}>Sign In</h1>
												<input
														type="email"
														placeholder="Email"
														value={email}
														onChange={e => setEmail(e.target.value)}
														required
														style={{
															padding: '1rem',
															fontSize: '1.05rem',
															borderRadius: '0.75rem',
															border: '1.5px solid #b3d1ff',
															background: '#f5faff',
															color: '#2a4365',
															width: '100%',
															boxShadow: '0 1px 4px #b3d1ff22',
															outline: 'none',
															transition: 'border 0.2s',
														}}
												/>
												<input
													type="password"
													placeholder="Password"
													value={password}
													onChange={e => setPassword(e.target.value)}
													onBlur={() => setPasswordTouched(true)}
													required
													style={{
														padding: '1rem',
														fontSize: '1.05rem',
														borderRadius: '0.75rem',
														border: passwordTouched && !password ? '2px solid #e53e3e' : '1.5px solid #b3d1ff',
														background: '#f5faff',
														color: '#2a4365',
														width: '100%',
														boxShadow: '0 1px 4px #b3d1ff22',
														outline: 'none',
														transition: 'border 0.2s',
													}}
												/>
												{passwordTouched && !password && (
													<span style={{color: '#e53e3e', fontSize: '0.95rem', fontWeight: 'bold', marginTop: '-1rem', alignSelf: 'flex-start'}}>Password is required.</span>
												)}
												<button type="submit" style={{
													padding: '1rem',
													fontSize: '1.05rem',
													fontWeight: 'bold',
													background: 'linear-gradient(90deg, #b3d1ff 60%, #8bb6f7 100%)',
													color: '#2a4365',
													borderRadius: '0.75rem',
													border: 'none',
													boxShadow: '0 2px 8px #b3d1ff33',
													cursor: 'pointer',
													transition: 'background 0.2s',
													marginTop: '0.5rem',
													width: '100%',
												}}>
													Sign In
												</button>
						{error && <p style={{color: '#e53e3e', fontWeight: 'bold', marginTop: '0.5rem'}}>{error}</p>}
					</form>
				</main>
			);
}
