'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './CoreValuesAnimation.module.css';

const coreValues = [
  {
    id: 1,
    name: 'Disiplin',
    color: '#A64D9A',
    desc: 'Komitmen terhadap standar tertinggi dalam setiap aspek operasi kami'
  },
  {
    id: 2,
    name: 'Pantang Menyerah',
    color: '#E63946',
    desc: 'Determinasi untuk mengatasi tantangan dan mencapai tujuan ambisius'
  },
  {
    id: 3,
    name: 'Keadilan',
    color: '#4CAF50',
    desc: 'Perlakuan adil dan transparan kepada semua pemangku kepentingan'
  },
  {
    id: 4,
    name: 'Kebersahaman',
    color: '#FFEB3B',
    desc: 'Kesadaran mendalam tentang dampak sosial dan lingkungan kami'
  },
  {
    id: 5,
    name: 'Bijaksana',
    color: '#2196F3',
    desc: 'Keputusan yang didasarkan pada pertimbangan jangka panjang'
  },
  {
    id: 6,
    name: 'Kesatuan Sikap',
    color: '#8B6F47',
    desc: 'Harmoni dan sinergi dalam budaya organisasi kami'
  },
  {
    id: 7,
    name: 'Dipercaya',
    color: '#FF9800',
    desc: 'Integritas dan kredibilitas dalam semua hubungan bisnis kami'
  },
];

export default function CoreValuesAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.8]);

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      ></motion.div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Nilai-Nilai Inti Kami
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Tujuh pilar nilai yang membimbing setiap keputusan dan tindakan kami
          </p>
        </motion.div>

        {/* Rotating Border Animation with Static Center */}
        <motion.div
          style={{ scale, opacity }}
          className="flex justify-center mb-20"
        >
          <div className={styles.container}>
            {/* Static Center Image */}
            <div className={styles.centerContent}>
              <div className={styles.centerImage}>
                <img
                  src="/core-values-center.png"
                  alt="Hasnur Group Core Values"
                />
              </div>
            </div>

            {/* Rotating Border Element */}
            <div className={styles.rotatingContainer}>
              <img
                src="/core-values-border.png"
                alt="Rotating Core Values Border"
              />
            </div>
          </div>
        </motion.div>

        {/* Values Grid Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
              className={styles.valueCard}
              style={{ borderColor: value.color }}
            >
              <h4 style={{ color: value.color }}>
                {value.name}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
