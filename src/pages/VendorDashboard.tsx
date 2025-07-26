import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Package, 
  Clock, 
  CheckCircle, 
  TruckIcon, 
  Plus,
  Search,
  MapPin,
  Users,
  Calendar,
  Eye,
  Edit3,
  Trash2
} from "lucide-react";

const VendorDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock data
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const stats = [
    { label: "Today's Orders", value: "3", icon: Package, color: "text-primary" },
    { label: "In Transit", value: "2", icon: TruckIcon, color: "text-warning" },
    { label: "Delivered", value: "15", icon: CheckCircle, color: "text-success" },
    { label: "Cost Saved", value: "₹240", icon: Calendar, color: "text-primary" }
  ];

  const recentOrders = [
    {
      id: "ORD001",
      items: "Rice 5kg, Dal 2kg, Oil 1L",
      status: "delivered",
      groupSize: 4,
      cost: "₹45",
      savedAmount: "₹30",
      date: "2024-01-15",
      time: "14:30",
      deliveryPartner: "Rajesh Kumar"
    },
    {
      id: "ORD002", 
      items: "Vegetables Mix, Fruits",
      status: "in-transit",
      groupSize: 3,
      cost: "₹35",
      savedAmount: "₹20",
      date: "2024-01-16",
      time: "11:00",
      deliveryPartner: "Priya Sharma"
    },
    {
      id: "ORD003",
      items: "Snacks, Beverages",
      status: "pending",
      groupSize: 5,
      cost: "₹28",
      savedAmount: "₹35",
      date: "2024-01-17",
      time: "16:00",
      deliveryPartner: "To be assigned"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      delivered: { variant: "default" as const, className: "bg-success text-success-foreground" },
      "in-transit": { variant: "secondary" as const, className: "bg-warning text-warning-foreground" },
      pending: { variant: "outline" as const, className: "" }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
  };

  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been added to the group delivery queue.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome back, {user.name}!</h1>
              <p className="text-muted-foreground">Manage your orders and track deliveries</p>
            </div>
            <Button variant="hero" className="gap-2">
              <Plus className="h-4 w-4" />
              New Order
            </Button>
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
            <TabsTrigger value="place-order">Place Order</TabsTrigger>
            <TabsTrigger value="my-orders">My Orders</TabsTrigger>
            <TabsTrigger value="group-details">Group Details</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Today's Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Today's Activity</CardTitle>
                  <CardDescription>Your delivery status for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.slice(0, 2).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{order.id}</span>
                            <Badge {...getStatusBadge(order.status)}>{order.status}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{order.items}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Group of {order.groupSize} • Saved {order.savedAmount}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{order.cost}</p>
                          <p className="text-xs text-muted-foreground">{order.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="h-auto p-4 flex flex-col gap-2"
                      onClick={() => setActiveTab("place-order")}
                    >
                      <Plus className="h-6 w-6" />
                      <span>Place Order</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-auto p-4 flex flex-col gap-2"
                      onClick={() => setActiveTab("my-orders")}
                    >
                      <Package className="h-6 w-6" />
                      <span>My Orders</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-auto p-4 flex flex-col gap-2"
                      onClick={() => setActiveTab("group-details")}
                    >
                      <Users className="h-6 w-6" />
                      <span>Group Info</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-auto p-4 flex flex-col gap-2"
                    >
                      <MapPin className="h-6 w-6" />
                      <span>Track Delivery</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Place Order Tab */}
          <TabsContent value="place-order" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Place New Order</CardTitle>
                <CardDescription>Add items to your delivery request</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="items">Items & Quantities</Label>
                        <Textarea
                          id="items"
                          placeholder="e.g., Rice 5kg, Dal 2kg, Milk 2L"
                          className="mt-1 min-h-[100px]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="delivery-time">Preferred Delivery Time</Label>
                        <Input
                          id="delivery-time"
                          type="datetime-local"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Delivery Address</Label>
                        <Textarea
                          id="address"
                          placeholder="Enter complete delivery address"
                          className="mt-1 min-h-[100px]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="notes">Special Instructions</Label>
                        <Input
                          id="notes"
                          placeholder="Any special delivery notes"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    Confirm Order for Tomorrow
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Orders Tab */}
          <TabsContent value="my-orders" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Orders</CardTitle>
                    <CardDescription>View and manage your order history</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search orders..."
                        className="pl-10 w-[200px]"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{order.id}</span>
                          <Badge {...getStatusBadge(order.status)}>{order.status}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {order.date} at {order.time}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {order.status === 'pending' && (
                            <>
                              <Button variant="ghost" size="sm">
                                <Edit3 className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-destructive">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Items</p>
                          <p className="text-sm">{order.items}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Delivery Partner</p>
                          <p className="text-sm">{order.deliveryPartner}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-muted-foreground">Cost & Savings</p>
                          <p className="text-sm">
                            <span className="font-medium">{order.cost}</span> 
                            <span className="text-success ml-2">(Saved {order.savedAmount})</span>
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Grouped with {order.groupSize - 1} other vendors</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Group Details Tab */}
          <TabsContent value="group-details" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Group Delivery Details</CardTitle>
                <CardDescription>See which vendors are grouped with your orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Today's Group (Order #ORD002)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Drop Location:</p>
                        <p>Central Market, Sector 15</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Expected Arrival:</p>
                        <p>2:30 PM - 3:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Grouped Vendors</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Fresh Mart", items: "Vegetables, Fruits", status: "confirmed" },
                        { name: "Daily Needs Store", items: "Groceries", status: "confirmed" },
                        { name: "Quick Bites", items: "Snacks", status: "pending" }
                      ].map((vendor, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <p className="font-medium">{vendor.name}</p>
                            <p className="text-sm text-muted-foreground">{vendor.items}</p>
                          </div>
                          <Badge {...getStatusBadge(vendor.status)}>{vendor.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorDashboard;