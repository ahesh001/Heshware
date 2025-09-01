import React, { useState, useEffect } from 'react';
import { getAuth, verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig"; // Adjust the import path as necessary
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Shield, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function PasswordResetPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [oobCode, setOobCode] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    const code = searchParams.get('oobCode');
    if (!code) {
      setValidationError('Invalid password reset link. No reset code found.');
      setIsValidating(false);
      return;
    }

    setOobCode(code);
    validateResetCode(code);
  }, [searchParams]);

    // Validate the code
  const validateResetCode = async (code: string) => {
    try {
      setIsValidating(true);
      setValidationError("");
      const userEmail = await verifyPasswordResetCode(auth, code);
      setEmail(userEmail);
      setIsValid(true);
    } catch (err: any) {
      setValidationError(err.message ?? "Invalid or expired reset link");
      setIsValid(false);
    } finally {
      setIsValidating(false);
    }
  };

  // Password strength check
  const validatePassword = (password: string): string[] => {
    const errors: string[] = [];
    if (password.length < 8) errors.push("At least 8 characters");
    if (!/[A-Z]/.test(password)) errors.push("One uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("One lowercase letter");
    if (!/\d/.test(password)) errors.push("One number");
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) errors.push("One special character");
    return errors;
  };

  // Handle password reset submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!oobCode) return;

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const passwordErrors = validatePassword(newPassword);
    if (passwordErrors.length > 0) {
      setError(`Password must include: ${passwordErrors.join(", ")}`);
      return;
    }
    try {
      setIsSubmitting(true);
      await confirmPasswordReset(auth, oobCode, newPassword);
      setIsComplete(true);
    } catch (err: any) {
      setError(err.message ?? "Failed to reset password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const passwordErrors = newPassword ? validatePassword(newPassword) : [];
  const isPasswordValid = passwordErrors.length === 0;
  const isFormValid = isPasswordValid && newPassword === confirmPassword && newPassword.length > 0;

  if (isValidating) {
    return (
      <div style={{ background: "#fff", minHeight: "100vh" }} className="flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="text-sm text-muted-foreground">Validating reset link...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (validationError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <XCircle className="mx-auto h-12 w-12 text-destructive mb-4" />
            <CardTitle className="text-destructive">Invalid Reset Link</CardTitle>
            <CardDescription>{validationError}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => navigate('/labor-tracker')}
              className="w-full"
              variant="outline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Labor Tracker
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-600 mb-4" />
            <CardTitle className="text-green-600">Password Reset Complete</CardTitle>
            <CardDescription>
              Your password has been successfully reset. You can now sign in with your new password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => navigate('/labor-tracker')}
              className="w-full"
            >
              Continue to Labor Tracker
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Shield className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <CardTitle>Reset Your Password</CardTitle>
          <CardDescription>
            Enter a new password for <strong>{email}</strong>
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="new-password"
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="pl-10 pr-10"
                  placeholder="Enter new password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              
              {newPassword && (
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Password requirements:</p>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    {[
                      { check: newPassword.length >= 8, text: 'At least 8 characters' },
                      { check: /[A-Z]/.test(newPassword), text: 'One uppercase letter' },
                      { check: /[a-z]/.test(newPassword), text: 'One lowercase letter' },
                      { check: /\d/.test(newPassword), text: 'One number' },
                      { check: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword), text: 'One special character' }
                    ].map((req, index) => (
                      <div key={index} className={`flex items-center gap-1 ${req.check ? 'text-green-600' : 'text-muted-foreground'}`}>
                        <div className={`w-1 h-1 rounded-full ${req.check ? 'bg-green-600' : 'bg-muted-foreground'}`} />
                        {req.text}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 pr-10"
                  placeholder="Confirm new password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              
              {confirmPassword && newPassword !== confirmPassword && (
                <p className="text-xs text-destructive">Passwords do not match</p>
              )}
              
              {confirmPassword && newPassword === confirmPassword && confirmPassword.length > 0 && (
                <p className="text-xs text-green-600">Passwords match</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Resetting Password...
                </>
              ) : (
                'Reset Password'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/labor-tracker')}
              className="text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Labor Tracker
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function setValidationError(arg0: string) {
  throw new Error("Function not implemented.");
}
function setIsValidating(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setOobCode(code: any) {
  throw new Error("Function not implemented.");
}

function setIsValid(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setError(arg0: string) {
  throw new Error("Function not implemented.");
}

function validatePassword(newPassword: any) {
  throw new Error("Function not implemented.");
}

function setIsSubmitting(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setIsComplete(arg0: boolean) {
  throw new Error("Function not implemented.");
}

