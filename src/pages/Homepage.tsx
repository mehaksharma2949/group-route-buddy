import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import {
  Truck,
  Users,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Package,
  Route,
  TrendingDown,
  ShoppingCart,
  UserCheck,
  Building2,
  Plus
} from "lucide-react";
import heroImage from "@/assets/hero-delivery.jpg";
import groupDeliveryIcon from "@/assets/group-delivery-icon.jpg";
import routeOptimizationIcon from "@/assets/route-optimization-icon.jpg";
import costSavingsIcon from "@/assets/cost-savings-icon.jpg";

const Homepage = () => {
  const navigate = useNavigate();

  const handleNewOrder = () => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/vendor-dashboard');
    } else {
      navigate('/login');
    }
  };

  const vendorFeatures = [
    {
      icon: ShoppingCart,
      title: "Easy Ordering",
      description: "Simple interface to place and manage your delivery orders",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Save up to 40% on delivery costs through group orders",
      color: "text-success"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with local vendors and share delivery routes",
      color: "text-warning"
    }
  ];

  const supplierFeatures = [
    {
      icon: Route,
      title: "Route Optimization",
      description: "AI-powered routing to maximize efficiency and earnings",
      color: "text-primary"
    },
    {
      icon: Truck,
      title: "Fleet Management",
      description: "Manage multiple deliveries with real-time tracking",
      color: "text-success"
    },
    {
      icon: Building2,
      title: "Business Growth",
      description: "Expand your delivery business with grouped orders",
      color: "text-warning"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Restaurant Owner",
      content: "GroupDeliver reduced our delivery costs by 40%. The route optimization is incredible!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Grocery Store Owner",
      content: "Fast, reliable, and cost-effective. My customers love the predictable delivery times.",
      rating: 5
    },
    {
      name: "Mohammad Ali",
      role: "Delivery Supplier",
      content: "I can serve more customers efficiently and earn better with optimized routes.",
      rating: 5
    }
  ];

  const stats = [
    { label: "Cost Reduction", value: "40%", icon: TrendingDown },
    { label: "Faster Deliveries", value: "60%", icon: Clock },
    { label: "Active Vendors", value: "500+", icon: Users },
    { label: "Daily Orders", value: "2000+", icon: Package }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Smart Group Delivery Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Revolutionize Your{" "}
                  <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                    Delivery
                  </span>{" "}
                  Experience
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Join thousands of vendors and suppliers using smart grouping to reduce costs, 
                  save time, and optimize delivery routes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="hero" onClick={handleNewOrder} className="text-lg px-8 py-6">
                  <Plus className="mr-2 h-5 w-5" />
                  New Order
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                  <Link to="/signup?role=vendor">
                    Join as Vendor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                  <Link to="/signup?role=supplier">
                    Join as Supplier
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Group Delivery Platform"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl border">
                <div className="flex items-center space-x-3">
                  <div className="bg-success/10 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Order Delivered</div>
                    <div className="text-sm text-muted-foreground">Route optimized • Cost shared</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Features */}
      <section id="vendor-features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              For Vendors
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our platform and start saving on delivery costs while reaching more customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {vendorFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-background mb-6 ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="hero" asChild>
              <Link to="/signup?role=vendor">
                <UserCheck className="mr-2 h-5 w-5" />
                Join as Vendor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Supplier Features */}
      <section id="supplier-features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              For Suppliers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Optimize your delivery business with our smart routing and group order management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {supplierFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-background mb-6 ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="hero" asChild>
              <Link to="/signup?role=supplier">
                <Truck className="mr-2 h-5 w-5" />
                Join as Supplier
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied vendors and suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warning fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Delivery Experience?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join GroupDeliver today and start saving on delivery costs while improving efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link to="/signup?role=vendor">
                Get Started as Vendor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/signup?role=supplier">
                Join as Supplier
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;