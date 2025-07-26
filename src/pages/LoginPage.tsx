import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Truck, User, ShieldCheck, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('role') || 'vendor');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock authentication
      const user = {
        id: '1',
        name: activeTab === 'vendor' ? 'John Vendor' : activeTab === 'supplier' ? 'Jane Supplier' : 'Admin User',
        email: formData.email,
        role: activeTab
      };

      localStorage.setItem('user', JSON.stringify(user));
      
      toast({
        title: "Login Successful!",
        description: `Welcome back, ${user.name}!`,
      });

      // Redirect to appropriate dashboard
      navigate(`/${activeTab}-dashboard`);
      setLoading(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const roleConfig = {
    vendor: {
      icon: User,
      title: "Vendor Login",
      description: "Access your vendor dashboard to place orders and track deliveries",
      color: "text-primary"
    },
    supplier: {
      icon: Truck,
      title: "Supplier Login", 
      description: "Manage delivery routes and fulfill vendor orders efficiently",
      color: "text-success"
    },
    admin: {
      icon: ShieldCheck,
      title: "Admin Login",
      description: "Access the admin panel to monitor and manage the platform",
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
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to your GroupDeliver account</p>
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

            <form onSubmit={handleSubmit} className="space-y-4">
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
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full h-11" 
                variant="hero"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link 
                  to={`/signup?role=${activeTab}`} 
                  className="text-primary hover:underline font-medium"
                >
                  Sign up here
                </Link>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground text-center mb-2 font-medium">Demo Credentials:</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p><strong>Email:</strong> demo@groupdeliver.com</p>
                <p><strong>Password:</strong> demo123</p>
              </div>
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

export default LoginPage;