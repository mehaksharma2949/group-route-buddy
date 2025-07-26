import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Truck, User, ShieldCheck, Eye, EyeOff, Phone, MapPin } from "lucide-react";

const SignupPage = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('role') || 'vendor');
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    address: '',
    city: '',
    vehicleType: '',
    licenseNumber: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match!",
        variant: "destructive"
      });
      return;
    }

    if (step === 1) {
      setStep(2);
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const user = {
        id: '1',
        name: formData.name,
        email: formData.email,
        role: activeTab
      };

      localStorage.setItem('user', JSON.stringify(user));
      
      toast({
        title: "Account Created!",
        description: `Welcome to GroupDeliver, ${user.name}!`,
      });

      navigate(`/${activeTab}-dashboard`);
      setLoading(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const roleConfig = {
    vendor: {
      icon: User,
      title: "Join as Vendor",
      description: "Start placing orders and benefit from group delivery savings",
      color: "text-primary"
    },
    supplier: {
      icon: Truck,
      title: "Join as Supplier", 
      description: "Provide delivery services and earn from optimized routes",
      color: "text-success"
    },
    admin: {
      icon: ShieldCheck,
      title: "Admin Registration",
      description: "Administrative access to manage the platform",
      color: "text-warning"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Truck className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Join GroupDeliver</h1>
          <p className="text-muted-foreground mt-2">Create your account and start saving on deliveries</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="pb-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="vendor" className="text-xs">Vendor</TabsTrigger>
                <TabsTrigger value="supplier" className="text-xs">Supplier</TabsTrigger>
                <TabsTrigger value="admin" className="text-xs">Admin</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>

          <CardContent>
            <div className="text-center mb-6">
              <div className={`inline-flex p-3 rounded-full bg-muted mb-3 ${roleConfig[activeTab as keyof typeof roleConfig].color}`}>
                {(() => {
                  const IconComponent = roleConfig[activeTab as keyof typeof roleConfig].icon;
                  return <IconComponent className="h-6 w-6" />;
                })()}
              </div>
              <CardTitle className="text-lg">{roleConfig[activeTab as keyof typeof roleConfig].title}</CardTitle>
              <CardDescription className="text-sm mt-1">
                {roleConfig[activeTab as keyof typeof roleConfig].description}
              </CardDescription>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-muted'}`}></div>
                <div className={`w-8 h-0.5 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
                <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                // Step 1: Basic Information
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        required
                        className="h-11 pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a password"
                        required
                        className="h-11 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      required
                      className="h-11"
                    />
                  </div>
                </>
              ) : (
                // Step 2: Business Information
                <>
                  <div className="space-y-2">
                    <Label htmlFor="businessName">
                      {activeTab === 'vendor' ? 'Business/Store Name' : 'Company Name'}
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder={activeTab === 'vendor' ? 'Your store name' : 'Your company name'}
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Complete business address"
                      required
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Your city"
                        required
                        className="h-11 pl-10"
                      />
                    </div>
                  </div>

                  {activeTab === 'supplier' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="vehicleType">Vehicle Type</Label>
                        <Input
                          id="vehicleType"
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={handleInputChange}
                          placeholder="e.g., Bike, Car, Van, Truck"
                          required
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="licenseNumber">Driving License Number</Label>
                        <Input
                          id="licenseNumber"
                          name="licenseNumber"
                          value={formData.licenseNumber}
                          onChange={handleInputChange}
                          placeholder="Your driving license number"
                          required
                          className="h-11"
                        />
                      </div>
                    </>
                  )}
                </>
              )}

              <div className="flex gap-3">
                {step === 2 && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep(1)}
                    className="flex-1 h-11"
                  >
                    Back
                  </Button>
                )}
                <Button 
                  type="submit" 
                  className="flex-1 h-11" 
                  variant="hero"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : step === 1 ? "Continue" : "Create Account"}
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link 
                  to={`/login?role=${activeTab}`} 
                  className="text-primary hover:underline font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                By creating an account, you agree to our{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;