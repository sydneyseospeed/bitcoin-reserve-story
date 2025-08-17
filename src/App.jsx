import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Clock, Bitcoin, Heart, TrendingUp, Users, Download, ArrowRight } from 'lucide-react'
import './App.css'
import logoSvg from './assets/Logotype.svg'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The <span className="text-orange-400">Missed Mint</span><br />
              That Built Bitcoin Reserve
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              How a $33,000 mistake became the foundation for helping Bitcoin dads build generational wealth
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
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
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-8 border border-orange-500/30">
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
            <div className="bg-slate-900/50 rounded-lg p-8 mb-8 border border-slate-700">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Bitcoin Reserve was already in motion. I'd been building it quietly — nights, weekends, between bakery shifts. 
                Stacking sats through Bitaroo for my sons. Laying the groundwork for a real, public proof-of-work ledger.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Not just for me — for every dad who wanted to leave something true.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Then came the Taproot Wizards mint. The OG Ordinals project. Cultural. Iconic. Rare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/20">
                <CardContent className="p-6">
                  <Bitcoin className="h-12 w-12 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">The Golden Ticket</h3>
                  <p className="text-slate-300 mb-4">
                    Normal mint price: 0.2 BTC. But I held one of only 100 golden tickets — whitelist access at 0.1 BTC.
                  </p>
                  <p className="text-orange-400 font-semibold">
                    I'd earned that ticket two years earlier. It was supposed to be the reward for sticking it out.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-orange-400 mb-4" />
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
          
          <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Clock className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">8 Hours</h3>
                <p className="text-slate-300">The golden ticket window</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">3:00am</div>
                <h3 className="text-xl font-bold text-white mb-2">AEST</h3>
                <p className="text-slate-300">When it actually opened</p>
              </div>
              <div className="text-center">
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
            <Card className="bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/20">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">The Numbers</h3>
                <div className="space-y-3">
                  <p className="text-slate-300">
                    <span className="text-orange-400 font-semibold">Floor shot to:</span> 0.165 BTC
                  </p>
                  <p className="text-slate-300">
                    <span className="text-orange-400 font-semibold">Peak value:</span> 0.3 BTC
                  </p>
                  <p className="text-red-400 text-xl font-bold">
                    My boys missed out on $10K–$33K in potential value
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-orange-400 mb-4" />
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
          
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-8 md:p-12 border border-orange-500/30">
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
                Since that day, I've minted something every single day — not ordinals. Proof.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                  <p className="text-orange-400 font-semibold">Proof of intent</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                  <p className="text-orange-400 font-semibold">Proof of presence</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
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
          
          <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700 mb-12">
            <p className="text-2xl text-orange-400 font-bold text-center mb-6">
              Bitcoin Reserve wasn't born that night. But it was sworn in that night.
            </p>
            
            <p className="text-xl text-slate-300 leading-relaxed text-center mb-8">
              This is no longer a side project. This is legacy in motion.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                  <p className="text-orange-400 font-semibold mb-2">Each DCA</p>
                  <p className="text-slate-300 text-sm">Building the foundation</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                  <p className="text-orange-400 font-semibold mb-2">Each cold storage move</p>
                  <p className="text-slate-300 text-sm">Securing the future</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                  <p className="text-orange-400 font-semibold mb-2">Each story I record</p>
                  <p className="text-slate-300 text-sm">Another brick in the foundation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Each story I record is another brick in the foundation my sons will stand on.
            </p>
            
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg p-8 border border-orange-500/30">
              <p className="text-2xl text-white font-bold mb-4">
                And every dad who reads this? You're not too late.
              </p>
              <p className="text-xl text-slate-300 mb-6">
                Even when you miss the mint, you can still build the ledger.
              </p>
              <p className="text-lg text-orange-400 font-semibold">
                One block at a time. Proof-of-work for the people you love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Mission */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Mission
            </h2>
            <p className="text-xl text-slate-300">
              Help us reach 10,000 Bitcoin dads building generational wealth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <Download className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Get the Bitcoin Dad Handbook</h3>
                <p className="text-slate-300 mb-4">
                  Everything you need to start stacking sats safely for your family
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  Download Free
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Join Bitcoin Dad Vault</h3>
                <p className="text-slate-300 mb-4">
                  Private community of fathers building financial sovereignty together
                </p>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 w-full">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-8 border border-orange-500/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Connected
              </h3>
              <p className="text-slate-300 mb-6">
                Get updates on our mission and new resources for Bitcoin dads
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold"
                  >
                    Join Mission
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={logoSvg} alt="Bitcoin Reserve" className="h-8 w-auto mr-4" />
              <p className="text-slate-400">Building generational wealth, one block at a time.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://bitcoinreserve.bio" className="text-slate-400 hover:text-orange-400 transition-colors">
                Home
              </a>
              <a href="https://x.com/bitcoinreserve_" className="text-slate-400 hover:text-orange-400 transition-colors">
                Twitter
              </a>
              <a href="https://www.instagram.com/bitcoinreserve_/" className="text-slate-400 hover:text-orange-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-400">
              © 2025 Bitcoin Reserve. All rights reserved. Proof-of-work for the people you love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
