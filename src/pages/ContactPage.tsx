import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock,
  HelpCircle,
  FileText,
  AlertTriangle
} from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'general'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email anytime",
      value: "support@groupdeliver.com",
      action: "mailto:support@groupdeliver.com"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us during business hours",
      value: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Support",
      description: "Quick assistance via WhatsApp",
      value: "+91 98765 43210",
      action: "https://wa.me/919876543210"
    },
    {
      icon: MapPin,
      title: "Office Address",
      description: "Visit our headquarters",
      value: "Mumbai, Maharashtra, India",
      action: "#"
    }
  ];

  const faqItems = [
    {
      question: "How does group delivery work?",
      answer: "Our AI groups orders from nearby vendors to the same supplier, optimizing routes and reducing costs for everyone."
    },
    {
      question: "How much can I save on delivery costs?",
      answer: "On average, vendors save 30-50% on delivery costs through our group delivery system."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order in real-time through your vendor dashboard or via SMS notifications."
    },
    {
      question: "What if my delivery is delayed?",
      answer: "You'll receive automatic notifications about any delays. You can also contact our support team for assistance."
    },
    {
      question: "How do I become a supplier?",
      answer: "Sign up on our platform, provide your vehicle details and license information, and complete the verification process."
    },
    {
      question: "Is there a minimum order value?",
      answer: "No, there's no minimum order value. However, larger orders help optimize group deliveries better."
    }
  ];

  const supportCategories = [
    { icon: FileText, title: "Delivery Issues", description: "Problems with orders or deliveries" },
    { icon: AlertTriangle, title: "Missing Items", description: "Report missing or damaged items" },
    { icon: HelpCircle, title: "Account Help", description: "Login, signup, or account issues" },
    { icon: MessageSquare, title: "General Inquiry", description: "Questions about our service" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-background to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact & Support</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get help, report issues, or ask questions. We're here to assist you with GroupDeliver.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.open(method.action, '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                <p className="text-sm font-medium text-primary">{method.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="delivery">Delivery Issue</option>
                    <option value="missing">Missing Item</option>
                    <option value="account">Account Help</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your inquiry"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your inquiry or issue"
                    required
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="space-y-6">
            {/* Support Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Support</CardTitle>
                <CardDescription>Common support categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {supportCategories.map((category, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 flex flex-col gap-2 text-left"
                    >
                      <category.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium text-sm">{category.title}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqItems.slice(0, 4).map((item, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-b-0">
                      <h4 className="font-medium text-foreground mb-2">{item.question}</h4>
                      <p className="text-sm text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">
                    View All FAQs
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>When you can reach us</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Customer Support</p>
                      <p className="text-sm text-muted-foreground">24/7 via email and chat</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-muted-foreground">Monday - Saturday, 10 AM - 8 PM IST</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;