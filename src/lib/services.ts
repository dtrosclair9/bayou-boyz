export type Faq = { q: string; a: string }

export type ServiceDef = {
  slug: string
  navLabel: string
  h1: string
  kicker: string
  title: string
  description: string
  /** Card blurb on the homepage and services index. */
  cardBlurb: string
  intro: string[]
  whyUs: { h3: string; body: string }[]
  included: string[]
  includedHeading: string
  process: { title: string; body: string }[]
  priceMode: 'oil' | 'diesel' | 'addons' | 'quote'
  /** Short price line for cards. Empty string when the client has not priced it. */
  priceLine: string
  faqs: Faq[]
  /** Only set when a real, hero-grade photo exists. Otherwise PageHero uses
   *  its designed olive fallback rather than a stretched low-res image. */
  heroImage?: string
  heroAlt?: string
  /** Real job photo shown in-page at a size the source actually supports. */
  photo?: { src: string; alt: string }
  schemaServiceType: string
  /** Generator pages carry the trademark + scope notes. */
  showGeneracNotes?: boolean
}

export const services: ServiceDef[] = [
  // ---------------------------------------------------------------- oil change
  {
    slug: 'mobile-oil-change',
    navLabel: 'Mobile Oil Change',
    h1: 'Mobile Oil Change Service',
    kicker: 'Cars, trucks and SUVs',
    title: 'Mobile Oil Change in Thibodaux & Houma, LA',
    description:
      'Full synthetic mobile oil changes at your home or workplace across Lafourche and Terrebonne. $100 four-cylinder, $115 six, $130 eight. Filter and inspection included.',
    cardBlurb:
      'Full synthetic, new filter, drain and refill to spec. Done in your driveway or your work parking lot.',
    intro: [
      `A mobile oil change is an oil change that happens where your vehicle already is. Bayou Boyz drive to your house, your apartment lot or your job site, pull the old oil, put in a new filter and refill with full synthetic to your manufacturer's spec. You keep your afternoon.`,
      `We carry everything on the truck. There is no shop to drive to, no waiting room, no line of cars ahead of you. Most customers hand over the keys and go back inside, or leave the vehicle unlocked and never stop what they are doing.`,
      `Pricing is set by cylinder count and it is published below. You will know the number before we show up.`,
    ],
    whyUs: [
      {
        h3: 'The price is posted before you call',
        body: `Most shops around here will not quote you an oil change over the phone. Ours is $100 for a four-cylinder, $115 for a six and $130 for an eight, full synthetic, filter and labor included. If your engine takes more than the quarts listed, additional quarts are $10 each and we tell you before we pour them.`,
      },
      {
        h3: 'Full synthetic is the only oil we run',
        body: `We do not stock conventional or a cheaper blend to hit a lower advertised price. Every vehicle gets full synthetic and a new filter. That is what most manufacturers now specify anyway, and it is why our number is one number instead of a starting point.`,
      },
      {
        h3: 'You get the service record in writing',
        body: `After every job we email you a service record with the date, the mileage and what was done. Keep it. Federal law protects your factory warranty when maintenance is performed to manufacturer spec and documented, and that email is the documentation.`,
      },
      {
        h3: 'We work around your schedule, not a shop’s',
        body: `Evenings and weekends are normal for us. If you work offshore or run twelve-hour shifts, we can service the vehicle while it sits at the house during your hitch. Call or text either number and we will find a window.`,
      },
    ],
    includedHeading: 'What a standard oil change includes',
    included: [
      'Full synthetic oil to manufacturer spec',
      'New oil filter',
      'Complete drain and refill, not a top-off',
      'Visual inspection of belts, hoses and fluid levels',
      'Tire pressure checked and corrected',
      'Old oil collected and carried off your property',
      'Service record emailed to you with date and mileage',
    ],
    process: [
      {
        title: 'Call or text',
        body: 'Reach Joel at (985) 414-1733 or Chase at (985) 859-1628. Tell us the year, make, model and where the vehicle will be sitting.',
      },
      {
        title: 'We confirm the price',
        body: 'Cylinder count sets the price. We confirm the number and the appointment window before we drive out, so nothing changes when we get there.',
      },
      {
        title: 'We service it where it sits',
        body: 'Driveway, carport, apartment lot or job site. We bring ramps, oil, filters and a drain pan. You do not need to be standing there.',
      },
      {
        title: 'You get the record',
        body: 'We clean up, haul the used oil off with us and email your service record with the date and mileage on it.',
      },
    ],
    priceMode: 'oil',
    priceLine: 'From $100',
    faqs: [
      {
        q: 'How much does a mobile oil change cost?',
        a: 'A full synthetic mobile oil change is $100 for a four-cylinder, $115 for a six-cylinder and $130 for an eight-cylinder. That covers the oil, a new filter and the labor. Additional quarts beyond what your engine holds are $10 each, and sales tax is added to the total.',
      },
      {
        q: 'Do I have to be home while you do it?',
        a: 'No. Plenty of customers leave the vehicle unlocked with the keys inside and go on about their day. We will text you when we arrive and again when the job is finished, and the service record lands in your email either way.',
      },
      {
        q: 'Does a mobile oil change void my new car warranty?',
        a: 'No. Federal law under the Magnuson-Moss Warranty Act means a manufacturer cannot void your warranty simply because someone other than the dealer performed routine maintenance. What matters is that the correct oil was used to specification and that the work is documented. We email you a dated service record with the mileage for exactly that reason.',
      },
      {
        q: 'What do you do with the old oil?',
        a: 'We collect it and carry it off your property when we leave. Nothing gets poured out, nothing gets left behind in your trash, and there is no drain pan sitting in your driveway after we go.',
      },
      {
        q: 'Can you change oil in an apartment or office parking lot?',
        a: 'Usually yes, as long as the property allows it and the space is reasonably level. We work off ramps and a drain pan and we clean up behind ourselves. If a property manager has a rule against it, tell us and we will work out a different spot.',
      },
      {
        q: 'What if my engine takes more oil than the quarts included?',
        a: 'We tell you before we add it. Each additional quart is $10. The quantities in our pricing cover most engines in each cylinder class, and larger capacity engines are the usual reason for an extra quart or two.',
      },
      {
        q: 'Do you clean the engine bay?',
        a: 'Usually, yes. Bayou Boyz tend to wipe the engine bay down while they are in there, which is why you will see before and after shots on their Facebook page. There is no charge for it. It is not a detailing service and it is not promised on every job, so mention it when you book if it matters to you.',
      },
      {
        q: 'Do you work on weekends?',
        a: 'Yes. Evenings and weekends are normal for us, which is part of why the business exists. Call or text either number and we will find a window that fits.',
      },
    ],
    photo: {
      src: '/images/job-oil-change.jpg',
      alt: 'An SUV up on ramps in a residential driveway with a drain pan, oil and paper towels set out beside it during a Bayou Boyz mobile oil change',
    },

    heroImage: '/images/hero-oil-change.jpg',
    heroAlt:
      'A dark SUV with the hood up under a carport while a Bayou Boyz technician works underneath it, with a drain pan and oil set out on the ground',
    schemaServiceType: 'Mobile oil change',
  },

  // -------------------------------------------------------------------- diesel
  {
    slug: 'mobile-diesel-oil-change',
    navLabel: 'Diesel Oil Change',
    h1: 'Mobile Diesel Oil Change Service',
    kicker: 'Heavy-duty pickups',
    title: 'Mobile Diesel Oil Change in Thibodaux, LA',
    description:
      'Diesel oil changes at your driveway or job site. F-250, F-350, 2500 and 3500. Synthetic diesel oil, new filter and 10 quarts included for $200 flat.',
    cardBlurb:
      'Synthetic diesel oil, new filter, 10 quarts included. For the F-250, F-350, 2500 and 3500 crowd.',
    intro: [
      `Diesel pickups hold two to three times the oil a gas engine does, and most quick-lube bays around here either will not touch them or push you to a commercial truck shop built for eighteen-wheelers. Bayou Boyz service diesel pickups where they park.`,
      `The price is $200 flat. That covers synthetic diesel oil, ten quarts, a new filter and the labor. F-250, F-350, 2500 and 3500 are the trucks we see most, and they are what this service is built around.`,
      `If you run to Fourchon, pull a gooseneck on the weekend or keep a diesel parked at the house between hitches, this is the service that stops the oil change from eating a Saturday.`,
    ],
    whyUs: [
      {
        h3: 'Built for the pickup, not the eighteen-wheeler',
        body: `Mobile diesel service in south Louisiana is aimed almost entirely at Class 8 trucks and fleet yards. That leaves the person with one diesel pickup in the driveway calling around for somebody who will take a single truck. We take the single truck.`,
      },
      {
        h3: 'Ten quarts and a filter, at one posted number',
        body: `Diesel oil changes are where surprise pricing usually shows up, because capacity and oil cost both run higher. Ours is $200 and it includes the ten quarts and the filter. Trucks that hold more than ten get the difference quoted before we pour it.`,
      },
      {
        h3: 'We come to the truck on your schedule',
        body: `Crew change weeks, offshore hitches and long shifts are the normal rhythm here. A truck that sits at the house for seven days is a truck we can service on day three without anybody rearranging a day off.`,
      },
      {
        h3: 'Documented every time',
        body: `Diesel owners tend to keep records, and resale on these trucks rewards it. Every service gets an emailed record with the date and the mileage so your maintenance history is not a pile of receipts in the glovebox.`,
      },
    ],
    includedHeading: 'What a diesel oil change includes',
    included: [
      'Synthetic diesel oil, 10 quarts included',
      'New oil filter',
      'Complete drain and refill to manufacturer spec',
      'Visual inspection of belts, hoses and fluid levels',
      'Old oil collected and hauled off',
      'Service record emailed with date and mileage',
    ],
    process: [
      {
        title: 'Tell us the truck',
        body: 'Call or text with the year, make and engine. Power Stroke, Cummins and Duramax all have their own filter and capacity, and we load for yours before we leave.',
      },
      {
        title: 'We confirm $200',
        body: 'Ten quarts and the filter are in that number. If your truck holds more, we tell you the difference up front rather than adding it to an invoice afterward.',
      },
      {
        title: 'We service it where it sits',
        body: 'At the house, at the camp, at the yard. We bring everything, including the drain pan and the containment for the used oil.',
      },
      {
        title: 'Record in your inbox',
        body: 'Date, mileage and what was done, emailed before we pull out of the driveway.',
      },
    ],
    priceMode: 'diesel',
    priceLine: '$200 flat',
    faqs: [
      {
        q: 'How much is a diesel oil change?',
        a: 'It is $200 flat. That includes ten quarts of synthetic diesel oil, a new oil filter and the labor. Sales tax is added to the total. If your truck holds more than ten quarts we quote the difference before we add it.',
      },
      {
        q: 'Which diesel trucks do you service?',
        a: 'Heavy-duty pickups. F-250, F-350, 2500 and 3500 are what we see most, across Power Stroke, Cummins and Duramax. If you are not sure whether your truck fits, call or text with the year and engine and we will tell you straight.',
      },
      {
        q: 'Do you service semi trucks or commercial equipment?',
        a: 'No. We are set up for diesel pickups, not Class 8 trucks or heavy equipment. If you need an eighteen-wheeler serviced you want a commercial truck shop with the capacity for it.',
      },
      {
        q: 'How often should a diesel pickup get an oil change?',
        a: 'Follow the interval in your owner manual, because it varies by engine and by how the truck is used. Trucks that tow heavy, idle for long stretches or run short trips in dusty conditions land on the shorter end of the manufacturer range. Your oil life monitor is a good guide and we note the mileage on every service record so the interval is easy to track.',
      },
      {
        q: 'Can you service my truck at a job site or yard?',
        a: 'Yes, as long as the site allows it and the ground is reasonably level. Job sites and company yards are a normal stop for us. If you have several trucks in one place, ask about our fleet service instead.',
      },
      {
        q: 'Do you change the fuel filter too?',
        a: 'Fuel filters are not part of the $200 diesel oil change. Call or text and tell us the truck, and we will let you know what we can do and what it would run.',
      },
      {
        q: 'Do you do diesel oil changes in Houma?',
        a: 'Yes. Houma, Bayou Cane, Gray and Schriever are all in our service area, along with Thibodaux, Raceland, Chackbay and Labadieville. Houma is one of our busiest areas for diesel work because of the offshore service crowd.',
      },
    ],

    heroImage: '/images/hero-diesel.jpg',
    heroAlt:
      'A full-size Chevrolet pickup with the hood up in a carport, with a step stool and drain pan set out for a mobile oil change',
    schemaServiceType: 'Mobile diesel oil change',
  },

  // ----------------------------------------------------------------- generator
  {
    slug: 'generator-maintenance',
    navLabel: 'Generator Maintenance',
    h1: 'Standby Home Generator Maintenance',
    kicker: 'Generac and comparable air-cooled units',
    title: 'Standby Generator Maintenance in Thibodaux',
    description:
      'Annual engine service for Generac and comparable air-cooled standby generators. Oil, filters, spark plugs, battery check and an emailed service record. We come to you.',
    cardBlurb:
      'Oil, filters, plugs and battery on your standby unit. No annual contract, and we will service a unit somebody else installed.',
    intro: [
      `A standby generator is an engine that sits outside for two years at a time and then gets asked to run for a week straight. The engine needs the same things a truck engine needs: clean oil, a clean filter, good plugs and a battery that will actually crank it.`,
      `Bayou Boyz do that service at your house. We are a maintenance service, not an installer, which means we will service a unit that somebody else put in and we do not require an annual contract to come out.`,
      `Most people find out their generator needs service the week a storm is in the Gulf. That is the worst possible week to find out, because every installer in the parish is booked solid putting new units in.`,
    ],
    whyUs: [
      {
        h3: 'We service units we did not install',
        body: `Almost every generator company in Lafourche and Terrebonne is an electrical contractor whose business is selling and installing new units. If your generator came with the house, or the company that installed it has moved on, maintenance gets hard to buy. That is the exact situation we are set up for.`,
      },
      {
        h3: 'No annual contract required',
        body: `You do not have to sign up for a plan to get one service. Call when you want it done. If you would rather we simply come out on a regular cadence, we can set that up, but it is not a condition of getting served.`,
      },
      {
        h3: 'After a storm, we are not tied up installing',
        body: `When a named storm comes through, installers get buried in new installations and wait times stretch out for weeks. We only do maintenance, so a unit that will not start after a storm is a call we can actually respond to.`,
      },
      {
        h3: 'The service record is the point',
        body: `Manufacturers expect maintenance to be performed on schedule and documented. We email you a dated record of what was done at what hour reading, so if a warranty question ever comes up you are holding the paperwork instead of trying to remember.`,
      },
    ],
    includedHeading: 'What an annual generator service includes',
    included: [
      'Engine oil drained and refilled to specification',
      'New oil filter',
      'New air filter and foam pre-cleaner',
      'New pre-gapped spark plugs',
      'Battery checked and terminals cleaned',
      'Visual inspection of the enclosure, belts and hoses',
      'Exercise cycle observed to confirm the unit starts and runs',
      'Service record emailed with the date and hour reading',
    ],
    process: [
      {
        title: 'Tell us the unit',
        body: 'Call or text with the brand and size if you know it, or just send us a photo of the data label on the side of the enclosure. A 22kW air-cooled unit is the most common one around here.',
      },
      {
        title: 'We quote it',
        body: 'Generator service is quoted per unit because parts vary by model. We give you the number before we come out.',
      },
      {
        title: 'We service it at the house',
        body: 'Oil, oil filter, air filter, pre-cleaner and plugs, then a battery check and an exercise cycle so you see it start before we leave.',
      },
      {
        title: 'Record and next interval',
        body: 'You get the emailed record with the hour reading on it, and we tell you roughly when the next service is due based on how the unit is running.',
      },
    ],
    priceMode: 'quote',
    priceLine: 'Call or text for a quote',
    faqs: [
      {
        q: 'How often does a standby generator need an oil change?',
        a: 'Most air-cooled home standby generators are on a 200 run-hour or two-year interval, whichever comes first, and the interval shortens to around 100 hours in sustained extreme heat. Coastal Louisiana summers put units on the shorter end of that range. Check your owner manual for your specific model, and we will note the hour reading on every service so the next one is easy to time.',
      },
      {
        q: 'Will you service a generator you did not install?',
        a: 'Yes, and that is most of the work we do on generators. We are a maintenance service rather than an installer, so it makes no difference to us who put the unit in or how long ago.',
      },
      {
        q: 'Do I need a maintenance contract?',
        a: 'No. You can call for a single service any time you want one. If you would rather be on a regular cadence we can arrange that, but there is no plan to sign and no membership to buy before we will come out.',
      },
      {
        q: 'What does a generator service include?',
        a: 'Engine oil and filter, air filter and foam pre-cleaner, new pre-gapped spark plugs, a battery check with the terminals cleaned, a visual inspection and an observed exercise cycle so you know it starts. You get a dated service record with the hour reading emailed to you.',
      },
      {
        q: 'Do you do electrical work or install generators?',
        a: 'No. We service the engine only. Installation, transfer switch work, wiring, panel work and gas line work all require a licensed electrician or gas fitter in Louisiana, and we do not perform any of it. If your unit has an electrical fault we will tell you what we see and you will want a licensed electrician for it.',
      },
      {
        q: 'My generator will not start. Can you help?',
        a: 'Sometimes. If it is an engine problem such as old oil, a fouled plug or a dead battery, that is squarely what we do. If it is an electrical fault, a transfer switch issue or a gas supply problem, you need a licensed electrician and we will say so rather than take your money.',
      },
      {
        q: 'When is the best time to have it serviced?',
        a: 'Before hurricane season rather than during it. Service in the spring means the unit is ready in June, and it means you are not calling around in the week a storm is forming when every generator company in the parish is buried. Hurricane season runs June 1 through November 30.',
      },
    ],
    heroImage: '/images/hero-generator.jpg',
    heroAlt:
      'A Generac standby home generator opened for maintenance with an oil extractor connected, serviced by Bayou Boyz',
    schemaServiceType: 'Standby generator maintenance',
    showGeneracNotes: true,
  },

  // --------------------------------------------------------------- small engine
  {
    slug: 'small-engine-maintenance',
    navLabel: 'Mower & Small Engine',
    h1: 'Zero-Turn Mower & Small Engine Maintenance',
    kicker: 'We come to the equipment',
    title: 'Mobile Zero-Turn Mower & Small Engine Service',
    description:
      'Mobile oil changes and maintenance for zero-turn mowers and small engines across Thibodaux, Houma and Lafourche Parish. No trailering, no drop-off, no two-week wait.',
    cardBlurb:
      'Zero-turns and small engines serviced in your yard. No loading it on a trailer and no shop queue.',
    intro: [
      `Getting a zero-turn serviced normally means loading it on a trailer, hauling it to a shop, leaving it, and going back for it when they call. For a machine that needs an oil change a couple of times a season, that is a lot of Saturdays.`,
      `Bayou Boyz service mowers and small engines in your yard. Same extractor, same oil, same filters we use on trucks and generators, brought to where the equipment already sits.`,
      `Service is quoted per machine because a residential zero-turn and a commercial deck are not the same job. Call or text and tell us what you have.`,
    ],
    whyUs: [
      {
        h3: 'No trailer and no drop-off',
        body: `The only small engine shops in this area are drop-off shops. You bring the machine to them. We are the other way around, which matters most for the people who do not own a trailer or cannot lift a zero-turn onto one alone.`,
      },
      {
        h3: 'Seasonal timing that actually works',
        body: `Grass here runs hard from March into October and a mower that works every week needs oil more than once a season. We can come out mid-season without the machine leaving your yard during the weeks you need it.`,
      },
      {
        h3: 'One stop for everything with an engine',
        body: `If we are already at your house for the truck or the standby generator, the mower is a short add to the same visit. Most customers who use us for two things started by calling about one.`,
      },
      {
        h3: 'Straight about what we do not do',
        body: `We handle routine maintenance. Oil, filters, plugs, blades and basic upkeep. We are not a repair shop, so a transmission problem or a deck that needs fabrication goes to somebody set up for it and we will tell you that up front.`,
      },
    ],
    includedHeading: 'What we handle on small engines',
    included: [
      'Engine oil and filter changed',
      'Air filter and pre-cleaner replaced',
      'Spark plug replacement',
      'Battery check on electric-start machines',
      'Visual inspection of belts and the deck',
      'Used oil hauled off with us',
      'Service record emailed to you',
    ],
    process: [
      {
        title: 'Tell us the machine',
        body: 'Brand, model and roughly how many hours are on it if the machine tracks them. A photo of the engine label works just as well.',
      },
      {
        title: 'We quote it',
        body: 'Pricing depends on the machine and what it needs, so we give you a number before the visit rather than after.',
      },
      {
        title: 'We service it in the yard',
        body: 'Wherever the machine is parked. Shed, carport or against the fence. We bring the oil, the filters and the containment.',
      },
      {
        title: 'Record emailed',
        body: 'Date, hours and what was done, so you know when it is due again.',
      },
    ],
    priceMode: 'quote',
    priceLine: 'Call or text for a quote',
    faqs: [
      {
        q: 'How much does mobile mower service cost?',
        a: 'We quote it per machine, because a residential zero-turn and a commercial mower need different parts and different amounts of time. Call or text with the brand and model and we will give you a number before we come out.',
      },
      {
        q: 'How often does a zero-turn mower need an oil change?',
        a: 'Most zero-turn manufacturers call for an oil change somewhere around every 50 hours of run time, with the first change much sooner on a new machine. Check your manual for your model. If you mow a large property every week through a Louisiana summer, you will hit that interval more than once a season.',
      },
      {
        q: 'Do you sharpen or replace blades?',
        a: 'Blade replacement is something we can handle as part of a visit. Tell us the machine when you call so we know what fits it and can bring the right blades with us.',
      },
      {
        q: 'What kinds of small engines do you service?',
        a: 'Zero-turn and riding mowers are the bulk of it, and we handle routine maintenance on similar small engines. If you tell us what you have, we will tell you honestly whether it is something we service.',
      },
      {
        q: 'Do you repair mowers that are broken?',
        a: 'No. We do scheduled maintenance, not repair. If your machine has a transmission problem, a damaged deck or an electrical fault, you want a small engine repair shop, and we will say so rather than take the job.',
      },
      {
        q: 'Can you service the mower and my truck on the same visit?',
        a: 'Yes, and that is the most common way people use us. One visit can cover the truck, the standby generator and the mower. Tell us everything you want looked at when you call so we load the right oil and filters.',
      },
    ],
    photo: {
      src: '/images/job-mower.jpg',
      alt: 'A red Ariens zero-turn mower on the grass with a manual oil extractor connected, drawing the old oil out',
    },

    heroImage: '/images/hero-small-engine.jpg',
    heroAlt:
      'A red Gravely zero-turn mower parked in an open shed alongside other equipment, ready for a mobile service',
    schemaServiceType: 'Small engine maintenance',
  },

  // ---------------------------------------------------------------------- fleet
  {
    slug: 'fleet-oil-change-service',
    navLabel: 'Fleet & Commercial',
    h1: 'Fleet Oil Change Service',
    kicker: 'Contractors, oilfield and service companies',
    title: 'Fleet Oil Change Service in Lafourche Parish',
    description:
      'On-site oil changes for contractor, oilfield and service fleets across Lafourche and Terrebonne. We service your trucks where they park, before or after shift.',
    cardBlurb:
      'We service the whole crew at your yard. Gas and diesel, before shift or after, no trucks off the road.',
    intro: [
      `A truck sitting in a lube line is a truck not making money. For a company running five or fifteen vehicles, routine oil changes quietly cost more in lost hours than they do in parts.`,
      `Bayou Boyz come to your yard and service the fleet where it parks. Gas and diesel both, before shift, after shift or on the weekend, whichever keeps your trucks working.`,
      `Fleet work is quoted per account because vehicle mix and visit frequency drive the number. Call either owner directly and we will put together something that fits how your crew actually runs.`,
    ],
    whyUs: [
      {
        h3: 'Nobody loses a shift to an oil change',
        body: `We schedule around your operation instead of the other way around. If your trucks are all in the yard at six in the morning or all parked by five, that is when we come. The vehicle never leaves your property.`,
      },
      {
        h3: 'Gas and diesel on the same visit',
        body: `Most fleets around here are mixed. Half-ton service trucks alongside three-quarter and one-ton diesels. We are set up for both, so one visit covers the yard instead of splitting work between two vendors.`,
      },
      {
        h3: 'Records for every unit',
        body: `Every vehicle gets its own service record emailed with the date and mileage. For anyone tracking maintenance across a fleet or answering to a safety program, that paperwork arrives without having to chase receipts.`,
      },
      {
        h3: 'You are dealing with the owners',
        body: `Joel and Chase run the trucks and answer the phone. There is no dispatcher in between and no account manager to route through when you need to move a visit.`,
      },
    ],
    includedHeading: 'How fleet accounts work',
    included: [
      'On-site service at your yard, lot or job site',
      'Gas and diesel vehicles on the same visit',
      'Scheduled around shift change or weekends',
      'Per-vehicle service records emailed after every visit',
      'Add-on services available at the same stop',
      'Recurring cadence arranged to match your interval',
    ],
    process: [
      {
        title: 'Tell us the fleet',
        body: 'How many vehicles, what mix of gas and diesel, and where they park. That is enough for us to quote it.',
      },
      {
        title: 'We build the quote',
        body: 'Pricing depends on the vehicle mix and how often you want us out. We give you the number and the cadence in writing.',
      },
      {
        title: 'We come to the yard',
        body: 'On the schedule we agreed to, at the hour that keeps your trucks working. Nothing leaves your property.',
      },
      {
        title: 'Records per vehicle',
        body: 'Each unit gets its own emailed record with date and mileage, so your maintenance file builds itself.',
      },
    ],
    priceMode: 'quote',
    priceLine: 'Call for account pricing',
    faqs: [
      {
        q: 'How much does fleet oil change service cost?',
        a: 'Fleet work is quoted per account rather than off a fixed menu, because the number depends on your vehicle mix and how often you want us out. Call Joel at (985) 414-1733 or Chase at (985) 859-1628 with your fleet size and we will put a quote together.',
      },
      {
        q: 'How many vehicles do I need to open a fleet account?',
        a: 'There is no hard minimum. If you have enough trucks that sending them out one at a time is costing you working hours, it is worth a conversation. Small contractor fleets are a normal size for us.',
      },
      {
        q: 'Can you service both gas and diesel trucks?',
        a: 'Yes. Most fleets in this area run a mix, and we handle both on the same visit. Diesel pickups and gas half-tons get serviced back to back in the same yard.',
      },
      {
        q: 'Do you come out before or after shift?',
        a: 'Whichever keeps your trucks on the road. Early morning before the crew rolls out and evening after they come in are both normal for us, and weekends work too.',
      },
      {
        q: 'Do we get records for each vehicle?',
        a: 'Yes. Every unit gets its own service record emailed with the date, the mileage and what was done. That is usually the part fleet customers care about most, because it makes the maintenance file build itself.',
      },
      {
        q: 'Do you service heavy equipment or semi trucks?',
        a: 'No. We handle pickups, vans and light commercial vehicles, plus generators and small engines. Class 8 trucks and heavy equipment need a commercial shop set up for them.',
      },
    ],

    heroImage: '/images/hero-fleet.jpg',
    heroAlt:
      'A GMC Sierra pickup with the hood up, serviced on site in a driveway rather than taken to a shop',
    schemaServiceType: 'Fleet vehicle maintenance',
  },

  // --------------------------------------------------------------- maintenance
  {
    slug: 'mobile-vehicle-maintenance',
    navLabel: 'Vehicle Maintenance',
    h1: 'Mobile Vehicle Maintenance',
    kicker: 'Filters, rotations, fluids and batteries',
    title: 'Mobile Vehicle Maintenance in Thibodaux, LA',
    description:
      'Filter changes, tire rotation, fluid top-offs, wiper blades and battery testing at your home or workplace. Add any of it to an oil change or book it on its own.',
    cardBlurb:
      'Filters, tire rotation, fluids, wipers and battery testing. Add them to an oil change or book on their own.',
    intro: [
      `The small stuff is what people put off. Cabin filter that has not been changed since you bought the car, wipers that smear, a battery you are not sure about going into summer. None of it is worth a trip to a shop on its own, so it waits.`,
      `Bayou Boyz handle all of it at your house, either added onto an oil change or as its own visit. The prices are posted and they are all labor. Parts are billed separately at what they cost.`,
      `Battery testing comes with printed readings, so you are looking at an actual number instead of taking somebody's word that the battery is fine.`,
    ],
    whyUs: [
      {
        h3: 'Posted prices on the small jobs too',
        body: `Filters are $10 for either the engine air or the cabin air, or $15 for both. Tire rotation with a pressure check is $40. Fluid top-off is $10, wiper blades are $10 and a battery test with printed readings is $10. Those are labor prices and parts are separate at cost.`,
      },
      {
        h3: 'Bundle it with the oil change',
        body: `We are already at your vehicle with the hood open. Adding a cabin filter or a rotation to that visit takes minutes rather than another appointment, and it is the cheapest way to keep everything current.`,
      },
      {
        h3: 'Battery testing you can see',
        body: `A battery test that ends with somebody saying it is fine is not worth much. Ours prints the readings and you keep them, which matters most right before summer heat or a long drive.`,
      },
      {
        h3: 'No upsell pressure',
        body: `We tell you what we see and what it costs. If your cabin filter still looks good we say so. There is nothing on our truck we are trying to move.`,
      },
    ],
    includedHeading: 'What we can do at your vehicle',
    included: [
      'Engine air filter replacement',
      'Cabin air filter replacement',
      'Tire rotation and pressure check on stock tires',
      'Washer fluid and coolant top-off',
      'Wiper blade replacement',
      'Battery testing with printed readings',
      'Visual inspection with anything we notice pointed out',
    ],
    process: [
      {
        title: 'Tell us what you want done',
        body: 'On its own or added to an oil change. Give us the year, make and model so we bring parts that actually fit.',
      },
      {
        title: 'We confirm the price',
        body: 'Labor prices are posted. We confirm what the parts run before the visit so the total is settled ahead of time.',
      },
      {
        title: 'We come to the vehicle',
        body: 'Driveway, carport or work lot. Most of these take a few minutes each once we are there.',
      },
      {
        title: 'Record emailed',
        body: 'Everything done on the visit lands on one service record with the date and mileage.',
      },
    ],
    priceMode: 'addons',
    priceLine: 'From $10',
    faqs: [
      {
        q: 'Can I book these without an oil change?',
        a: 'Yes. You can book any of them on their own. Most people add them to an oil change because we are already there, but a standalone visit is fine.',
      },
      {
        q: 'How much is a cabin air filter replacement?',
        a: 'Labor is $10 for either the engine air filter or the cabin air filter, or $15 if you want both done. The filter itself is billed separately at market price, and we tell you that cost before the visit.',
      },
      {
        q: 'Why are parts priced separately?',
        a: 'Because filter and blade prices vary a lot by vehicle. Rolling an average into the labor price would mean overcharging some people and undercharging others, so we keep labor posted and bill the part at what it costs.',
      },
      {
        q: 'Do you rotate tires on any vehicle?',
        a: 'Tire rotation at $40 covers stock tires. Oversized tires, aftermarket setups and anything that needs special equipment are outside what we carry, so tell us what is on the vehicle when you call.',
      },
      {
        q: 'What does battery testing tell me?',
        a: 'It gives you the actual condition of the battery and the charging system as printed readings you keep. That is the difference between guessing and knowing before a Louisiana summer or a long drive.',
      },
      {
        q: 'Will you tell me if something else needs attention?',
        a: 'Yes. Every visit includes a visual inspection and we point out anything we notice. We are not a repair shop, so if something needs real work we tell you what we saw and you take it from there.',
      },
    ],
    heroImage: '/images/hero-maintenance.jpg',
    heroAlt:
      'A Ford Expedition with the hood up in a residential driveway during a Bayou Boyz mobile maintenance visit',
    schemaServiceType: 'Vehicle maintenance',
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
