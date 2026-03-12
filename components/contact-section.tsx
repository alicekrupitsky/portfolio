import ButtonSocialIconDemo from "@/components/ui/social-icon";

export default function ContactSection() {
  return (
    <section className="max-w-xl mx-auto overflow-hidden rounded-[18px] border-[4px] border-[#1a3d2f] bg-[#e6fff2] shadow-[6px_6px_0px_#1a3d2f]">
      <div className="flex items-center gap-2.5 border-b-[4px] border-[#1a3d2f] bg-[#3a7c4a] px-4 py-3 text-white">
        <strong>Connect.EXE</strong>
      </div>

      <div className="p-6 text-[23px] leading-relaxed tracking-[0.02em] text-[#1a3d2f]">
        <div className="mt-1 mb-8 text-center text-[48px] text-[#3a7c4a]">
          Want to work together? <br />
          Let’s chat!
        </div>

        <div className="mt-6 flex justify-center">
          <ButtonSocialIconDemo />
        </div>
      </div>
    </section>
  );
}