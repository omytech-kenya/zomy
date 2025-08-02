'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">ZOMY</span>
          </Link>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              {isSubmitted ? 'Check Your Email' : 'Reset Your Password'}
            </CardTitle>
            <p className="text-gray-600 mt-2">
              {isSubmitted 
                ? `We've sent a password reset link to ${email}`
                : 'Enter your email address and we\'ll send you a link to reset your password'
              }
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  Send Reset Link
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">
                  Didn't receive the email? Check your spam folder or{' '}
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                  >
                    try again
                  </button>
                </p>
              </div>
            )}

            <div className="text-center">
              <Link 
                href="/auth/login" 
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}