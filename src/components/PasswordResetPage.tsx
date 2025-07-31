import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Shield, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

// Mock Firebase functions for demo - replace with actual Firebase imports
const mockFirebase = {
  auth: () => ({
    verifyPasswordResetCode: async (oobCode: string) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (oobCode === 'invalid') {
        throw new Error('Invalid or expired password reset code');
      }
      return 'user@example.com'; // Returns email associated with the code
    },
    confirmPasswordReset: async (oobCode: string, newPassword: string) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (oobCode === 'invalid') {
        throw new Error('Invalid or expired password reset code');
      }
      return true;
    }
  })
};

export function PasswordResetPage() {
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

  const validateResetCode = async (code: string) => {
    try {
      setIsValidating(true);
      setValidationError('');
      
      // Replace with actual Firebase call:
      // const userEmail = await firebase.auth().verifyPasswordResetCode(code);
      const userEmail = await mockFirebase.auth().verifyPasswordResetCode(code);
      
      setEmail(userEmail);
      setIsValid(true);
    } catch (err) {
      setValidationError(err instanceof Error ? err.message : 'Invalid or expired reset link');
      setIsValid(false);
    } finally {
      setIsValidating(false);
    }
  };

  const validatePassword = (password: string): string[] => {
    const errors: string[] = [];
    if (password.length < 8) errors.push('At least 8 characters');
    if (!/[A-Z]/.test(password)) errors.push('One uppercase letter');
    if (!/[a-z]/.test(password)) errors.push('One lowercase letter');
    if (!/\d/.test(password)) errors.push('One number');
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push('One special character');
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!oobCode) return;

    setError('');
    
    // Validate passwords match
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password strength
    const passwordErrors = validatePassword(newPassword);
    if (passwordErrors.length > 0) {
      setError(`Password must include: ${passwordErrors.join(', ')}`);
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Replace with actual Firebase call:
      // await firebase.auth().confirmPasswordReset(oobCode, newPassword);
      await mockFirebase.auth().confirmPasswordReset(oobCode, newPassword);
      
      setIsComplete(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reset password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const passwordErrors = newPassword ? validatePassword(newPassword) : [];
  const isPasswordValid = passwordErrors.length === 0;
  const isFormValid = isPasswordValid && newPassword === confirmPassword && newPassword.length > 0;

  if (isValidating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
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