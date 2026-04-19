import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Layers, 
  Cpu, 
  Globe, 
  ChevronRight
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "名前は2文字以上で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(10, "メッセージは10文字以上で入力してください"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const techStack = [
  { name: "Frontend", icon: <Globe className="w-5 h-5 text-primary" />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", icon: <Cpu className="w-5 h-5 text-primary" />, items: ["Node.js", "Express", "Go", "PostgreSQL"] },
  { name: "Infrastructure", icon: <Layers className="w-5 h-5 text-primary" />, items: ["AWS", "Docker", "Terraform", "Vercel"] },
  { name: "AI/ML", icon: <Code2 className="w-5 h-5 text-primary" />, items: ["Gemini API", "OpenAI", "LangChain"] },
];

export default function App() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      console.log("Contact form payload:", data);
      toast.success("SYSTEM: MESSAGE_RECEIVED");
      reset();
    } catch (error) {
      toast.error("SYSTEM_ERROR: UNKNOWN");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative overflow-hidden">
      <div className="scanline" />
      <Toaster position="bottom-right" />
      
      {/* Header / Nav */}
      <header className="border-b border-border/20 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center h-14 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-primary flex items-center justify-center">
              <span className="text-primary text-[10px] font-bold">01</span>
            </div>
            <span className="text-[12px] font-bold tracking-[0.3em] uppercase">WJ_Systems</span>
          </div>
          <nav className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest">
            {[
              { label: "About", id: "about" },
              { label: "Stack", id: "tech" },
              { label: "Contact", id: "contact" }
            ].map((item, i) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-primary transition-colors flex items-center gap-1 group">
                <span className="text-primary opacity-60 group-hover:opacity-100 transition-opacity">[{ (i + 1).toString().padStart(2, '0') }]</span> {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-[10px] text-muted-foreground font-mono">
              STATUS: <span className="text-primary animate-pulse">● ONLINE</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto border-x border-border/10">
        {/* Hero Section */}
        <section className="border-b border-border/10 py-24 lg:py-40 px-6 sm:px-12 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-4 right-4 text-[10px] text-muted-foreground/30 font-mono hidden lg:block text-right">
            LAT: 35.6895° N <br />
            LNG: 139.6917° E <br />
            <span className="text-primary/40">SYSTEM_AUTH: OK</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl relative z-20 flex flex-col items-center"
          >
            <span className="tech-label flex items-center gap-2 justify-center">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Initialization_Sequence
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.85]">
              WJ_SYSTEMS <br />
              <span className="text-primary">ENGINEERING</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12 font-mono">
              &gt; フルスタックエンジニアとして、スケーラブルで堅牢なアーキテクチャを構築します。
              モダンな技術スタックと精密な設計で、ビジネスの課題をコードで解決します。
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button className="bg-primary text-primary-foreground font-bold uppercase text-[11px] tracking-widest h-14 px-10 rounded-none transition-transform hover:scale-105" asChild>
                <a href="#contact">Execute_Contact</a>
              </Button>
              <Button variant="outline" className="border-border/40 hover:border-primary hover:text-primary font-bold uppercase text-[11px] tracking-widest h-14 px-10 rounded-none transition-transform hover:scale-105" asChild>
                <a href="#about">Learn_More</a>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="border-b border-border/10 py-24 px-6 sm:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-12 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="tech-label">User_Profile</span>
              <h2 className="text-4xl font-bold uppercase tracking-tighter">About_Me</h2>
              <p className="text-base text-muted-foreground leading-relaxed font-mono max-w-2xl mx-auto">
                10年以上の開発経験。フロントエンドからインフラまで、
                一気通貫での開発と最適な技術選定を得意としています。
                複雑なシステムをシンプルに、そして確実なものへと変換するのが私の使命です。
              </p>
              <div className="flex justify-center gap-12 py-8 border-y border-border/10">
                {[
                  { icon: <Github className="w-6 h-6" />, label: "GitHub" },
                  { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
                  { icon: <Mail className="w-6 h-6" />, label: "Mail" }
                ].map((social) => (
                  <a key={social.label} href="#" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2 group">
                    {social.icon}
                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-xl w-full aspect-video border border-border/20 overflow-hidden grayscale contrast-125 relative group bg-muted"
            >
              <img 
                src="https://picsum.photos/seed/tech-engineer/800/800" 
                alt="Profile" 
                className="w-full h-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="border-b border-border/10 py-24 px-6 sm:px-12 bg-muted/20 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="tech-label">System_Capabilities</span>
            <h2 className="text-4xl font-bold uppercase tracking-tighter mb-16">Tech_Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {techStack.map((tech) => (
                <div key={tech.name} className="space-y-6 flex flex-col items-center">
                  <div className="p-4 border border-border/10 bg-background mb-2">
                    {tech.icon}
                  </div>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] mb-4">
                     {tech.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tech.items.map(item => (
                      <span key={item} className="text-[11px] border border-border/10 px-3 py-1.5 text-muted-foreground hover:bg-primary/5 hover:border-primary/40 hover:text-primary transition-all cursor-default font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 sm:px-12 bg-muted/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <span className="tech-label inline-flex">Communication_Channel</span>
              <h2 className="text-4xl font-bold uppercase tracking-tighter">Establish_Contact</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1 space-y-8">
                <div className="space-y-4 pt-4 border-t border-border/10">
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Availability</p>
                  <p className="text-sm font-mono text-primary animate-pulse flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    OPEN_FOR_NEW_PROJECTS
                  </p>
                </div>
                <div className="space-y-4 pt-4 border-t border-border/10">
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">Response_Time</p>
                  <p className="text-sm font-mono">&lt; 24_HOURS</p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/80">Sender_Name</Label>
                    <Input 
                      id="name" 
                      placeholder="NAME_REQUIRED" 
                      {...register("name")}
                      className="bg-background border-border/20 focus:border-primary focus:ring-primary/10 rounded-none h-12 text-xs font-mono transition-all"
                    />
                    {errors.name && <p className="text-[9px] text-destructive font-mono mt-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/80">Sender_Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="EMAIL_REQUIRED" 
                      {...register("email")}
                      className="bg-background border-border/20 focus:border-primary focus:ring-primary/10 rounded-none h-12 text-xs font-mono transition-all"
                    />
                    {errors.email && <p className="text-[9px] text-destructive font-mono mt-1">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/80">Message_Payload</Label>
                    <Textarea 
                      id="message" 
                      placeholder="INPUT_MESSAGE_DATA..." 
                      rows={6}
                      {...register("message")}
                      className="bg-background border-border/20 focus:border-primary focus:ring-primary/10 rounded-none text-xs font-mono resize-none transition-all"
                    />
                    {errors.message && <p className="text-[9px] text-destructive font-mono mt-1">{errors.message.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" className="w-full h-14 bg-primary text-primary-foreground font-bold uppercase tracking-[0.3em] text-[11px] rounded-none hover:bg-foreground transition-all hover:tracking-[0.4em]" disabled={isSubmitting}>
                      {isSubmitting ? "TRANSMITTING..." : "SEND_MESSAGE"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/10 py-12 bg-muted/20">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border border-primary/50 flex items-center justify-center">
              <span className="text-primary/50 text-[8px] font-bold">END</span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-50">Terminal_Session_2026</span>
          </div>
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-widest opacity-50">
            <a href="#" className="hover:text-primary transition-colors">Github</a>
            <a href="#" className="hover:text-primary transition-colors">Linkedin</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
          <p className="text-[9px] font-mono opacity-30 uppercase">
            &copy; {new Date().getFullYear()} ALL_RIGHTS_RESERVED // NO_UNAUTHORIZED_ACCESS
          </p>
        </div>
      </footer>
    </div>
  );
}
