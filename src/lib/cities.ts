import type { Faq } from './services'

/**
 * City + service landing pages. Google demotes near-duplicate pages, so every
 * entry here carries its own localContext, its own whyHere angle and its own
 * FAQs. Nothing in this file is shared boilerplate. If a town cannot earn
 * genuinely different copy it belongs in the service-area callout instead of
 * getting a page.
 */
export type CityPage = {
  slug: string
  city: string
  parish: string
  serviceSlug: string
  h1: string
  title: string
  description: string
  /** Unique local paragraphs. This is what keeps the page from being a doorway. */
  localContext: string[]
  whyHere: { h3: string; body: string }[]
  nearby: string[]
  faqs: Faq[]
}

export const cityPages: CityPage[] = [
  // ------------------------------------------------------- Thibodaux oil change
  {
    slug: 'mobile-oil-change-thibodaux-la',
    city: 'Thibodaux',
    parish: 'Lafourche Parish',
    serviceSlug: 'mobile-oil-change',
    h1: 'Mobile Oil Change in Thibodaux, LA',
    title: 'Mobile Oil Change in Thibodaux, LA',
    description:
      'Full synthetic oil change at your house, apartment or office in Thibodaux. $100 four-cylinder, $115 six, $130 eight. Filter, refill and inspection included.',
    localContext: [
      `Thibodaux is home for us. Bayou Boyz run out of Lafourche Parish, and a Thibodaux job is usually a short drive rather than a trip, which is why this is the area we can fit in on the shortest notice.`,
      `The town is built in a way that makes a mobile oil change make sense. Between the university, the hospital and the parish offices, a lot of people here work fixed hours in a fixed spot with their vehicle parked outside for eight hours. That vehicle is available the whole time. Handing it to a shop means taking a morning off to sit somewhere and wait for it.`,
      `We service the whole town. The neighborhoods off Canal Boulevard, the apartment complexes near campus, the houses out toward Highway 20 and the subdivisions on the north side. If you can park it, we can service it there.`,
    ],
    whyHere: [
      {
        h3: 'Built around a working schedule',
        body: `Nicholls faculty, staff and students, hospital shifts and parish employees all share the same problem: the car sits still for eight hours in a lot, but the shop is only open during those same eight hours. We service it while it sits, which is the only version of this that does not cost you time off.`,
      },
      {
        h3: 'Short drive means real flexibility',
        body: `Thibodaux is our base, so we can often work a job in the same week rather than booking out. If something comes up and you need to move an appointment, moving it is easy here in a way it is not when we are heading to the far end of the service area.`,
      },
      {
        h3: 'Apartments and rentals included',
        body: `Students and anyone renting near campus usually have nowhere to work on a vehicle and no garage. A mobile service solves that, as long as the property allows it and there is a reasonably level spot to park.`,
      },
    ],
    nearby: ['Chackbay', 'Schriever', 'Raceland', 'Labadieville'],
    faqs: [
      {
        q: 'How much is a mobile oil change in Thibodaux?',
        a: 'The same posted price as everywhere we serve. $100 for a four-cylinder, $115 for a six and $130 for an eight, full synthetic with a new filter and the labor included. We do not charge a travel fee for Thibodaux.',
      },
      {
        q: 'Can you come to Nicholls State or an apartment complex?',
        a: 'Yes, as long as the property allows it and there is a level place to park. Apartment lots around campus are a regular stop for us. If a property manager has a rule against work being done in the lot, tell us and we will sort out another spot.',
      },
      {
        q: 'How soon can you get to a Thibodaux address?',
        a: 'Thibodaux is our home base so it is usually the quickest area for us to reach. Call or text Joel at (985) 414-1733 or Chase at (985) 859-1628 and we will tell you honestly what we have open rather than promise a window we cannot hold.',
      },
      {
        q: 'Do you service vehicles at businesses in Thibodaux?',
        a: 'Yes. Office parking lots, shop lots and business yards all work. If several vehicles at one business need service, ask about fleet pricing instead of booking them one at a time.',
      },
    ],
  },

  // ----------------------------------------------------------- Houma oil change
  {
    slug: 'mobile-oil-change-houma-la',
    city: 'Houma',
    parish: 'Terrebonne Parish',
    serviceSlug: 'mobile-oil-change',
    h1: 'Mobile Oil Change in Houma, LA',
    title: 'Mobile Oil Change in Houma, LA | From $100',
    description:
      'Skip the drive-through line. Bayou Boyz bring full synthetic oil changes to your home or workplace anywhere in Houma, Bayou Cane and Gray. Book today.',
    localContext: [
      `Houma is the biggest market we serve and it has the most oil change options of anywhere in the area, which is exactly why a come-to-you service works here. There are plenty of shops. What costs you is the drive over and the wait once you get there.`,
      `A lot of Houma works twelve-hour shifts or offshore rotations. When you come off a long shift, the last thing that happens is a detour to sit in a queue on Martin Luther King Boulevard or Grand Caillou Road. So the oil change slides another month, and then another.`,
      `We cover Houma proper along with Bayou Cane and Gray, which is most of where people actually live around the city. The vehicle gets serviced in the driveway on your day off, or in the work lot while you are inside.`,
    ],
    whyHere: [
      {
        h3: 'Twelve-hour shifts and offshore rotations',
        body: `Houma runs on schedules that do not line up with shop hours. If you are on a hitch, the vehicle sits at the house untouched for a week or two at a stretch. That is the ideal time to service it, and it costs you nothing because you are not there anyway.`,
      },
      {
        h3: 'No line, because there is no line',
        body: `A drive-through oil change is quick once you are in the bay. The part nobody counts is the drive there, the wait behind three cars and the drive back. At your house, none of that exists.`,
      },
      {
        h3: 'Bayou Cane and Gray are included',
        body: `Most of greater Houma is not inside the city limits. We cover Bayou Cane and Gray the same as Houma itself, at the same posted price, with no separate travel charge.`,
      },
    ],
    nearby: ['Bayou Cane', 'Gray', 'Schriever', 'Bourg'],
    faqs: [
      {
        q: 'Do you charge extra to come to Houma?',
        a: 'No. Houma is in our service area at the same posted prices as Thibodaux. A four-cylinder is $100, a six is $115 and an eight is $130, full synthetic with a new filter.',
      },
      {
        q: 'Do you cover Bayou Cane and Gray?',
        a: 'Yes, both, at the same price as Houma. Most of greater Houma lives outside the city limits and we treat the whole area as one service zone.',
      },
      {
        q: 'Can you service my vehicle while I am offshore?',
        a: 'Yes, and it is one of the most common ways people in Houma use us. The vehicle sits at the house during your hitch, so we service it then. Arrange it with whoever is home, or leave it accessible and we will text you the record when it is done.',
      },
      {
        q: 'Can you come to my workplace in Houma?',
        a: 'Yes, if the property allows it and there is a level place to park. Work lots are a normal stop for us. If several vehicles at the same workplace need service, ask about fleet pricing.',
      },
    ],
  },

  // --------------------------------------------------------------- Houma diesel
  {
    slug: 'mobile-diesel-oil-change-houma-la',
    city: 'Houma',
    parish: 'Terrebonne Parish',
    serviceSlug: 'mobile-diesel-oil-change',
    h1: 'Mobile Diesel Oil Change in Houma, LA',
    title: 'Mobile Diesel Oil Change in Houma, LA',
    description:
      'Diesel oil changes for F-250, F-350, 2500 and 3500 pickups at your Houma driveway or job site. Synthetic diesel oil, filter and 10 quarts for $200 flat.',
    localContext: [
      `Houma has more diesel pickups per block than almost anywhere, because Houma is where the Gulf service industry lives. Port Fourchon sits at the bottom of Lafourche and services the large majority of deepwater production in the Gulf, and a lot of the people who make that work happen keep a three-quarter or one-ton truck in the driveway in Houma.`,
      `Those trucks are hard to get serviced. Quick-lube bays are built around gas engines and short capacity, and the shops equipped for diesel in this area are generally set up for commercial trucks and fleet accounts rather than for one pickup.`,
      `Our diesel service is built for the pickup. $200 flat, ten quarts of synthetic diesel oil and a new filter, done where the truck is parked.`,
    ],
    whyHere: [
      {
        h3: 'Crew change is the perfect window',
        body: `A truck that sits at the house for seven or fourteen days while you are offshore is a truck that can get serviced without costing you an hour. We can come out mid-hitch and have it done before you are back on the dock.`,
      },
      {
        h3: 'Pickups, not Class 8',
        body: `Diesel service in this region is aimed at commercial trucks and fleet yards. If you own one F-250, finding somebody who wants that single job is harder than it should be. That single job is what we do.`,
      },
      {
        h3: 'Power Stroke, Cummins and Duramax',
        body: `Filters and capacities differ across the three, so we ask which engine you have when you call and load for it before we leave. Tell us the year and the engine and the truck is handled.`,
      },
    ],
    nearby: ['Bayou Cane', 'Gray', 'Bourg', 'Schriever'],
    faqs: [
      {
        q: 'How much is a diesel oil change in Houma?',
        a: '$200 flat, the same as everywhere we serve. That covers ten quarts of synthetic diesel oil, a new oil filter and the labor. Trucks that hold more than ten quarts get the difference quoted before we add it.',
      },
      {
        q: 'Can you service my truck while I am offshore?',
        a: 'Yes, and that is when most Houma diesel customers have it done. The truck sits at the house through the hitch, so we service it then. You get the record emailed whether you are home or not.',
      },
      {
        q: 'Do you service diesel trucks at company yards in Houma?',
        a: 'Yes, if the site allows it. If there are several trucks at one yard it is worth asking about fleet pricing rather than booking each truck separately.',
      },
      {
        q: 'Do you work on marine or commercial diesel engines?',
        a: 'No. We service diesel pickups such as the F-250, F-350, 2500 and 3500. Marine engines, Class 8 trucks and heavy equipment all need a shop set up for that kind of work.',
      },
    ],
  },

  // ----------------------------------------------------------- Thibodaux diesel
  {
    slug: 'mobile-diesel-oil-change-thibodaux-la',
    city: 'Thibodaux',
    parish: 'Lafourche Parish',
    serviceSlug: 'mobile-diesel-oil-change',
    h1: 'Mobile Diesel Oil Change in Thibodaux, LA',
    title: 'Mobile Diesel Oil Change in Thibodaux, LA',
    description:
      'We bring diesel oil changes to your driveway in Thibodaux. F-250, F-350, 2500 and 3500. Synthetic diesel oil, filter and 10 quarts included. $200 flat.',
    localContext: [
      `Thibodaux diesels tend to be working trucks that also happen to be the family vehicle. They run Highway 1 and Highway 20 during the week, pull a trailer on the weekend and haul whatever the season calls for.`,
      `Cane country adds its own rhythm. From October into January, grinding season puts farm trucks and equipment under sustained load, and that is the stretch when nobody has a spare morning to sit in a waiting room. It is also exactly when skipping maintenance costs the most.`,
      `We service diesel pickups at the house, at the camp or at the shop for $200 flat, with ten quarts of synthetic diesel oil and a new filter included.`,
    ],
    whyHere: [
      {
        h3: 'The truck that works and hauls the family',
        body: `Most Thibodaux diesels do not sit in a fleet yard. They are in a driveway, and they are needed Monday morning. Servicing at the house on a Saturday means the truck never leaves and nobody arranges a ride.`,
      },
      {
        h3: 'Built for the drive to Fourchon',
        body: `A lot of these trucks run south every week. High-mileage highway diesels earn their intervals fast, and letting one slide because the shop is only open while you are working is how oil ends up three thousand miles overdue.`,
      },
      {
        h3: 'Grinding season is our busiest diesel stretch',
        body: `October through January is when farm trucks around here work hardest. If you want the truck current before the season, book it in late summer rather than trying to find a window in the middle of harvest.`,
      },
    ],
    nearby: ['Chackbay', 'Schriever', 'Raceland', 'Labadieville'],
    faqs: [
      {
        q: 'How much does a diesel oil change cost in Thibodaux?',
        a: '$200 flat. That includes ten quarts of synthetic diesel oil, a new oil filter and the labor. If your truck holds more than ten quarts we quote the difference up front rather than adding it afterward.',
      },
      {
        q: 'Can you service a farm truck out in the field or at a shop?',
        a: 'Yes, as long as the ground is reasonably level and we can get to the truck. Farm shops and equipment yards around Thibodaux and Chackbay are normal stops for us.',
      },
      {
        q: 'Do you service trucks during grinding season?',
        a: 'Yes, and it is one of our busier stretches for diesel work. If you want the truck current before harvest, late summer is the easier time to book. During the season we work around your hours.',
      },
      {
        q: 'Which diesel engines do you handle?',
        a: 'Heavy-duty pickups across Power Stroke, Cummins and Duramax. F-250, F-350, 2500 and 3500 are the trucks we see most. Tell us the year and engine when you call so we bring the right filter and oil.',
      },
    ],
  },

  // -------------------------------------------------------- Raceland oil change
  {
    slug: 'mobile-oil-change-raceland-la',
    city: 'Raceland',
    parish: 'Lafourche Parish',
    serviceSlug: 'mobile-oil-change',
    h1: 'Mobile Oil Change in Raceland, LA',
    title: 'Mobile Oil Change in Raceland, LA',
    description:
      'Raceland mobile oil change service. Full synthetic, filter and inspection at your home or along the Highway 90 corridor. Cars, trucks, SUVs and diesel.',
    localContext: [
      `Raceland sits on Highway 90 between Thibodaux and Houma, which means most people here already drive a lot before they have driven anywhere on purpose. Commuting to Houma, up to Thibodaux or south toward Lockport and Larose puts miles on a vehicle fast.`,
      `It also means an oil change usually involves leaving town. Getting to a shop and back is most of a morning once you count the drive both ways and the wait in between, and that is before anybody has looked at your vehicle.`,
      `We come to Raceland. Same posted prices, no travel charge, and the vehicle never gets on Highway 90 to go get serviced.`,
    ],
    whyHere: [
      {
        h3: 'Commuter miles add up quietly',
        body: `A Raceland vehicle running to Houma and back five days a week reaches its interval faster than the mileage feels. Servicing at the house instead of building another trip into the week is the difference between staying current and falling behind.`,
      },
      {
        h3: 'The oilfield corridor',
        body: `Highway 90 through Raceland carries a lot of oilfield traffic, and plenty of it is personal trucks headed to work rather than company vehicles. Gas or diesel, we service both in the driveway.`,
      },
      {
        h3: 'No trip out of town',
        body: `The whole point is that nothing about your day changes. You do not drive anywhere, you do not sit anywhere and you do not build a Saturday around it.`,
      },
    ],
    nearby: ['Lockport', 'Mathews', 'Thibodaux', 'Gray'],
    faqs: [
      {
        q: 'Do you charge a travel fee to Raceland?',
        a: 'No. Raceland is inside our service area and the price is the same as everywhere else we go. $100 for a four-cylinder, $115 for a six and $130 for an eight.',
      },
      {
        q: 'Do you service diesel trucks in Raceland?',
        a: 'Yes. Diesel pickups are $200 flat, including ten quarts of synthetic diesel oil and a new filter. Raceland sees a lot of diesel because of the Highway 90 oilfield traffic.',
      },
      {
        q: 'Do you cover Lockport and Mathews too?',
        a: 'Yes. Lockport, Mathews and the surrounding communities along the bayou are in our area. Call or text with your address and we will confirm.',
      },
      {
        q: 'Can you come out early before I leave for work?',
        a: 'We work early mornings, evenings and weekends. Tell us your schedule when you call and we will find a window, or service the vehicle while you are at work if it is parked somewhere we can reach it.',
      },
    ],
  },

  // -------------------------------------------------------- Chackbay oil change
  {
    slug: 'mobile-oil-change-chackbay-la',
    city: 'Chackbay',
    parish: 'Lafourche Parish',
    serviceSlug: 'mobile-oil-change',
    h1: 'Mobile Oil Change in Chackbay, LA',
    title: 'Mobile Oil Change in Chackbay, LA',
    description:
      'Chackbay oil change without the drive. Full synthetic oil change, filter and visual inspection in your own driveway, starting at $100.',
    localContext: [
      `Chackbay is one of the three communities Bayou Boyz named when the business started, and it is the clearest example of why a mobile service exists out here. Getting an oil change in Chackbay means driving into Thibodaux, waiting, and driving back. That is most of a morning for a job that takes well under an hour.`,
      `Rural Lafourche also runs more vehicles per household than a town does. Between a daily driver, a work truck, a farm vehicle and something with a trailer hitch on it, a family out here can have four things that all need oil at different times of the year.`,
      `We come out to you and can handle several vehicles in the same stop, which is usually the practical way to do it when the alternative is four separate trips into town.`,
    ],
    whyHere: [
      {
        h3: 'The drive is the whole problem',
        body: `Nothing about the oil change itself is difficult. The round trip into town is what makes people put it off, and putting it off is what turns a routine service into a real repair later. Removing the drive removes the reason to delay.`,
      },
      {
        h3: 'More than one vehicle at the house',
        body: `Households out here commonly have several vehicles, and a work truck or farm vehicle rarely gets the same attention as the car. We can service more than one on a single visit, which makes catching everything up realistic.`,
      },
      {
        h3: 'Farm and utility vehicles too',
        body: `Not everything that needs oil out here is a car. Diesel trucks, zero-turn mowers and standby generators all get the same treatment, and we can look at all of them on one stop.`,
      },
    ],
    nearby: ['Thibodaux', 'Kraemer', 'Labadieville', 'Schriever'],
    faqs: [
      {
        q: 'How much is an oil change in Chackbay?',
        a: 'The same as everywhere we serve. $100 for a four-cylinder, $115 for a six and $130 for an eight, with full synthetic oil, a new filter and the labor included. There is no rural travel charge.',
      },
      {
        q: 'Can you service more than one vehicle at the same visit?',
        a: 'Yes, and out here it is usually the sensible way to do it. Tell us how many and what they are when you call so we load enough oil and the right filters for all of them.',
      },
      {
        q: 'Do you service farm trucks and equipment in Chackbay?',
        a: 'Diesel pickups and small engines such as zero-turn mowers, yes. Heavy farm equipment and tractors are outside what we are set up for, so tell us what you have and we will be straight with you about whether it is something we can handle.',
      },
      {
        q: 'Do you cover Kraemer and the surrounding area?',
        a: 'Yes. Kraemer and the communities around Chackbay are in our area. Call or text with your address and we will confirm before booking.',
      },
    ],
  },

  // ----------------------------------------------------- Labadieville oil change
  {
    slug: 'mobile-oil-change-labadieville-la',
    city: 'Labadieville',
    parish: 'Assumption Parish',
    serviceSlug: 'mobile-oil-change',
    h1: 'Mobile Oil Change in Labadieville, LA',
    title: 'Mobile Oil Change in Labadieville, LA',
    description:
      'Mobile oil changes in Labadieville and Assumption Parish. Full synthetic, new filter and inspection in your driveway, starting at $100.',
    localContext: [
      `Labadieville is the third community Bayou Boyz committed to when the business opened, and it anchors our Assumption Parish coverage. It sits along the Highway 1 corridor on Bayou Lafourche, north of Thibodaux and south of Napoleonville.`,
      `Assumption Parish is cane country. A large share of the vehicles here are trucks that work, and the ones that work hardest are the ones nobody has time to take anywhere between October and January when the crop is coming off.`,
      `A mobile service fits that. The truck stays where it is, the service happens around the work, and nothing has to be scheduled around a shop that closes before the day does.`,
    ],
    whyHere: [
      {
        h3: 'Assumption Parish is a real drive from a shop',
        body: `Everything from Labadieville is a drive. Whichever direction you pick, an oil change turns into an afternoon, and that is the reason people here let maintenance slip far longer than they mean to.`,
      },
      {
        h3: 'Cane season sets the calendar',
        body: `From October into January the trucks and equipment around here do not stop, and neither does anybody driving them. Work gets fit around the crop, which is exactly what a come-to-you service is able to do.`,
      },
      {
        h3: 'One stop for the yard',
        body: `Truck, standby generator, mower. If they are all at the same address, they can all be handled on one visit rather than three separate arrangements.`,
      },
    ],
    nearby: ['Napoleonville', 'Thibodaux', 'Chackbay', 'Paincourtville'],
    faqs: [
      {
        q: 'Do you come to Labadieville and Assumption Parish?',
        a: 'Yes. Labadieville is one of the three communities we named when the business started, and it anchors our Assumption Parish coverage. There is no separate travel charge.',
      },
      {
        q: 'How much does it cost?',
        a: 'Same posted pricing as the rest of our area. $100 for a four-cylinder, $115 for a six and $130 for an eight, full synthetic with a new filter. Diesel pickups are $200 flat.',
      },
      {
        q: 'Do you cover Napoleonville and Paincourtville?',
        a: 'Yes, those and the surrounding communities along the Highway 1 corridor. Call or text your address and we will confirm before we book it.',
      },
      {
        q: 'Can you work around cane season?',
        a: 'That is most of why people here call us. We work evenings and weekends, and the vehicle never leaves the yard, so a service does not cost you a working day during harvest.',
      },
    ],
  },

  // ------------------------------------------------------ Thibodaux generator
  {
    slug: 'generator-maintenance-thibodaux-la',
    city: 'Thibodaux',
    parish: 'Lafourche Parish',
    serviceSlug: 'generator-maintenance',
    h1: 'Generator Maintenance in Thibodaux, LA',
    title: 'Standby Generator Maintenance in Thibodaux, LA',
    description:
      'Annual engine service for standby home generators in Thibodaux. Oil, filters, plugs and battery check. No contract, and we service units we did not install.',
    localContext: [
      `A lot of Thibodaux has a standby generator now. After the last several storm seasons they went in across the parish, and a fair number of them have not been touched since the day they were commissioned.`,
      `Plenty of companies around here will sell you a generator. Far fewer will maintain one you already own. Nearly every generator company in this parish is an electrical contractor whose business is installation, so maintenance tends to come bundled with a plan or attached to the company that put the unit in.`,
      `We are the other kind of company. We do maintenance and nothing else, we will service a unit installed by somebody else, and there is no plan to sign before we will come out.`,
    ],
    whyHere: [
      {
        h3: 'Units that came with the house',
        body: `Buying a house in Thibodaux with a generator already on the slab is common now, and the new owner usually has no relationship with whoever installed it. That unit still needs oil, filters and plugs on schedule, and that is a call we can take.`,
      },
      {
        h3: 'Service before the season, not during it',
        body: `Hurricane season runs June through November. The right time to have a unit serviced is spring, while nobody is in a hurry. The week a storm enters the Gulf, every installer in the parish is buried and you are joining a line.`,
      },
      {
        h3: 'Engine work only, and we say so',
        body: `We service the engine: oil, oil filter, air filter, pre-cleaner, plugs and the battery. Electrical work, transfer switches and gas lines require a licensed contractor in Louisiana and we do not touch them. Knowing where the line is protects you as much as it protects us.`,
      },
    ],
    nearby: ['Chackbay', 'Schriever', 'Raceland', 'Labadieville'],
    faqs: [
      {
        q: 'Will you service a generator another company installed in Thibodaux?',
        a: 'Yes, and that is the bulk of our generator work. We are a maintenance service rather than an installer, so who put the unit in and how long ago makes no difference to us.',
      },
      {
        q: 'How much does generator maintenance cost?',
        a: 'We quote it per unit, because the parts vary by model and size. Send us a photo of the data label on the side of the enclosure or tell us the brand and size, and we will give you a number before we come out.',
      },
      {
        q: 'When should I have my generator serviced in Thibodaux?',
        a: 'Spring is the best window, before hurricane season starts on June 1. Most air-cooled home standby units are on a 200 run-hour or two-year interval, and that shortens in sustained extreme heat, which describes a Louisiana summer.',
      },
      {
        q: 'Do you do electrical work on generators?',
        a: 'No. We service the engine only. Installation, transfer switch work, wiring and gas line work all require a licensed electrician or gas fitter in Louisiana. If we see an electrical problem we will tell you what we found and you will want a licensed electrician for it.',
      },
    ],
  },

  // ---------------------------------------------------------- Houma generator
  {
    slug: 'generator-maintenance-houma-la',
    city: 'Houma',
    parish: 'Terrebonne Parish',
    serviceSlug: 'generator-maintenance',
    h1: 'Generator Maintenance in Houma, LA',
    title: 'Standby Generator Maintenance in Houma, LA',
    description:
      'Engine service for standby home generators in Houma and Terrebonne Parish. Oil, filters, plugs and battery check, with no maintenance contract required.',
    localContext: [
      `Terrebonne Parish has as much standby generator density as anywhere in Louisiana, for reasons nobody here needs explained. What the parish does not have much of is maintenance-only service.`,
      `Salt air is the part people underestimate. A unit sitting outside within reach of coastal air works harder on its battery terminals and its enclosure than the same unit would two hundred miles north, and the summer heat shortens the service interval on top of that.`,
      `We come to Houma, Bayou Cane, Gray and Bourg to service the engine on standby units. No contract, no requirement that we installed it, and a written record of what was done.`,
    ],
    whyHere: [
      {
        h3: 'After a storm, installers are installing',
        body: `When a named storm comes through, generator companies here get buried putting in new units and wait times stretch out. We only do maintenance, which means a unit that will not start is a job we can actually get to rather than add to a list.`,
      },
      {
        h3: 'Coastal air is hard on a unit',
        body: `Battery terminals corrode faster near the coast and the enclosure takes more abuse. We clean the terminals and inspect the enclosure on every service, because in Terrebonne those are the parts most likely to be the reason a unit will not start.`,
      },
      {
        h3: 'The interval is shorter than you think',
        body: `Most air-cooled units run a 200 run-hour or two-year interval, and sustained extreme heat pulls that closer to 100 hours. A Houma summer is sustained extreme heat. If your unit exercises weekly and ran through an outage, the hours add up faster than the calendar suggests.`,
      },
    ],
    nearby: ['Bayou Cane', 'Gray', 'Bourg', 'Schriever'],
    faqs: [
      {
        q: 'Do you service standby generators in Houma?',
        a: 'Yes. Houma, Bayou Cane, Gray and Bourg are all in our service area for generator maintenance, and there is no travel charge for any of them.',
      },
      {
        q: 'Can you come out after a storm?',
        a: 'We try to, and it is a situation we are better positioned for than most. Installers get booked solid with new installations after a named storm. We only do maintenance, so an engine problem is something we can respond to rather than add to an install queue.',
      },
      {
        q: 'How often should a generator be serviced on the coast?',
        a: 'Check your owner manual for your model, but most air-cooled home standby units call for service at 200 run hours or every two years, and that interval shortens to around 100 hours in sustained extreme heat. Coastal Terrebonne summers put units at the shorter end. A unit that ran through an outage should be looked at afterward regardless of the calendar.',
      },
      {
        q: 'Do you require a maintenance contract?',
        a: 'No. You can call for a single service whenever you want one. If you would rather be on a regular cadence we can arrange that, but nothing needs to be signed before we come out.',
      },
    ],
  },
]

export const getCityPage = (slug: string) => cityPages.find((c) => c.slug === slug)
