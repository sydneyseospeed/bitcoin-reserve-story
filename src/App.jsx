import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Clock, Bitcoin, Heart, TrendingUp, Users, Download, ArrowRight, ExternalLink } from 'lucide-react'
import './App.css'
import logoSvg from './assets/Logotype.svg'
import backgroundPattern from './assets/brand/bg-waves.png'
import bitcoinIcon from './assets/bitcoin-favicon.png'
import fatherSonImage from './assets/father-son-family.png'
import goldenTicketImage from './assets/golden-ticket.png'
import xIcon from './assets/brand/x.svg'
import instagramIcon from './assets/brand/instagram.svg'
import facebookIcon from './assets/brand/facebook.svg'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* 3D Background Pattern - Excluding header and footer */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${backgroundPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          top: '64px', // Exclude header
          bottom: '120px' // Exclude footer
        }}
      />
      
      {/* Flowing Overlay Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/15 to-teal-600/15 rounded-full blur-3xl transform translate-x-1/2" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-blue-500/20 to-cyan-600/20 rounded-full blur-3xl transform translate-y-1/2" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logoSvg} alt="Bitcoin Reserve" className="h-8 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="https://bitcoinreserve.bio" className="text-slate-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#story" className="text-slate-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  The Story
                </a>
                <a href="#mission" className="text-slate-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Our Mission
                </a>
                <a href="#" className="text-slate-300 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Bitcoin Dad Ledger
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <img src={bitcoinIcon} alt="Bitcoin" className="w-24 h-24 rounded-2xl shadow-2xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The <span className="text-orange-400">Missed Mint</span><br />
              That Built Bitcoin Reserve
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              How a $33,000+ mistake became the foundation for helping Bitcoin dads build generational wealth
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
              onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
            >
              Read the Full Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Story Introduction */}
      <section id="story" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-8 border border-orange-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                "I had the whitelist. I had the BTC. I waited two years."
              </h2>
              <p className="text-2xl text-orange-400 font-semibold mb-4">
                "And I still missed it."
              </p>
              <p className="text-xl text-slate-300">
                But that moment didn't end the mission. It cemented it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Setup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">The Setup</h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-slate-900/50 rounded-lg p-8 mb-8 border border-slate-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Bitcoin Reserve was already in motion. I'd been building it quietly, nights, weekends, between bakery shifts. 
                Stacking sats through Bitaroo for my sons. Laying the groundwork for a real, public proof-of-work ledger.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Not just for me, for every dad who wanted to leave something true.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Then came the Taproot Wizards mint. The OG Ordinals project. Cultural. Iconic. Rare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/40 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <img src={goldenTicketImage} alt="Golden Ticket" className="w-32 h-32 rounded-lg shadow-lg" />
                  </div>
                  <Bitcoin className="h-12 w-12 text-orange-400 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-white mb-3">The Golden Ticket</h3>
                  <p className="text-slate-200 mb-4">
                    Normal mint price: 0.2 BTC. But I held one of only 100 golden tickets, whitelist access at 0.1 BTC.
                  </p>
                  <p className="text-orange-300 font-semibold">
                    I'd earned that ticket two years earlier. It was supposed to be the reward for sticking it out.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <img src={fatherSonImage} alt="Father teaching son about money" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <Heart className="h-12 w-12 text-orange-400 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-white mb-3">For My Boys</h3>
                  <p className="text-slate-300 mb-4">
                    I pulled ~$800 from the boys' Bitaroo DCA fund, scraped together the rest, verified the Express wallet, and prepared.
                  </p>
                  <p className="text-orange-400 font-semibold">
                    This was going to be for them.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Miss */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">The Miss</h2>
          
          <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center bg-orange-500/10 rounded-lg p-6 border border-orange-500/20 transform hover:scale-105 transition-all duration-300">
                <Clock className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">8 Hours</h3>
                <p className="text-slate-300">The golden ticket window</p>
              </div>
              <div className="text-center bg-orange-500/10 rounded-lg p-6 border border-orange-500/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-orange-400 mb-2">3:00am</div>
                <h3 className="text-xl font-bold text-white mb-2">AEST</h3>
                <p className="text-slate-300">When it actually opened</p>
              </div>
              <div className="text-center bg-red-500/10 rounded-lg p-6 border border-red-500/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-red-400 mb-2">7:00pm</div>
                <h3 className="text-xl font-bold text-white mb-2">My Mistake</h3>
                <p className="text-slate-300">When I thought it opened</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                For once, I let myself sleep early. I'd been burning the candle at both ends: bakery chaos, late-night builds, dad life. 
                I told myself I'd recharge and be sharp for 7pm.
              </p>
              <p className="text-2xl text-red-400 font-bold mb-6">
                I passed out around 2am. The mint opened an hour later.
              </p>
              <p className="text-xl text-slate-300">
                I slept right through it. When I woke, it was over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Cost */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">The Cost</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/20 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-red-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-4">The Numbers</h3>
                <div className="space-y-3">
                  <p className="text-slate-300">
                    <span className="text-orange-400 font-semibold">Floor shot to:</span> 0.165 BTC
                  </p>
                  <p className="text-slate-300">
                    <span className="text-orange-400 font-semibold">Peak value:</span> 0.3 BTC
                  </p>
                  <p className="text-red-400 text-xl font-bold">
                    My boys missed out on $33,000+ in potential value
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-orange-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-4">The Real Pain</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  But the worst part wasn't the money. It was what it meant.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p>• Two years of waiting</p>
                  <p>• One of 100 people</p>
                  <p>• And I still missed it</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Cementing Moment */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">The Cementing Moment</h2>
          
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-8 md:p-12 border border-orange-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
            <p className="text-2xl text-white font-bold mb-6 text-center">
              That night didn't kill Bitcoin Reserve. It forged it.
            </p>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8 text-center">
              Because when I saw what I'd lost, I realised something deeper:
            </p>

            <div className="bg-slate-900/50 rounded-lg p-6 mb-8 border border-slate-700">
              <p className="text-2xl text-orange-400 font-bold text-center mb-4">
                No one's coming to do this for me.
              </p>
              <p className="text-xl text-slate-300 text-center mb-2">
                No one else is stacking for my sons.
              </p>
              <p className="text-xl text-slate-300 text-center">
                No one else is building our generational ledger.
              </p>
            </div>

            <p className="text-xl text-white text-center mb-8">
              That's on me. And I accepted it. Fully.
            </p>

            <div className="text-center">
              <p className="text-lg text-slate-300 mb-4">
                Since that day, I've minted something every single week, not ordinals. Proof.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 transform hover:scale-105 transition-all duration-300">
                  <p className="text-orange-400 font-semibold">Proof of intent</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 transform hover:scale-105 transition-all duration-300">
                  <p className="text-orange-400 font-semibold">Proof of presence</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 transform hover:scale-105 transition-all duration-300">
                  <p className="text-orange-400 font-semibold">Proof that I won't let one miss become my story</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Ledger */}
      <section id="mission" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">The Real Ledger</h2>
          
          <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700 mb-12 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <p className="text-2xl text-orange-400 font-bold text-center mb-6">
              Bitcoin Reserve wasn't born that night. But it was sworn in that night.
            </p>
            
            <p className="text-xl text-slate-300 leading-relaxed text-center mb-8">
              This is no longer a side project. This is legacy in motion.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                  <p className="text-orange-400 font-semibold mb-2">Each DCA</p>
                  <p className="text-slate-300 text-sm">Building the foundation</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                  <p className="text-orange-400 font-semibold mb-2">Each cold storage move</p>
                  <p className="text-slate-300 text-sm">Securing the future</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                  <p className="text-orange-400 font-semibold mb-2">Each story I record</p>
                  <p className="text-slate-300 text-sm">Documenting the journey</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-slate-300 mb-8">
              Every transaction. Every decision. Every lesson learned. All public. All transparent.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
              onClick={() => window.open('#', '_blank')}
            >
              View Bitcoin Dad Ledger
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community & Handbook Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Join the Mission</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-900/50 border-slate-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <Download className="h-12 w-12 text-orange-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-4">Download Bitcoin Dad Handbook</h3>
                <p className="text-slate-300 mb-6">
                  Complete guide to building generational wealth through Bitcoin. Practical strategies, real examples, proven methods.
                </p>
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full transform hover:scale-105 transition-all duration-200"
                >
                  Get Handbook Free
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-orange-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-4">Join Bitcoin Dad's Community</h3>
                <p className="text-slate-300 mb-6">
                  Connect with other Bitcoin dads building legacy wealth. Share strategies, learn together, grow stronger.
                </p>
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full transform hover:scale-105 transition-all duration-200"
                  onClick={() => window.open('https://bitcoinreserve.bio', '_blank')}
                >
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-8 border border-orange-500/30">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Stay Connected</h2>
            <p className="text-xl text-slate-300 mb-8 text-center">
              Get updates on the Bitcoin Reserve journey and exclusive Bitcoin dad insights
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                Join Mission
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logoSvg} alt="Bitcoin Reserve" className="h-8 w-auto mb-4" />
              <p className="text-slate-400 text-sm mb-4">
                Stealth wealth building for legacy. Sleep better. Stack slower.
              </p>
              <p className="text-slate-500 text-xs">
                One dad, two sons, stacking every week.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="https://bitcoinreserve.bio" className="block text-slate-400 hover:text-orange-400 text-sm transition-colors">
                  Home
                </a>
                <a href="#story" className="block text-slate-400 hover:text-orange-400 text-sm transition-colors">
                  The Story
                </a>
                <a href="#mission" className="block text-slate-400 hover:text-orange-400 text-sm transition-colors">
                  Our Mission
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <img src={xIcon} alt="X" className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
                  <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 mt-8">
            <p className="text-slate-500 text-sm text-center">
              All rights reserved, proof of work for the people you love.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default App

