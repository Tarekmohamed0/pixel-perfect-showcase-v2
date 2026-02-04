import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import { Facebook, Instagram, Linkedin, Calendar, ChevronDown } from "lucide-react";

const Catering = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const [formData, setFormData] = useState({
        type: "Corporate",
        date: "",
        details: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section with Description */}
            <section className="pt-[92px] bg-[#b5a99a] text-white bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/texture-background.png')" }}>
                <div className="container mx-auto px-6 py-16 md:py-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-[36px] font-bold mb-6 font-heading">
                                Catering
                            </h1>
                            <p className="text-[20px] font-medium leading-relaxed font-body">
                                At EATEN we present exceptional catering services dedicated to delivering a unique
                                experience suitable for any occasion. Recognized for our meticulous attention to detail,
                                ensuring that every event, whether an intimate gathering or a grand celebration,
                                transforms into a culinary work of art.
                            </p>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center md:justify-end"
                        >
                            <div className="w-[194px] h-[254px] overflow-hidden rounded-lg shadow-2xl transition-transform duration-500">
                                <img
                                    src="/lovable-uploads/catering-hero-food.png"
                                    alt="Gourmet dish"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Book Your Event Section */}
            <section ref={ref} className="bg-[#544b42] text-white py-16 md:py-20">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-[36px] font-bold mb-10 md:mb-12 font-heading"
                    >
                        Book Your Event
                    </motion.h2>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        {/* Type and Date Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Type Field */}
                            <div className="space-y-3">
                                <label className="block text-[20px] font-semibold font-body">
                                    Type
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                        className="w-full px-4 py-3 md:py-4 rounded-lg bg-white text-[#544b42] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
                                    >
                                        <option value="Corporate">Corporate</option>
                                        <option value="Wedding">Wedding</option>
                                        <option value="Private">Private</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#544b42]">
                                        <ChevronDown size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Date Field */}
                            <div className="space-y-3">
                                <label className="block text-[20px] font-semibold font-body">
                                    Date
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        placeholder="Choose date"
                                        className="w-full px-4 py-3 md:py-4 rounded-lg bg-white text-[#544b42] focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <Calendar size={20} className="text-[#544b42]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Details Field */}
                        <div className="space-y-3">
                            <label className="block text-[20px] font-semibold font-body">
                                Details
                            </label>
                            <textarea
                                value={formData.details}
                                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                placeholder="Details"
                                rows={6}
                                className="w-full px-4 py-3 md:py-4 rounded-lg bg-white text-[#544b42] focus:outline-none focus:ring-2 focus:ring-white/50 resize-none font-medium placeholder:text-gray-400"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="px-10 md:px-12 py-3 md:py-4 border-2 border-white rounded-lg text-white font-medium hover:bg-white hover:text-[#544b42] transition-all duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </motion.form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#b5a99a] text-white py-8 md:py-10 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/texture-background.png')" }}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Left: Contact Information */}
                        <div className="space-y-2">
                            <p className="text-sm font-body">
                                <span className="font-normal">Address:</span>{" "}
                                <span>The industrial zone, New Cairo, Third settlement, No. 342, Cairo, Egypt.</span>
                            </p>
                            <p className="text-sm font-body">
                                <span className="font-normal">Opening Hours:</span> Sunday - Thursday 9AM - 5PM
                            </p>
                            <p className="text-sm font-body">
                                <span className="font-normal">Phone:</span> +2(611)147-22
                            </p>
                        </div>

                        {/* Right: Social Icons */}
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Catering;
