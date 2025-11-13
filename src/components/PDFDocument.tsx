import { Users, Utensils, Trophy, Mail, Phone, MapPin } from 'lucide-react';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import heroImage from 'figma:asset/b7019e559405f7dc7947ecd2af521e6eb245daec.png';

export function PDFDocument() {
  return (
    <div className="max-w-[210mm] mx-auto bg-white shadow-2xl">
      {/* Page 1 - Cover */}
      <div className="min-h-[297mm] relative overflow-hidden flex flex-col justify-center items-center text-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative z-10 px-16">
          <div className="mb-8">
            <Trophy className="w-24 h-24 mx-auto mb-6 text-white" />
          </div>
          <h1 className="mb-6 text-white" style={{ fontSize: '4rem', fontWeight: '800', letterSpacing: '0.05em' }}>
            THE SOCIAL COURT
          </h1>
          <p className="mb-12 text-white" style={{ fontSize: '1.5rem', fontWeight: '300', letterSpacing: '0.3em' }}>
            EAT • PLAY • CONNECT • CELEBRATE
          </p>
          <div className="w-32 h-1 bg-white/80 mb-12 mx-auto" />
          <p className="text-white" style={{ fontSize: '1.8rem', maxWidth: '600px', margin: '0 auto' }}>
            Corporate Event Solutions
          </p>
          <p className="text-white/90 mt-4" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            Team Building • Year-End Functions • Corporate Celebrations
          </p>
        </div>
      </div>

      {/* Page 2 - Introduction */}
      <div className="min-h-[297mm] p-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="mb-12">
          <Badge className="mb-4 bg-amber-100 text-stone-900 border-0">About Us</Badge>
          <h2 className="text-white mb-6">Welcome to The Social Court</h2>
          <p className="text-stone-300 mb-4" style={{ lineHeight: '1.8' }}>
            We specialize in hosting unforgettable corporate events that combine sport, dining, and team connection. 
            Whether you're planning a year-end function, team-building day, or any corporate celebration, 
            The Social Court provides the perfect venue and comprehensive event solutions.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-lg bg-amber-50">
            <Trophy className="w-12 h-12 text-stone-800 mx-auto mb-4" />
            <h3 className="text-stone-900 mb-2">Padel Play</h3>
            <p className="text-stone-700">Professional courts with coaching</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-amber-50">
            <Utensils className="w-12 h-12 text-stone-800 mx-auto mb-4" />
            <h3 className="text-stone-900 mb-2">Gourmet Dining</h3>
            <p className="text-stone-700">Exceptional catering options</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-amber-50">
            <Users className="w-12 h-12 text-stone-800 mx-auto mb-4" />
            <h3 className="text-stone-900 mb-2">Full Service</h3>
            <p className="text-stone-700">Complete event management</p>
          </div>
        </div>

        <Separator className="my-12 bg-stone-700" />

        <div>
          <h3 className="text-white mb-6">What We Offer</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-100 mt-2 flex-shrink-0" />
              <p className="text-stone-300">Year-End Functions</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-100 mt-2 flex-shrink-0" />
              <p className="text-stone-300">Team Building Activities</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-100 mt-2 flex-shrink-0" />
              <p className="text-stone-300">Corporate Celebrations</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-100 mt-2 flex-shrink-0" />
              <p className="text-stone-300">Sports Tournaments</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-100 mt-2 flex-shrink-0" />
              <p className="text-stone-300">Catered Events</p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-100 mt-2 flex-shrink-0" />
              <p className="text-stone-300">Custom Packages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page 3 - Padel Team Building Packages */}
      <div className="min-h-[297mm] p-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <Badge className="mb-4 bg-amber-100 text-stone-900 border-0">Padel Play</Badge>
        <h2 className="text-white mb-8">Team-Building Packages</h2>
        
        <div className="space-y-8 mb-12">
          {/* Package 1 */}
          <div className="bg-amber-50 p-8 rounded-lg border-2 border-amber-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-stone-900 mb-2">Small Team Package</h3>
                <p className="text-stone-700">4 - 8 people</p>
              </div>
              <div className="text-right">
                <p className="text-stone-900" style={{ fontSize: '2rem', fontWeight: '700' }}>R2,500</p>
                <p className="text-stone-600">2 hours</p>
              </div>
            </div>
            <Separator className="my-4 bg-stone-300" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-stone-900 mb-2">Format:</p>
                <p className="text-stone-700">Mexicano/Americano/King of the Court</p>
              </div>
              <div>
                <p className="text-stone-900 mb-2">Structure:</p>
                <p className="text-stone-700">30 min coaching (optional)</p>
                <p className="text-stone-700">90 min tournament</p>
              </div>
            </div>
          </div>

          {/* Package 2 */}
          <div className="bg-amber-50 p-8 rounded-lg border-2 border-amber-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-stone-900 mb-2">Medium Team Package</h3>
                <p className="text-stone-700">12 - 32 people</p>
              </div>
              <div className="text-right">
                <p className="text-stone-900" style={{ fontSize: '2rem', fontWeight: '700' }}>R6,000</p>
                <p className="text-stone-600">2 hours</p>
              </div>
            </div>
            <Separator className="my-4 bg-stone-300" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-stone-900 mb-2">Format:</p>
                <p className="text-stone-700">Mexicano/Americano/King of the Court</p>
              </div>
              <div>
                <p className="text-stone-900 mb-2">Structure:</p>
                <p className="text-stone-700">30 min coaching (optional)</p>
                <p className="text-stone-700">90 min tournament</p>
              </div>
            </div>
          </div>

          {/* Package 3 */}
          <div className="bg-amber-50 p-8 rounded-lg border-2 border-amber-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-stone-900 mb-2">Large Team Package</h3>
                <p className="text-stone-700">30+ people</p>
              </div>
              <div className="text-right">
                <p className="text-stone-900" style={{ fontSize: '2rem', fontWeight: '700' }}>R7,000</p>
                <p className="text-stone-600">2 hours</p>
              </div>
            </div>
            <Separator className="my-4 bg-stone-300" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-stone-900 mb-2">Format:</p>
                <p className="text-stone-700">Mexicano/Americano/King of the Court</p>
              </div>
              <div>
                <p className="text-stone-900 mb-2">Structure:</p>
                <p className="text-stone-700">30 min coaching (optional)</p>
                <p className="text-stone-700">90 min tournament</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-700 p-6 rounded-lg text-white border-2 border-stone-600">
          <h3 className="text-white mb-3">Included Extras</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-xs text-stone-900">✓</div>
              <span>Free coaching</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-xs text-stone-900">✓</div>
              <span>Game management</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-xs text-stone-900">✓</div>
              <span>Free sleeves of balls</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-xs text-stone-900">✓</div>
              <span>Professional tournament format</span>
            </div>
          </div>
        </div>
      </div>

      {/* Page 4 - Food Options */}
      <div className="min-h-[297mm] p-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <Badge className="mb-4 bg-amber-100 text-stone-900 border-0">Catering</Badge>
        <h2 className="text-white mb-8">Food Packages & Options</h2>

        {/* Option 1 - Spit Braai */}
        <div className="mb-12 bg-amber-50 p-8 rounded-lg border-2 border-amber-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-stone-900">Option 1: Spit Braai</h3>
            <p className="text-stone-900" style={{ fontSize: '1.75rem', fontWeight: '700' }}>R200 per person</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-stone-900 mb-3">Main Course:</p>
              <ul className="space-y-2 text-stone-700">
                <li>• Spit-roasted beef/pork</li>
                <li>• Grilled chicken piece</li>
              </ul>
            </div>
            <div>
              <p className="text-stone-900 mb-3">Sides:</p>
              <ul className="space-y-2 text-stone-700">
                <li>• Broccoli salad</li>
                <li>• Creamy potato salad</li>
                <li>• Baby potatoes</li>
                <li>• Traditional pap & rich gravy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Option 2 - Scrumptious Baskets */}
        <div className="mb-8">
          <h3 className="text-white mb-6">Option 2: Scrumptious Baskets (Serves Two)</h3>
          
          <div className="space-y-4">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-stone-900">Basket 1</h4>
                <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R155</p>
              </div>
              <p className="text-stone-700">
                Pork riblets, cheese grillers, chorizo, deep fried halloumi strips and batata fritos 
                (Portuguese style crispy fries)
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-stone-900">Basket 2</h4>
                <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R135</p>
              </div>
              <p className="text-stone-700">
                Crunchy chicken strips, mini rissoles, spring rolls, mini samosas and batata fritos 
                (Portuguese style crispy fries) with sweet chilli sauce
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-stone-900">Basket 3</h4>
                <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R165</p>
              </div>
              <p className="text-stone-700">
                Rump steak strips, spring rolls, jalapeño poppers, onion rings and batata fritos 
                (Portuguese style crispy fries)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page 5 - Court-Side Salads */}
      <div className="min-h-[297mm] p-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <h3 className="text-white mb-6">Court-Side Salads</h3>
        <p className="text-stone-300 mb-8">Vegetarian options available on all salads</p>

        <div className="space-y-6 mb-12">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-stone-900">Mozambique Chicken</h4>
              <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R110</p>
            </div>
            <p className="text-stone-700">
              Lemon & herb grilled chicken breast, bacon bits, pickled carrots, cucumber, red onion, 
              tomatoes and tender greens with a garlic aioli mayo sauce
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-stone-900">Asian Beef</h4>
              <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R125</p>
            </div>
            <p className="text-stone-700">
              Rare Thai marinated rump shavings, baby spinach, pickled carrot, chilli, basil, 
              fresh coriander and roasted nuts with our famous honey ginger soy sauce
            </p>
          </div>
        </div>

        <Separator className="my-12 bg-stone-700" />

        <h3 className="text-white mb-6">Flavor From Fire</h3>
        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
          <h4 className="text-stone-900 mb-3">Crispy Chicken Tenders/Strips</h4>
          <p className="text-stone-900 mb-4" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R90 with fries</p>
          <p className="text-stone-900 mb-2">5 tenders per portion - Choose your flavour:</p>
          <ul className="space-y-1 text-stone-700">
            <li>• Asian style with honey ginger soya sauce</li>
            <li>• Mozambican style with mild piri-piri dipping sauce</li>
            <li>• BBQ sauce</li>
          </ul>
        </div>

        <h3 className="text-white mb-6">Wood-Fired Urban Chicken Wings</h3>
        <p className="text-stone-300 mb-4">Flame grilled to perfection with choice of sweet and salty honey & ginger soy, BBQ or spicy sauce</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
            <p className="text-stone-900 mb-2">6 Wings</p>
            <p className="text-stone-900" style={{ fontSize: '1.25rem', fontWeight: '700' }}>R75</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
            <p className="text-stone-900 mb-2">12 Wings</p>
            <p className="text-stone-900" style={{ fontSize: '1.25rem', fontWeight: '700' }}>R130</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
            <p className="text-stone-900 mb-2">18 Wings</p>
            <p className="text-stone-900" style={{ fontSize: '1.25rem', fontWeight: '700' }}>R160</p>
          </div>
        </div>
      </div>

      {/* Page 6 - Wood-Fired Grill */}
      <div className="min-h-[297mm] p-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <h3 className="text-white mb-4">Wood-Fired Grill</h3>
        <p className="text-stone-300 mb-8">Served with choice of chips, mixed roasted vegetables or side salad</p>

        <div className="space-y-4 mb-12">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Wood-Fired Urban Chicken</h4>
              <p className="text-stone-700">Lemon & herb OR peri peri sauce (20 min prep time)</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R165</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Wood-Fired Fillet</h4>
              <p className="text-stone-700">Beef fillet with pepper OR mushroom sauce</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R190</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Wood-Fired T-Bone</h4>
              <p className="text-stone-700">Beef T-bone with pepper OR mushroom sauce</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R140</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Calamari Rings</h4>
              <p className="text-stone-700">Flame grilled with lemon and garlic sauce</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R165</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Steak, Egg & Chips</h4>
              <p className="text-stone-700">A-grade beef, grilled the way you like it</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R145</p>
          </div>
        </div>

        <div className="bg-stone-700 p-6 rounded-lg border border-stone-600">
          <h4 className="text-white mb-3">Extras</h4>
          <div className="grid grid-cols-2 gap-3 text-stone-300">
            <p>• Pepper, cheese or mushroom sauce: +R25</p>
            <p>• Vegetables side: +R35</p>
            <p>• Side salad: +R35</p>
            <p>• Fries: +R35</p>
          </div>
        </div>
      </div>

      {/* Page 7 - Burgers */}
      <div className="min-h-[297mm] p-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <h3 className="text-white mb-4">The Clubhouse Burgers</h3>
        <p className="text-stone-300 mb-8">
          Choice of homemade grilled ground beef patty OR marinated free range chicken fillet<br />
          Add fries & side salad or roasted veg: +R35
        </p>

        <div className="space-y-4 mb-12">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Classic Burger BBQ</h4>
              <p className="text-stone-700">Toasted bun, lettuce, tomato, red onion, pickles, garlic aioli mayo</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R90</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Saucy Burger</h4>
              <p className="text-stone-700">Toasted bun, lettuce, tomato, red onion, pickles, pepper or mushroom sauce</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R100</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Cheese Loaded Burger BBQ</h4>
              <p className="text-stone-700">Toasted bun, lettuce, tomato, red onion, pickles, melted cheddar, Moz Whip Mayo</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R115</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Court-Side Bacon & Avo Burger</h4>
              <p className="text-stone-700">Toasted bun, lettuce, tomato, red onion, pickles, bacon, avo, Moz Whip Mayo</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R120</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Naked Burger</h4>
              <p className="text-stone-700">No bun, lettuce, tomato, red onion, pickles, guacamole, sautéed mushrooms, Moz Whip Mayo</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R75</p>
          </div>
        </div>

        <div className="bg-stone-700 p-4 rounded-lg mb-12 border border-stone-600">
          <p className="text-amber-100">The naked (bun-less) option is available on all burgers</p>
        </div>

        <h3 className="text-white mb-4">Wrap It Up!</h3>
        <p className="text-stone-300 mb-6">Homemade stone ground wraps with fries (without fries: -R10)<br />Vegetarian options available on all wraps</p>

        <div className="space-y-4">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Mexican</h4>
              <p className="text-stone-700">Crunchy mexican chicken, corn, black beans, avo, red onion, peppers, jalapeño salsa, lime, coriander</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R110</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Court Side Chicken, Bacon & Avo</h4>
              <p className="text-stone-700">Lemon & herb grilled chicken breast, bacon bits, ripe avo, garlic aioli mayo</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R120</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Healthy Padel</h4>
              <p className="text-stone-700">Halloumi, tomato, cucumber, lettuce and tzatziki</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R100</p>
          </div>
        </div>
      </div>

      {/* Page 8 - Wood-Fired Pizza */}
      <div className="min-h-[297mm] p-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <h3 className="text-white mb-4">Wood-Fired Pizza (30cm)</h3>
        <p className="text-stone-300 mb-8">
          Made with our famous traditional Napolitana sauce!<br />
          Fermentation, proofing & baking makes our pizza less gluten overload for you!
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">Margherita</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R80</p>
            </div>
            <p className="text-stone-700">Napolitana sauce, mozzarella, fresh herbs</p>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">Hawaiian</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R130</p>
            </div>
            <p className="text-stone-700">Sweet pineapple and country ham</p>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">Regina</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R130</p>
            </div>
            <p className="text-stone-700">Mushrooms and country ham</p>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">Medley of Veggies</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R135</p>
            </div>
            <p className="text-stone-700">Mushrooms, olives, rocket, sundried tomatoes</p>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">Bacon & Feta</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R135</p>
            </div>
            <p className="text-stone-700">Bacon and Danish feta</p>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">Mexicana</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R135</p>
            </div>
            <p className="text-stone-700">Ground beef bolognaise, garlic, mixed peppers, onion, hint of chilli</p>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">The Court</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R155</p>
            </div>
            <p className="text-stone-700">Chorizo, caramelised onions, feta and avo</p>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">The Big Padel</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R165</p>
            </div>
            <p className="text-stone-700">Bacon, salami, country ham and deboned ribs</p>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">First Serve</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R135</p>
            </div>
            <p className="text-stone-700">Seasoned roasted chicken, peppadews, caramelised onions, chutney and avo</p>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">Billies & Cheese</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R150</p>
            </div>
            <p className="text-stone-700">Choice grade beef biltong, three cheeses (Mozzarella, cheddar, feta), caramelised onions</p>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">Sweet Chilli Chick</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R115</p>
            </div>
            <p className="text-stone-700">BBQ chicken, feta and sweet chilli sauce</p>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-stone-900">Smokey Joe</h4>
              <p className="text-stone-900" style={{ fontWeight: '700' }}>R130</p>
            </div>
            <p className="text-stone-700">Chicken or beef, caramelised onion, mixed peppers, homemade BBQ sauce</p>
          </div>
        </div>
      </div>

      {/* Page 9 - Kids & Desserts & Beverages */}
      <div className="min-h-[297mm] p-16 bg-gradient-to-br from-stone-800 to-stone-900">
        <h3 className="text-white mb-6">Bambinos (Kids Menu)</h3>
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Pizza (Margherita / Ham & Cheese / Hawaiian / BBQ Chicken)</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R65</p>
          </div>
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Chicken Strips & Mayo & Fries</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R70</p>
          </div>
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Courtside Fries</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R35</p>
          </div>
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Beef or Chicken Burger & Fries</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R70</p>
          </div>
        </div>

        <Separator className="my-12 bg-stone-700" />

        <h3 className="text-white mb-6">Desserts</h3>
        <div className="space-y-4 mb-12">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Malva Pudding</h4>
              <p className="text-stone-700">The all-time family favourite, made in-house, topped with ice cream or ultramel custard</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R59</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex justify-between items-center">
            <div>
              <h4 className="text-stone-900 mb-2">Ice Cream and Chocolate Sauce</h4>
              <p className="text-stone-700">Vanilla ice cream topped with our homemade chocolate sauce</p>
            </div>
            <p className="text-stone-900" style={{ fontSize: '1.5rem', fontWeight: '700' }}>R50</p>
          </div>
        </div>

        <Separator className="my-12 bg-stone-700" />

        <h3 className="text-white mb-6">Beverages</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Espresso</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R30</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Espresso Double</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R35</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Red Cappuccino</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R43</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Cappuccino</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R35</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Americano</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R35</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Latte</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R44</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Freeziochino</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R52</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Hot Chocolate</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R46</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Water (Still or Sparkling)</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R29</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Soft Drinks</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R29</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Ice Tea (Lemon & Peach)</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R40</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Red Bull</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R45</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Tizers</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R40</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex justify-between items-center">
            <p className="text-stone-900">Fresh Juice</p>
            <p className="text-stone-900" style={{ fontWeight: '700' }}>R50</p>
          </div>
        </div>
      </div>

      {/* Page 10 - Contact/Back Cover */}
      <div className="min-h-[297mm] p-16 bg-gradient-to-br from-stone-800 to-stone-900 text-white flex flex-col justify-center">
        <div className="text-center mb-12">
          <h2 className="text-white mb-6">Ready to Host Your Event?</h2>
          <p className="mb-8 text-stone-300" style={{ fontSize: '1.2rem' }}>
            Contact us today to customize your perfect corporate experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-lg bg-amber-50">
            <Phone className="w-10 h-10 mx-auto mb-4 text-stone-900" />
            <h4 className="text-stone-900 mb-2">Call Us</h4>
            <p className="text-stone-700">+27 60 670 9623</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-amber-50">
            <Mail className="w-10 h-10 mx-auto mb-4 text-stone-900" />
            <h4 className="text-stone-900 mb-2">Email Us</h4>
            <p className="text-stone-700 text-left w-full break-words">thesocial4court@gmail.com</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-amber-50">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-stone-900" />
            <h4 className="text-stone-900 mb-2">Visit Us</h4>
            <p className="text-stone-700">CrossFit Two Rivers
              29 Peter Rd, Tres Jolie AH, Roodepoort, 2040</p>
          </div>
        </div>

        <div className="text-center">
          <div className="w-32 h-1 bg-amber-100 mx-auto mb-8" />
          <h1 className="text-white mb-4" style={{ fontSize: '3rem', letterSpacing: '0.05em' }}>
            THE SOCIAL COURT
          </h1>
          <p className="text-stone-300" style={{ fontSize: '1.2rem', letterSpacing: '0.2em' }}>
            EAT • PLAY • CONNECT • CELEBRATE
          </p>
        </div>
      </div>
    </div>
  );
}