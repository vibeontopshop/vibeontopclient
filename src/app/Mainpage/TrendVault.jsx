"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const TrendVault = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center w-full p-4 md:p-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-between items-center w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-[#CEB863] text-4xl md:text-8xl uppercase font-bold"
        >
          Trend Vault
        </motion.h1>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 15px rgba(206, 184, 99, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 md:mt-0 px-6 md:px-14 py-3 md:py-5 text-base font-medium text-white rounded-xl shadow-lg bg-[#CEB863] hover:bg-[#b39c54] transition-all"
          aria-label="Shop now"
        >
          SHOP NOW
        </motion.button>
      </motion.div>

      {/* Image Grid */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.4 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 w-full"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {[
            "870c079b3e6a574a2d3aac0ba3913700bd98f069e335baab67c45f1c8743b21a",
            "b00e2882d3224b98aeaf2059de3d0ed0ec3f861a95808750fd82698192525331",
          ].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.3,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 1,
                transition: { duration: 0.3 },
              }}
              className="relative h-60 md:h-[350px] overflow-hidden rounded-lg"
            >
              <Image
                src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${img}`}
                alt={`Fashion ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute bottom-10 left-5 w-full bg-black bg-opacity-50 backdrop-blur-md text-white p-3"
              >
                <h2 className="text-lg font-semibold">Jacquard Fabric</h2>
                <p className="text-sm">03 — Summer Sale</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Right Column (Large Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.6,
            type: "spring",
            stiffness: 120,
          }}
          whileHover={{
            scale: 1.05,
            rotate: 1,
            transition: { duration: 0.3 },
          }}
          className="relative h-96 sm:h-[600px] md:col-span-2 overflow-hidden rounded-lg "
        >
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec2cc20923b386fe87b6c3d87a0ebd9c08695fc74c58ea20da839926609a267b"
            alt="Fashion 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="absolute bottom-5 left-4 mb-20 bg-black bg-opacity-40 backdrop-blur-md text-white px-10 py-12 rounded-lg w-2/3 md:w-1/2"
          >
            <h2 className="text-lg font-semibold">Jacquard Fabric</h2>
            <p className="text-sm">03 — Summer Sale</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TrendVault;
