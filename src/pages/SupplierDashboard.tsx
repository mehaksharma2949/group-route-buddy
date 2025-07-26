import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  TruckIcon, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Package,
  Route,
  CheckCircle,
  Search,
  Download,
  MessageSquare,
  Phone
} from "lucide-react";

const SupplierDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  const stats = [
    { label: "Today's Routes", value: "3", icon: Route, color: "text-primary" },
    { label: "Total Orders", value: "12", icon: Package, color: "text-warning" },
    { label: "Earnings Today", value: "₹850", icon: DollarSign, color: "text-success" },
    { label: "Completed", value: "8", icon: CheckCircle, color: "text-success" }
  ];

  const todayRoutes = [
    {
      id: "RT001",
      area: "Sector 15-18",
      vendors: [
        { name: "Fresh Mart", items: "Vegetables, Fruits", orderValue: "₹450" },
        { name: "Daily Needs", items: "Groceries", orderValue: "₹320" },
        { name: "Quick Bites", items: "Snacks", orderValue: "₹180" }
      ],
      totalOrders: 3,
      estimatedTime: "2 hours",
      distance: "15 km",
      earnings: "₹280",
      status: "in-progress",
      startTime: "10:00 AM",
      estimatedCompletion: "12:30 PM"
    },
    {
      id: "RT002", 
      area: "Sector 20-22",
      vendors: [
        { name: "Green Grocer", items: "Organic Vegetables", orderValue: "₹600" },
        { name: "Corner Store", items: "Daily Essentials", orderValue: "₹290" }
      ],
      totalOrders: 2,
      estimatedTime: "1.5 hours",
      distance: "12 km", 
      earnings: "₹220",
      status: "pending",
      startTime: "2:00 PM",
      estimatedCompletion: "3:30 PM"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { variant: "default" as const, className: "bg-success text-success-foreground" },
      "in-progress": { variant: "secondary" as const, className: "bg-warning text-warning-foreground" },
      pending: { variant: "outline" as const, className: "" }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
  };

  const handleMarkDelivered = (routeId: string, vendorIndex: number) => {
    toast({
      title: "Order Marked as Delivered",
      description: "Vendor has been notified of successful delivery.",
    });
  };

  const handleStartRoute = (routeId: string) => {
    toast({
      title: "Route Started",
      description: "GPS navigation activated. Vendors have been notified.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Supplier Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user.name}! Manage your delivery routes</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Support Chat
              </Button>
              <Button variant="success" className="gap-2">
                <TruckIcon className="h-4 w-4" />
                Start Delivery
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Order Summary</TabsTrigger>
            <TabsTrigger value="routes">Route Map</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Today's Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle>Today's Schedule</CardTitle>
                  <CardDescription>Your planned delivery routes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {todayRoutes.map((route) => (
                      <div key={route.id} className="border border-border rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{route.id}</span>
                            <Badge {...getStatusBadge(route.status)}>{route.status}</Badge>
                          </div>
                          <span className="text-sm font-medium text-success">{route.earnings}</span>
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 mb-1">
                            <MapPin className="h-3 w-3" />
                            <span>{route.area} • {route.distance}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{route.startTime} - {route.estimatedCompletion}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {route.totalOrders} orders from {route.vendors.length} vendors
                          </span>
                          {route.status === 'pending' ? (
                            <Button 
                              size="sm" 
                              variant="hero"
                              onClick={() => handleStartRoute(route.id)}
                            >
                              Start Route
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Your delivery performance this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">On-time Delivery Rate</span>
                      <span className="font-medium text-success">94%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Customer Rating</span>
                      <span className="font-medium">4.8/5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Routes Completed</span>
                      <span className="font-medium">15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Total Earnings</span>
                      <span className="font-medium text-success">₹4,200</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Excellent Performance!</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      You're in the top 10% of suppliers this month.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Order Summary</CardTitle>
                    <CardDescription>Vendor requests grouped by location</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {todayRoutes.map((route) => (
                    <div key={route.id} className="border border-border rounded-lg overflow-hidden">
                      <div className="bg-muted/50 p-4 border-b border-border">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">{route.id} - {route.area}</h3>
                            <p className="text-sm text-muted-foreground">
                              {route.vendors.length} vendors • {route.distance} • {route.estimatedTime}
                            </p>
                          </div>
                          <Badge {...getStatusBadge(route.status)}>{route.status}</Badge>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="space-y-3">
                          {route.vendors.map((vendor, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium">{vendor.name}</span>
                                  <span className="text-sm text-muted-foreground">({vendor.orderValue})</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{vendor.items}</p>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  <Phone className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <MapPin className="h-4 w-4" />
                                </Button>
                                {route.status === 'in-progress' && (
                                  <Button 
                                    size="sm" 
                                    variant="success"
                                    onClick={() => handleMarkDelivered(route.id, index)}
                                  >
                                    Mark Delivered
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Routes Tab */}
          <TabsContent value="routes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Route Map & Navigation</CardTitle>
                <CardDescription>Optimized delivery routes with multi-stop planning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Map Placeholder */}
                  <div className="bg-muted/30 border-2 border-dashed border-border rounded-lg h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">Interactive Route Map</h3>
                      <p className="text-muted-foreground max-w-sm">
                        Google Maps integration with optimized multi-stop routes would be displayed here.
                      </p>
                      <Button className="mt-4" variant="hero">
                        Open Navigation
                      </Button>
                    </div>
                  </div>
                  
                  {/* Route Actions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                      <Download className="h-6 w-6" />
                      <span>Export Route PDF</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                      <MessageSquare className="h-6 w-6" />
                      <span>Send SMS Updates</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                      <Route className="h-6 w-6" />
                      <span>Optimize Route</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Earnings</CardTitle>
                  <CardDescription>Cost split breakdown per vendor</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {todayRoutes.map((route) => (
                      <div key={route.id} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium">{route.id}</span>
                          <span className="font-medium text-success">{route.earnings}</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          {route.vendors.map((vendor, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-muted-foreground">{vendor.name}</span>
                              <span>₹{Math.round(parseInt(route.earnings.replace('₹', '')) / route.vendors.length)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between font-medium">
                        <span>Total Today</span>
                        <span className="text-success">₹850</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                  <CardDescription>Weekly earnings and payment status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">This Week</span>
                      <span className="font-medium">₹4,200</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Last Week</span>
                      <span className="font-medium">₹3,850</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Pending Payment</span>
                      <span className="font-medium text-warning">₹1,200</span>
                    </div>
                    
                    <div className="border-t border-border pt-4">
                      <Button variant="hero" className="w-full">
                        Request Payment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SupplierDashboard;