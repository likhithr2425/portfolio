"use client"
import { Container } from "../Container"
import Image from "next/image";
import { navItems } from "./navigationContent";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";

export const Navbar = () => {
    const [hovered, setHovered] = useState<string | null>(null)
    
    return(
        <Container className="rounded-xl py-[2]">
           <nav className="flex items-center justify-between">
                <Image 
                    className="h-15 w-20 rounded-full" 
                    src="/portfolioImage.png" 
                    alt="likhith" 
                    width={100} 
                    height={100}
                />
                <div className="flex items-center gap-2 px-2">
                    {navItems.map((item) => (
                        <Link 
                            className="relative text-sm px-5 py-3 block"
                            href={item.href} 
                            key={item.id}
                            onMouseEnter={() => setHovered(item.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <AnimatePresence>
                                {hovered === item.id && (
                                    <motion.span 
                                        layoutId="hovered-span" 
                                        className="absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            <span className="relative z-10">{item.title}</span>
                        </Link>
                    ))}
                </div>
           </nav>
        </Container>
    )
};