import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  TruckIcon, 
  Package, 
  DollarSign,
  TrendingUp,
  AlertTriangle,
  MessageSquare,
  Settings,
  BarChart3,
  Search,
  Filter,
  Download,
  Bell
} from "lucide-react";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  const stats = [
    { label: "Total Orders", value: "1,247", change: "+12%", icon: Package, color: "text-primary" },
    { label: "Active Vendors", value: "342", change: "+8%", icon: Users, color: "text-success" },
    { label: "Active Suppliers", value: "89", change: "+15%", icon: TruckIcon, color: "text-warning" },
    { label: "Revenue", value: "₹2.4L", change: "+23%", icon: DollarSign, color: "text-success" }
  ];

  const recentActivities = [
    { type: "order", message: "New order placed by Fresh Mart", time: "2 mins ago", status: "info" },
    { type: "delivery", message: "Route RT001 completed successfully", time: "15 mins ago", status: "success" },
    { type: "signup", message: "New supplier registered: Quick Logistics", time: "1 hour ago", status: "info" },
    { type: "issue", message: "Delivery delay reported for Sector 18", time: "2 hours ago", status: "warning" }
  ];

  const topPerformers = {
    vendors: [
      { name: "Fresh Mart", orders: 45, savings: "₹1,200" },
      { name: "Daily Needs Store", orders: 38, savings: "₹980" },
      { name: "Green Grocer", orders: 32, savings: "₹850" }
    ],
    suppliers: [
      { name: "Rajesh Kumar", deliveries: 28, rating: 4.9 },
      { name: "Priya Logistics", deliveries: 24, rating: 4.8 },
      { name: "Quick Transport", deliveries: 20, rating: 4.7 }
    ]
  };

  const routeOptimization = [
    { area: "Sector 15-18", orders: 12, efficiency: "94%", savings: "₹340" },
    { area: "Sector 20-22", orders: 8, efficiency: "89%", savings: "₹220" },
    { area: "Central Market", orders: 15, efficiency: "97%", savings: "₹450" }
  ];

  const handleSendAnnouncement = () => {
    toast({
      title: "Announcement Sent",
      description: "SMS/Email notification sent to all users.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Platform overview and management controls</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </Button>
              <Button variant="outline" className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
              <Button variant="hero" className="gap-2" onClick={handleSendAnnouncement}>
                <MessageSquare className="h-4 w-4" />
                Send Announcement
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
                    <p className="text-sm text-success font-medium">{stat.change} from last month</p>
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest platform activities and events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'success' ? 'bg-success' :
                          activity.status === 'warning' ? 'bg-warning' : 'bg-primary'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.message}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Route Optimization Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Route Optimization</CardTitle>
                  <CardDescription>AI-generated route efficiency metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {routeOptimization.map((route, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">{route.area}</p>
                          <p className="text-sm text-muted-foreground">{route.orders} orders</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-success">{route.efficiency}</p>
                          <p className="text-xs text-muted-foreground">Saved {route.savings}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-2 text-success">
                      <TrendingUp className="h-5 w-5" />
                      <span className="font-medium">Overall Efficiency: 93%</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      ₹1,010 saved across all routes today
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Performers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Vendors</CardTitle>
                  <CardDescription>Most active vendors this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topPerformers.vendors.map((vendor, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">{vendor.name}</p>
                          <p className="text-sm text-muted-foreground">{vendor.orders} orders</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-success">{vendor.savings}</p>
                          <p className="text-xs text-muted-foreground">Total saved</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Suppliers</CardTitle>
                  <CardDescription>Best performing suppliers this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topPerformers.suppliers.map((supplier, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <p className="font-medium">{supplier.name}</p>
                          <p className="text-sm text-muted-foreground">{supplier.deliveries} deliveries</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{supplier.rating}/5.0</p>
                          <p className="text-xs text-muted-foreground">Rating</p>
                        </div>
                      </div>
                    ))}
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
                    <CardTitle>Order Management</CardTitle>
                    <CardDescription>Monitor and manage all platform orders</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search orders..." className="pl-10 w-[200px]" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Order summary cards would go here */}
                  <div className="text-center py-12 text-muted-foreground">
                    <Package className="h-12 w-12 mx-auto mb-4" />
                    <p>Detailed order management interface would be implemented here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage vendors, suppliers, and admin accounts</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Add User
                    </Button>
                    <Button variant="outline" size="sm">
                      Bulk Actions
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 border border-border rounded-lg">
                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">342</p>
                    <p className="text-sm text-muted-foreground">Total Vendors</p>
                  </div>
                  <div className="text-center p-6 border border-border rounded-lg">
                    <TruckIcon className="h-8 w-8 mx-auto mb-2 text-success" />
                    <p className="text-2xl font-bold">89</p>
                    <p className="text-sm text-muted-foreground">Total Suppliers</p>
                  </div>
                  <div className="text-center p-6 border border-border rounded-lg">
                    <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-warning" />
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-sm text-muted-foreground">Flagged Accounts</p>
                  </div>
                </div>
                
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <p>User management interface would be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>Comprehensive performance metrics and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                  <p>Advanced analytics dashboard with charts and reports would be implemented here</p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground">Daily Active Users</p>
                      <p className="text-xl font-bold">245</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground">Route Efficiency</p>
                      <p className="text-xl font-bold">93%</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground">Cost Savings</p>
                      <p className="text-xl font-bold">₹12.4K</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <p className="text-sm text-muted-foreground">User Satisfaction</p>
                      <p className="text-xl font-bold">4.7/5</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure platform parameters and policies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Settings className="h-12 w-12 mx-auto mb-4" />
                  <p>Platform configuration and settings panel would be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;