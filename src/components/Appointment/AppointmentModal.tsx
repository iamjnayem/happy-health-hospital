
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Phone, User, Mail, FileText } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { departments, doctors } from '@/data/mockData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: null as Date | null,
    message: '',
    otp: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({ ...prev, date }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you'd validate the form and send OTP
    setStep(2);
    setIsVerifying(true);
    
    // Simulate OTP sent
    setTimeout(() => {
      toast({
        title: "OTP Sent!",
        description: "A verification code has been sent to your phone.",
      });
      setIsVerifying(false);
    }, 1500);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you'd verify OTP
    setIsVerifying(true);
    
    // Simulate verification
    setTimeout(() => {
      setIsVerifying(false);
      setIsSubmitted(true);
      
      toast({
        title: "Appointment Booked!",
        description: "Your appointment has been successfully scheduled.",
      });
      
      // Redirect to patient portal in a real app
      setTimeout(() => {
        // Reset and close
        setStep(1);
        setFormData({
          name: '',
          phone: '',
          email: '',
          department: '',
          doctor: '',
          date: null,
          message: '',
          otp: ''
        });
        setIsSubmitted(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  const filteredDoctors = doctors.filter(doctor => 
    !formData.department || doctor.specialty === formData.department
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{step === 1 ? "Book an Appointment" : "Verify OTP"}</DialogTitle>
          <DialogDescription>
            {step === 1 
              ? "Fill in your details to schedule an appointment with our specialists." 
              : "Enter the verification code sent to your phone."
            }
          </DialogDescription>
        </DialogHeader>

        {step === 1 ? (
          <form onSubmit={handleContinue} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="pl-9"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="pl-9"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="pl-9"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select
                  value={formData.department}
                  onValueChange={(value) => handleSelectChange('department', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept.id} value={dept.name}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="doctor">Doctor</Label>
                <Select
                  value={formData.doctor}
                  onValueChange={(value) => handleSelectChange('doctor', value)}
                  disabled={!formData.department}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={formData.department ? "Select Doctor" : "Select Department First"} />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredDoctors.map((doctor) => (
                      <SelectItem key={doctor.id} value={doctor.name}>
                        {doctor.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? format(formData.date, 'PPP') : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.date || undefined}
                    onSelect={handleDateChange}
                    initialFocus
                    disabled={(date) => {
                      // Disable past dates and weekends
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      const day = date.getDay();
                      return date < today || day === 0 || day === 6;
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please share any specific concerns or requirements..."
                  className="min-h-[100px] pl-9"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-hospital-primary hover:bg-hospital-secondary">
              Continue to Verification
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="otp">Verification Code</Label>
              <Input
                id="otp"
                name="otp"
                placeholder="Enter the 6-digit code"
                className="text-center text-xl tracking-widest"
                maxLength={6}
                value={formData.otp}
                onChange={handleChange}
                required
              />
              <p className="text-sm text-muted-foreground text-center">
                A verification code has been sent to your phone number
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-hospital-primary hover:bg-hospital-secondary"
              disabled={isVerifying || isSubmitted}
            >
              {isVerifying ? "Verifying..." : isSubmitted ? "Verified!" : "Verify & Book Appointment"}
            </Button>
            
            <Button 
              type="button" 
              variant="ghost" 
              className="w-full"
              onClick={() => setStep(1)}
              disabled={isVerifying || isSubmitted}
            >
              Back to Form
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
