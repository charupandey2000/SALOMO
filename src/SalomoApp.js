import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SalomoApp = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/images/1.jpg",
      alt: "Japanese professional hair styling"
    },
    {
      image: "/images/2.jpg",
      alt: "Japanese salon interior"
    },
    {
      image: "/images/3.jpg",
      alt: "Japanese hair treatment"
    }
  ];

  const stylists = [
    {
      name: "田中 美咲",
      specialties: ["カット", "カラー", "パーマ"],
      rating: 4.9,
      price: "¥3,000~",
      location: "渋谷",
      image: "https://images.unsplash.com/photo-1594824388853-e4d2b4dd4a6d?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "佐藤 健太",
      specialties: ["メンズカット", "スタイリング"],
      rating: 4.8,
      price: "¥2,500~",
      location: "新宿",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "鈴木 あい",
      specialties: ["トリートメント", "ヘッドスパ"],
      rating: 5.0,
      price: "¥4,000~",
      location: "表参道",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-green-500 mr-2">✨</span>
                <span className="text-gray-600">ランクシステムでミスマッチを避けて、マッチングに成功!</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                美容師マッチング&予約プラットフォーム
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                お客様が希望金額とメニューを投稿。美容師・マツエク・ネイルがオファーして、最短でマッチング。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/post')}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  お気軽として投稿 →
                </button>
                <button
                  onClick={() => navigate('/requests')}
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold"
                >
                  美容師として求人を見る
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                登録リクエストの数：マッチング数1000（Stripe決済）
              </p>
            </div>
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroSlides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">3つの簡単ステップ</h2>
          {/* 3 steps omitted for brevity */}
        </div>
      </section>

      {/* Featured Stylists Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">人気の美容師</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stylists.map((stylist, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={stylist.image} alt={stylist.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{stylist.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{stylist.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-600">{stylist.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {stylist.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{stylist.price}</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                      予約する
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            今すぐ理想の美容師を見つけよう
          </h2>
          <p className="text-green-100 text-lg mb-8">
            あなたの希望に合った美容師が必ず見つかります。まずは無料で投稿してみませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-green-500 px-8 py-3 rounded-lg font-semibold">
              無料で投稿する
            </button>
            <button className="border border-white hover:bg-white hover:text-green-500 text-white px-8 py-3 rounded-lg font-semibold">
              美容師として登録
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalomoApp;
