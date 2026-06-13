// ── DIET PLANS DATABASE ───────────────────────────────────────────────────────
const DIET_PLANS = {

  // ═══════════════════════════════════════════════════════
  // WEIGHT LOSS
  // ═══════════════════════════════════════════════════════
  wl_veg: {
    id:'wl_veg', goal:'fat_loss', type:'vegetarian',
    name:'Weight Loss — Vegetarian',
    icon:'🥗', deficit:500,
    desc:'High protein vegetarian diet for sustainable fat loss. Preserves muscle while burning fat.',
    macros:{protein:'1.8-2g/kg', carbs:'low-moderate', fat:'moderate'},
    rules:['Calorie deficit of 400-500 kcal/day','Protein at every meal to preserve muscle','Avoid refined carbs and sugar','Eat vegetables at every meal','Drink 3-4 litres water daily'],
    meals:{
      breakfast:[
        {name:'Moong Dal Chilla + Curd',cals:320,protein:22,carbs:38,fat:8,desc:'3 moong dal chilla with mint chutney + 1 cup low-fat curd'},
        {name:'Oats + Milk + Nuts',cals:300,protein:15,carbs:40,fat:8,desc:'1 cup oats cooked in low-fat milk with almonds and walnuts'},
        {name:'Paneer Bhurji + Roti',cals:350,protein:24,carbs:30,fat:12,desc:'100g paneer bhurji with 1 whole wheat roti'},
        {name:'Greek Yogurt + Fruits',cals:280,protein:20,carbs:32,fat:5,desc:'200g Greek yogurt with mixed berries and 1 tsp honey'},
      ],
      lunch:[
        {name:'Dal + Brown Rice + Sabzi',cals:450,protein:20,carbs:65,fat:8,desc:'1 cup dal, half cup brown rice, 1 cup mixed vegetable sabzi'},
        {name:'Paneer Salad Bowl',cals:380,protein:28,carbs:20,fat:18,desc:'150g grilled paneer, cucumber, tomato, spinach, olive oil dressing'},
        {name:'Rajma + Roti',cals:420,protein:22,carbs:58,fat:7,desc:'1 cup rajma curry with 2 whole wheat rotis and onion salad'},
        {name:'Chole + Quinoa',cals:440,protein:24,carbs:55,fat:9,desc:'1 cup chole with half cup quinoa and raw salad'},
      ],
      dinner:[
        {name:'Grilled Paneer + Salad',cals:320,protein:26,carbs:12,fat:18,desc:'150g grilled paneer with large mixed salad, no dressing'},
        {name:'Vegetable Soup + Egg',cals:280,protein:20,carbs:22,fat:10,desc:'Large vegetable soup with 2 boiled eggs'},
        {name:'Tofu Stir Fry',cals:300,protein:24,carbs:20,fat:14,desc:'200g tofu stir fried with vegetables and minimal oil'},
        {name:'Moong Dal Khichdi',cals:340,protein:18,carbs:50,fat:6,desc:'Light moong dal khichdi with curd on the side'},
      ],
      snacks:[
        {name:'Roasted Chana',cals:120,protein:8,carbs:18,fat:2,desc:'Half cup roasted chana — high protein low calorie snack'},
        {name:'Paneer Cubes',cals:140,protein:12,carbs:2,fat:10,desc:'75g raw paneer with black pepper and lemon'},
        {name:'Mixed Nuts',cals:150,protein:5,carbs:6,fat:13,desc:'Small handful — almonds, walnuts, cashews'},
        {name:'Fruit + Curd',cals:130,protein:8,carbs:20,fat:2,desc:'Apple or pear with 100g low fat curd'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:1,lunch:1,dinner:1,snack:1},
      wed:{breakfast:2,lunch:2,dinner:2,snack:2},
      thu:{breakfast:3,lunch:3,dinner:3,snack:3},
      fri:{breakfast:0,lunch:1,dinner:0,snack:0},
      sat:{breakfast:1,lunch:2,dinner:1,snack:1},
      sun:{breakfast:2,lunch:3,dinner:2,snack:2},
    },
    tips:['Eat dinner before 8 PM','Chew food slowly — 20 mins for satiety signal','Never skip breakfast','Meal prep Sunday for the whole week','Weigh yourself same time every morning']
  },

  wl_nonveg: {
    id:'wl_nonveg', goal:'fat_loss', type:'non-vegetarian',
    name:'Weight Loss — Non-Veg',
    icon:'🍗', deficit:500,
    desc:'High protein non-veg diet for maximum fat loss while preserving lean muscle mass.',
    macros:{protein:'2-2.2g/kg', carbs:'low', fat:'moderate'},
    rules:['500 kcal deficit daily','Lean proteins at every meal','Avoid fried foods completely','Prioritize chicken breast and fish','No processed meats'],
    meals:{
      breakfast:[
        {name:'Egg White Omelette',cals:280,protein:28,carbs:8,fat:10,desc:'5 egg whites + 1 yolk omelette with vegetables and 1 toast'},
        {name:'Boiled Eggs + Oats',cals:310,protein:26,carbs:32,fat:10,desc:'3 boiled eggs with 1 cup oats and fruits'},
        {name:'Chicken Poha',cals:340,protein:30,carbs:35,fat:8,desc:'100g shredded chicken with poha, peas, and minimal oil'},
        {name:'Egg Bhurji + Roti',cals:320,protein:24,carbs:28,fat:12,desc:'3 eggs bhurji with 1 whole wheat roti'},
      ],
      lunch:[
        {name:'Grilled Chicken + Salad',cals:380,protein:42,carbs:15,fat:12,desc:'150g grilled chicken breast, large salad with lemon dressing'},
        {name:'Fish Curry + Brown Rice',cals:440,protein:38,carbs:48,fat:10,desc:'150g fish curry (minimal oil) with half cup brown rice'},
        {name:'Chicken Dal',cals:420,protein:40,carbs:35,fat:10,desc:'100g chicken with lentil curry and 1 roti'},
        {name:'Tuna Salad Bowl',cals:360,protein:44,carbs:12,fat:12,desc:'1 can tuna, avocado, cucumber, tomatoes, olive oil dressing'},
      ],
      dinner:[
        {name:'Baked Chicken + Veggies',cals:350,protein:44,carbs:18,fat:10,desc:'150g baked chicken breast with roasted vegetables'},
        {name:'Egg + Vegetable Soup',cals:280,protein:24,carbs:20,fat:8,desc:'2 eggs in vegetable broth with spinach and mushrooms'},
        {name:'Grilled Fish + Salad',cals:320,protein:40,carbs:12,fat:10,desc:'150g grilled fish with large salad, no dressing'},
        {name:'Chicken Stir Fry',cals:360,protein:42,carbs:20,fat:10,desc:'150g chicken with vegetables, minimal oil, no rice'},
      ],
      snacks:[
        {name:'Boiled Eggs',cals:140,protein:18,carbs:1,fat:8,desc:'2 boiled eggs — perfect low calorie high protein snack'},
        {name:'Chicken Breast Strips',cals:130,protein:26,carbs:0,fat:3,desc:'75g cold grilled chicken strips with mustard'},
        {name:'Greek Yogurt',cals:100,protein:17,carbs:6,fat:1,desc:'150g plain Greek yogurt — high protein snack'},
        {name:'Tuna on Rice Cake',cals:120,protein:14,carbs:10,fat:2,desc:'Half can tuna on 2 rice cakes'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:1,lunch:1,dinner:1,snack:1},
      wed:{breakfast:2,lunch:2,dinner:2,snack:2},
      thu:{breakfast:3,lunch:3,dinner:3,snack:3},
      fri:{breakfast:0,lunch:1,dinner:0,snack:0},
      sat:{breakfast:1,lunch:2,dinner:1,snack:1},
      sun:{breakfast:2,lunch:3,dinner:2,snack:2},
    },
    tips:['Meal prep chicken breast in bulk every Sunday','Fish twice a week for omega-3','Avoid chicken skin and visible fat','Grilled or baked — never fried','Track calories using any food app']
  },

  // ═══════════════════════════════════════════════════════
  // MUSCLE GAIN
  // ═══════════════════════════════════════════════════════
  mg_veg: {
    id:'mg_veg', goal:'muscle', type:'vegetarian',
    name:'Muscle Gain — Vegetarian',
    icon:'💪', surplus:400,
    desc:'High calorie high protein vegetarian diet for maximum muscle building. Calorie surplus with clean foods.',
    macros:{protein:'2-2.2g/kg', carbs:'high', fat:'moderate'},
    rules:['400-500 kcal surplus above maintenance','Protein every 3 hours','Carbs around workout timing','Eat 5-6 meals per day','Calorie dense foods to hit targets'],
    meals:{
      breakfast:[
        {name:'Paneer Paratha + Curd',cals:580,protein:32,carbs:65,fat:18,desc:'2 paneer parathas with 200g curd and butter — muscle building breakfast'},
        {name:'Oats + Milk + Protein',cals:550,protein:40,carbs:68,fat:12,desc:'1.5 cups oats, full fat milk, 1 scoop whey, banana, nuts'},
        {name:'Chickpea Omelette',cals:480,protein:36,carbs:45,fat:15,desc:'Besan chilla (4 pieces) with paneer filling and chutney'},
        {name:'Dalia + Milk + Eggs',cals:520,protein:34,carbs:62,fat:12,desc:'Broken wheat porridge in full fat milk with 2 eggs on side'},
      ],
      lunch:[
        {name:'Dal Rice + Paneer Sabzi',cals:680,protein:38,carbs:88,fat:16,desc:'1.5 cups rice, 1.5 cups dal, 150g paneer sabzi, raita'},
        {name:'Rajma Chawal Full Plate',cals:720,protein:36,carbs:100,fat:14,desc:'2 cups rice, large bowl rajma, curd, pickle'},
        {name:'Chole Bhature',cals:750,protein:30,carbs:98,fat:22,desc:'2 large bhature with chole, onion, and pickle — mass building meal'},
        {name:'Paneer Biryani',cals:700,protein:34,carbs:90,fat:18,desc:'250g paneer biryani with raita and salad'},
      ],
      dinner:[
        {name:'Paneer + Dal + Roti',cals:620,protein:40,carbs:72,fat:18,desc:'200g paneer curry, 1 cup dal, 3 rotis with ghee'},
        {name:'Tofu Fried Rice',cals:580,protein:32,carbs:80,fat:16,desc:'300g tofu fried rice with egg and vegetables'},
        {name:'Soya Keema + Rice',cals:650,protein:44,carbs:82,fat:14,desc:'150g soya keema curry with 1.5 cups rice'},
        {name:'Pasta with Paneer',cals:640,protein:36,carbs:78,fat:18,desc:'Whole wheat pasta with paneer, vegetables, olive oil'},
      ],
      snacks:[
        {name:'Banana + Peanut Butter',cals:280,protein:10,carbs:42,fat:12,desc:'2 bananas with 2 tbsp peanut butter — calorie dense pre-workout'},
        {name:'Paneer + Nuts Trail Mix',cals:320,protein:18,carbs:24,fat:18,desc:'100g paneer + handful mixed nuts'},
        {name:'Whey Shake + Oats',cals:350,protein:30,carbs:44,fat:6,desc:'1 scoop whey in milk with oats — post workout'},
        {name:'Chana + Jaggery',cals:260,protein:14,carbs:40,fat:5,desc:'1 cup boiled chana with grated jaggery and lemon'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:1,lunch:1,dinner:1,snack:1},
      wed:{breakfast:2,lunch:2,dinner:2,snack:2},
      thu:{breakfast:3,lunch:3,dinner:3,snack:3},
      fri:{breakfast:0,lunch:1,dinner:0,snack:0},
      sat:{breakfast:1,lunch:2,dinner:1,snack:1},
      sun:{breakfast:2,lunch:3,dinner:2,snack:2},
    },
    tips:['Never skip post-workout meal within 1 hour','Paneer is your best friend — eat it daily','Milk before bed for overnight protein','Track weight weekly not daily','Increase calories if not gaining after 2 weeks']
  },

  mg_nonveg: {
    id:'mg_nonveg', goal:'muscle', type:'non-vegetarian',
    name:'Muscle Gain — Non-Veg',
    icon:'🍖', surplus:500,
    desc:'Optimal non-veg muscle building diet. High protein, high calorie, clean foods only.',
    macros:{protein:'2.2-2.5g/kg', carbs:'high', fat:'moderate-high'},
    rules:['500 kcal surplus above maintenance','1g protein per pound of bodyweight minimum','Eat every 3-4 hours','Carbs before and after training','Quality sleep for maximum anabolism'],
    meals:{
      breakfast:[
        {name:'Whole Eggs + Oats',cals:620,protein:42,carbs:62,fat:20,desc:'5 whole eggs scrambled with 1.5 cups oats, banana, and milk'},
        {name:'Chicken Egg Paratha',cals:580,protein:44,carbs:60,fat:18,desc:'2 egg parathas with 100g chicken filling, curd'},
        {name:'Egg Omelette + Toast',cals:520,protein:38,carbs:48,fat:18,desc:'4 egg omelette with 2 whole wheat toast and avocado'},
        {name:'Protein Pancakes',cals:560,protein:46,carbs:54,fat:14,desc:'Egg and banana pancakes with whey, top with nuts and honey'},
      ],
      lunch:[
        {name:'Chicken Rice Bowl',cals:750,protein:56,carbs:88,fat:16,desc:'200g grilled chicken, 1.5 cups rice, vegetables, olive oil'},
        {name:'Fish + Rice + Dal',cals:720,protein:52,carbs:82,fat:16,desc:'200g fish curry, 1.5 cups rice, dal, salad'},
        {name:'Chicken Biryani',cals:780,protein:50,carbs:92,fat:18,desc:'250g chicken biryani with raita and salad'},
        {name:'Mutton + Roti + Dal',cals:800,protein:54,carbs:76,fat:24,desc:'150g mutton curry, 3 rotis, dal, salad'},
      ],
      dinner:[
        {name:'Baked Chicken + Sweet Potato',cals:680,protein:56,carbs:72,fat:14,desc:'200g baked chicken with sweet potato and vegetables'},
        {name:'Grilled Fish + Rice',cals:640,protein:52,carbs:70,fat:14,desc:'200g grilled fish with 1 cup rice and salad'},
        {name:'Chicken Curry + Roti',cals:700,protein:54,carbs:68,fat:20,desc:'200g chicken curry with 3 rotis and dal'},
        {name:'Egg Fried Rice',cals:660,protein:44,carbs:80,fat:18,desc:'4 eggs fried rice with chicken strips and vegetables'},
      ],
      snacks:[
        {name:'Chicken Breast + Rice Cake',cals:220,protein:38,carbs:14,fat:4,desc:'100g cold chicken breast with 2 rice cakes'},
        {name:'Eggs + Banana',cals:260,protein:24,carbs:28,fat:10,desc:'2 boiled eggs with 2 bananas — pre-workout fuel'},
        {name:'Tuna + Crackers',cals:240,protein:30,carbs:18,fat:6,desc:'1 can tuna with whole grain crackers'},
        {name:'Protein Shake + Milk',cals:380,protein:46,carbs:32,fat:8,desc:'1.5 scoops whey in 400ml full fat milk — post workout'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:1,lunch:1,dinner:1,snack:1},
      wed:{breakfast:2,lunch:2,dinner:2,snack:2},
      thu:{breakfast:3,lunch:3,dinner:3,snack:3},
      fri:{breakfast:0,lunch:1,dinner:0,snack:0},
      sat:{breakfast:1,lunch:2,dinner:1,snack:1},
      sun:{breakfast:2,lunch:3,dinner:2,snack:2},
    },
    tips:['Eggs are cheapest high quality protein','Chicken breast over thigh for leaner gains','Fish twice weekly for omega-3 recovery','Do not fear carbs — fuel your training','Eat within 30 mins after training']
  },

  // ═══════════════════════════════════════════════════════
  // STRENGTH / POWERLIFTING
  // ═══════════════════════════════════════════════════════
  str_veg: {
    id:'str_veg', goal:'strength', type:'vegetarian',
    name:'Strength Diet — Vegetarian',
    icon:'🏋️', surplus:300,
    desc:'Performance-focused vegetarian diet. Maximize strength gains with optimal fueling.',
    macros:{protein:'1.8-2g/kg', carbs:'high around training', fat:'moderate-high'},
    rules:['Eat big on training days, moderate on rest','Carbs before heavy lifts','Protein shake post training','Creatine 5g daily with water','Consistent meal timing'],
    meals:{
      breakfast:[
        {name:'Paneer Omelette + Toast',cals:520,protein:38,carbs:44,fat:18,desc:'150g paneer and 2 egg omelette with whole wheat toast'},
        {name:'Sabudana Khichdi + Curd',cals:480,protein:20,carbs:72,fat:10,desc:'Tapioca with peanuts, curd — great pre training carbs'},
        {name:'Protein Dosa + Sambar',cals:440,protein:28,carbs:58,fat:10,desc:'2 dosas with protein-rich sambar, no butter'},
        {name:'Milk + Banana + Nuts',cals:460,protein:18,carbs:62,fat:14,desc:'Full fat milk smoothie with banana, almond butter, oats'},
      ],
      lunch:[
        {name:'Dal Tadka + Ghee Rice',cals:700,protein:30,carbs:98,fat:18,desc:'Rich dal tadka with ghee rice — maximum energy for evening training'},
        {name:'Paneer Butter Masala + Naan',cals:750,protein:36,carbs:85,fat:24,desc:'200g paneer butter masala with 2 naans on training days'},
        {name:'Soya Chunk Biryani',cals:680,protein:42,carbs:88,fat:14,desc:'200g soya chunks biryani — cheap high protein meal'},
        {name:'Chana Dal + Rice + Ghee',cals:660,protein:32,carbs:90,fat:16,desc:'Chana dal with white rice, generous ghee, pickle'},
      ],
      dinner:[
        {name:'Paneer + Roti + Dal',cals:640,protein:42,carbs:70,fat:20,desc:'200g paneer dish, 3 rotis, dal on heavy training days'},
        {name:'Tofu + Brown Rice',cals:560,protein:34,carbs:70,fat:16,desc:'200g tofu curry with brown rice on rest days'},
        {name:'Egg + Paneer Bhurji + Roti',cals:620,protein:40,carbs:60,fat:22,desc:'Mixed egg and paneer bhurji with rotis'},
        {name:'Moong Soup + Quinoa',cals:480,protein:28,carbs:62,fat:10,desc:'Light dinner on rest days — moong soup with quinoa'},
      ],
      snacks:[
        {name:'Pre-Workout: Banana + Dates',cals:200,protein:4,carbs:50,fat:1,desc:'Quick carbs 45 mins before heavy session'},
        {name:'Post-Workout: Whey + Milk',cals:360,protein:38,carbs:32,fat:8,desc:'Within 30 mins of training — essential for recovery'},
        {name:'Peanut Butter Sandwich',cals:300,protein:14,carbs:36,fat:14,desc:'Whole wheat bread with 2 tbsp peanut butter'},
        {name:'Roasted Makhana',cals:150,protein:8,carbs:24,fat:2,desc:'Fox nuts — light evening snack'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:1,lunch:1,dinner:1,snack:1},
      wed:{breakfast:2,lunch:2,dinner:2,snack:2},
      thu:{breakfast:3,lunch:3,dinner:3,snack:3},
      fri:{breakfast:0,lunch:1,dinner:0,snack:0},
      sat:{breakfast:1,lunch:2,dinner:1,snack:1},
      sun:{breakfast:2,lunch:3,dinner:2,snack:2},
    },
    tips:['More carbs on training days, less on rest days','Ghee is not your enemy — healthy fat for hormones','Creatine is the only proven supplement','Never train fasted — eat 1-2 hours before','Sleep 8 hours — strength is built during sleep']
  },

  str_nonveg: {
    id:'str_nonveg', goal:'strength', type:'non-vegetarian',
    name:'Strength Diet — Non-Veg',
    icon:'💥', surplus:350,
    desc:'Maximum performance non-veg diet. Built for powerlifters and strength athletes.',
    macros:{protein:'2-2.2g/kg', carbs:'high on training days', fat:'moderate-high'},
    rules:['Carb cycle — high on training, low on rest','Post-workout meal within 45 mins','Omega-3 from fish 3x weekly','Avoid alcohol — kills testosterone','Consistent meal timing for hormones'],
    meals:{
      breakfast:[
        {name:'Eggs + Beef Keema Toast',cals:680,protein:56,carbs:48,fat:26,desc:'3 eggs + 100g beef keema on whole wheat toast'},
        {name:'Omelette + Chicken Sausage',cals:580,protein:52,carbs:20,fat:30,desc:'4 egg omelette with 2 chicken sausages and vegetables'},
        {name:'Eggs Benedict Style',cals:620,protein:48,carbs:38,fat:28,desc:'3 poached eggs on toast with smoked chicken'},
        {name:'Egg + Oats + Milk',cals:600,protein:46,carbs:60,fat:18,desc:'3 whole eggs with oats cooked in full fat milk'},
      ],
      lunch:[
        {name:'Mutton + Rice + Dal',cals:900,protein:62,carbs:96,fat:28,desc:'200g mutton curry, 2 cups rice, dal — maximum mass meal'},
        {name:'Chicken Leg Quarters + Rice',cals:820,protein:60,carbs:88,fat:20,desc:'2 chicken leg quarters, 2 cups rice, vegetables'},
        {name:'Beef/Mutton Biryani',cals:880,protein:58,carbs:96,fat:24,desc:'300g biryani — ultimate strength training meal'},
        {name:'Whole Chicken + Pasta',cals:850,protein:64,carbs:82,fat:22,desc:'150g chicken with whole wheat pasta and sauce'},
      ],
      dinner:[
        {name:'Steak + Sweet Potato',cals:780,protein:62,carbs:68,fat:22,desc:'200g lean beef/mutton with sweet potato on training days'},
        {name:'Salmon + Rice',cals:720,protein:56,carbs:72,fat:20,desc:'200g salmon with brown rice — omega-3 recovery dinner'},
        {name:'Chicken + Lentils',cals:680,protein:60,carbs:62,fat:16,desc:'200g chicken with lentil soup on rest days'},
        {name:'Egg Curry + Roti',cals:640,protein:44,carbs:60,fat:22,desc:'4 egg curry with 3 rotis'},
      ],
      snacks:[
        {name:'Pre-Workout: Rice + Eggs',cals:380,protein:28,carbs:52,fat:8,desc:'1 cup rice with 2 boiled eggs 1.5 hours before training'},
        {name:'Post-Workout: Protein Shake',cals:400,protein:50,carbs:36,fat:6,desc:'2 scoops whey in milk immediately after training'},
        {name:'Sardines on Toast',cals:280,protein:32,carbs:20,fat:10,desc:'Canned sardines — cheap high quality protein and omega-3'},
        {name:'Beef Jerky',cals:180,protein:28,carbs:4,fat:6,desc:'High protein portable snack for between meals'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:1,lunch:1,dinner:1,snack:1},
      wed:{breakfast:2,lunch:2,dinner:2,snack:2},
      thu:{breakfast:3,lunch:3,dinner:3,snack:3},
      fri:{breakfast:0,lunch:1,dinner:0,snack:0},
      sat:{breakfast:1,lunch:2,dinner:1,snack:1},
      sun:{breakfast:2,lunch:3,dinner:2,snack:2},
    },
    tips:['Mutton once a week for natural creatine','Salmon twice a week for omega-3','Eat before you are hungry — do not let energy drop','Red meat provides zinc and iron for testosterone','Sleep and food are your two biggest performance factors']
  },

  // ═══════════════════════════════════════════════════════
  // ATHLETIC PERFORMANCE
  // ═══════════════════════════════════════════════════════
  ath_veg: {
    id:'ath_veg', goal:'athletic', type:'vegetarian',
    name:'Athletic Performance — Veg',
    icon:'🏃', surplus:200,
    desc:'Optimized for speed, endurance and power. Carb-focused fueling with complete nutrition.',
    macros:{protein:'1.6-1.8g/kg', carbs:'very high', fat:'moderate'},
    rules:['Carbs are fuel — do not restrict them','Pre-game meal 3 hours before competition','Recovery meal within 45 mins post training','Hydrate aggressively before and during training','Electrolytes for sessions over 60 minutes'],
    meals:{
      breakfast:[
        {name:'Idli Sambar',cals:420,protein:18,carbs:72,fat:8,desc:'6 idlis with protein-rich sambar — ideal athlete breakfast'},
        {name:'Banana Oat Smoothie',cals:460,protein:20,carbs:78,fat:8,desc:'2 bananas, oats, milk, peanut butter — pre training fuel'},
        {name:'Poha + Curd',cals:400,protein:16,carbs:68,fat:8,desc:'Poha with peas and vegetables, curd on side'},
        {name:'Upma + Fruits',cals:380,protein:14,carbs:64,fat:8,desc:'Semolina upma with mixed fruits for carb loading'},
      ],
      lunch:[
        {name:'Rice + Dal + Sabzi',cals:680,protein:28,carbs:105,fat:10,desc:'Athlete plate — 2 cups rice, dal, vegetables, no restriction'},
        {name:'Pasta + Paneer',cals:640,protein:32,carbs:92,fat:14,desc:'Whole wheat pasta with paneer and tomato sauce'},
        {name:'Bread + Peanut Butter + Banana',cals:580,protein:20,carbs:90,fat:14,desc:'4 slices whole wheat bread with peanut butter and bananas'},
        {name:'Sweet Potato + Dal',cals:560,protein:22,carbs:88,fat:8,desc:'2 sweet potatoes with dal and vegetables'},
      ],
      dinner:[
        {name:'Rice + Egg + Dal',cals:600,protein:32,carbs:86,fat:12,desc:'Recovery dinner — carbs and protein after training'},
        {name:'Khichdi + Curd',cals:540,protein:24,carbs:80,fat:12,desc:'Dal khichdi with ghee and curd — complete recovery meal'},
        {name:'Paneer + Roti',cals:580,protein:34,carbs:68,fat:16,desc:'Paneer curry with 3 rotis for muscle repair'},
        {name:'Vegetable Biryani + Raita',cals:560,protein:20,carbs:84,fat:12,desc:'Vegetable biryani with protein raita'},
      ],
      snacks:[
        {name:'Sports: Banana + Dates',cals:220,protein:4,carbs:56,fat:1,desc:'During or just before athletic activity — instant energy'},
        {name:'Recovery: Milk + Banana',cals:280,protein:14,carbs:46,fat:5,desc:'After training — fast carbs with protein'},
        {name:'Energy: Peanut Butter Balls',cals:240,protein:10,carbs:28,fat:12,desc:'Oats, peanut butter, honey rolled into balls'},
        {name:'Electrolytes: Coconut Water',cals:80,protein:2,carbs:18,fat:0,desc:'Natural electrolytes — better than sports drinks'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:1,lunch:1,dinner:1,snack:1},
      wed:{breakfast:2,lunch:2,dinner:2,snack:2},
      thu:{breakfast:3,lunch:3,dinner:3,snack:3},
      fri:{breakfast:0,lunch:1,dinner:0,snack:0},
      sat:{breakfast:1,lunch:2,dinner:1,snack:1},
      sun:{breakfast:2,lunch:3,dinner:2,snack:2},
    },
    tips:['Never exercise on empty stomach','Coconut water is the best natural electrolyte drink','More carbs on game day — restrict fat','Recovery meal is as important as training','Iron-rich foods — spinach, lentils, beans']
  },

  ath_nonveg: {
    id:'ath_nonveg', goal:'athletic', type:'non-vegetarian',
    name:'Athletic Performance — Non-Veg',
    icon:'⚡', surplus:300,
    desc:'Science-based athlete diet. Optimal carb-protein ratio for performance and recovery.',
    macros:{protein:'1.8-2g/kg', carbs:'very high', fat:'moderate'},
    rules:['Carb load 2 days before competition','Protein every meal for repair','Omega-3 from fish for joint health','No heavy meals within 3 hours of training','Consistent sleep schedule for peak performance'],
    meals:{
      breakfast:[
        {name:'Eggs + Rice + Fruits',cals:640,protein:38,carbs:86,fat:14,desc:'4 eggs any style with 1 cup rice and seasonal fruits'},
        {name:'Chicken Porridge',cals:580,protein:44,carbs:70,fat:12,desc:'Oats and rice porridge with shredded chicken'},
        {name:'Egg Sandwich + Milk',cals:560,protein:40,carbs:58,fat:18,desc:'3 egg sandwich on whole wheat with full fat milk'},
        {name:'Omelette + Banana + Oats',cals:600,protein:36,carbs:76,fat:14,desc:'3 egg omelette with oats and 2 bananas'},
      ],
      lunch:[
        {name:'Chicken + Rice + Vegetables',cals:800,protein:58,carbs:96,fat:16,desc:'200g chicken, 2 cups rice, vegetables — athlete staple meal'},
        {name:'Tuna Pasta',cals:720,protein:52,carbs:88,fat:14,desc:'Whole wheat pasta with 2 cans tuna and tomato sauce'},
        {name:'Salmon + Sweet Potato',cals:760,protein:52,carbs:80,fat:20,desc:'200g salmon with 2 sweet potatoes and vegetables'},
        {name:'Egg Fried Rice + Chicken',cals:780,protein:54,carbs:92,fat:16,desc:'Large egg fried rice with chicken strips'},
      ],
      dinner:[
        {name:'Grilled Chicken + Rice',cals:680,protein:54,carbs:74,fat:14,desc:'180g grilled chicken with 1.5 cups rice and salad'},
        {name:'Fish Curry + Rice',cals:660,protein:50,carbs:72,fat:14,desc:'180g fish curry with rice — omega-3 recovery meal'},
        {name:'Chicken + Lentils + Roti',cals:640,protein:52,carbs:66,fat:14,desc:'Chicken with lentil soup and rotis for recovery'},
        {name:'Egg Rice Bowl',cals:620,protein:44,carbs:72,fat:14,desc:'3 eggs over rice with vegetables — simple recovery meal'},
      ],
      snacks:[
        {name:'Pre-Training: Rice Cakes + Eggs',cals:280,protein:20,carbs:36,fat:6,desc:'90 minutes before training — light and digestible'},
        {name:'Post-Training: Protein + Banana',cals:380,protein:40,carbs:44,fat:4,desc:'1.5 scoops whey with 2 bananas — golden recovery window'},
        {name:'Sardines + Crackers',cals:240,protein:28,carbs:18,fat:8,desc:'High omega-3 protein snack for joint recovery'},
        {name:'Chocolate Milk',cals:300,protein:16,carbs:44,fat:8,desc:'The original recovery drink — 3:1 carb to protein ratio'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:1,lunch:1,dinner:1,snack:1},
      wed:{breakfast:2,lunch:2,dinner:2,snack:2},
      thu:{breakfast:3,lunch:3,dinner:3,snack:3},
      fri:{breakfast:0,lunch:1,dinner:0,snack:0},
      sat:{breakfast:1,lunch:2,dinner:1,snack:1},
      sun:{breakfast:2,lunch:3,dinner:2,snack:2},
    },
    tips:['Chocolate milk is scientifically proven recovery drink','Fish 3x weekly for omega-3','Avoid new foods on competition day','Iron from meat absorbs better than plants','Hydrate 500ml extra for every hour of training']
  },

  // ═══════════════════════════════════════════════════════
  // MAINTENANCE / BODY RECOMPOSITION
  // ═══════════════════════════════════════════════════════
  recomp_veg: {
    id:'recomp_veg', goal:'recomposition', type:'vegetarian',
    name:'Body Recomp — Vegetarian',
    icon:'🔄', surplus:0,
    desc:'Lose fat and gain muscle simultaneously. Calorie cycling — high on training days, low on rest.',
    macros:{protein:'2-2.2g/kg', carbs:'cycled', fat:'moderate'},
    rules:['Training days: maintenance calories','Rest days: 200-300 kcal below maintenance','Protein stays high every single day','High carbs before and after training only','Patience — recomp takes 3-6 months'],
    meals:{
      breakfast:[
        {name:'Egg + Paneer Scramble',cals:380,protein:36,carbs:12,fat:22,desc:'2 eggs + 100g paneer scrambled with vegetables — high protein low carb'},
        {name:'Greek Yogurt + Nuts',cals:340,protein:28,carbs:24,fat:14,desc:'250g Greek yogurt with mixed nuts and berries'},
        {name:'Oats + Whey (Training Day)',cals:460,protein:38,carbs:52,fat:8,desc:'Training day breakfast — more carbs for energy'},
        {name:'Moong Dal Omelette',cals:360,protein:32,carbs:22,fat:16,desc:'Besan and egg omelette — complete amino acid profile'},
      ],
      lunch:[
        {name:'Salad + Dal + Small Rice',cals:480,protein:28,carbs:56,fat:10,desc:'Large salad, dal, small rice portion on training days'},
        {name:'Paneer + Salad (Rest Day)',cals:380,protein:32,carbs:16,fat:22,desc:'Rest day lunch — higher fat, lower carbs'},
        {name:'Chole + Small Roti',cals:440,protein:24,carbs:52,fat:10,desc:'Protein-rich chole with 1-2 rotis only'},
        {name:'Tofu + Vegetables',cals:360,protein:28,carbs:20,fat:18,desc:'200g tofu with stir fried vegetables and minimal carbs'},
      ],
      dinner:[
        {name:'Paneer + Vegetables (Low Carb)',cals:380,protein:30,carbs:16,fat:22,desc:'High protein low carb dinner every night'},
        {name:'Dal + Small Portion Rice',cals:420,protein:24,carbs:50,fat:8,desc:'Training day — slightly more carbs at dinner'},
        {name:'Egg + Salad',cals:300,protein:26,carbs:12,fat:16,desc:'3 eggs with large salad — perfect recomp dinner'},
        {name:'Soya + Vegetables',cals:360,protein:32,carbs:22,fat:14,desc:'Soya chunks with vegetable curry — low calorie high protein'},
      ],
      snacks:[
        {name:'Paneer Cubes',cals:140,protein:12,carbs:2,fat:10,desc:'75g paneer — pure protein snack'},
        {name:'Roasted Chana',cals:120,protein:8,carbs:18,fat:2,desc:'Small portion — fiber and protein'},
        {name:'Greek Yogurt',cals:100,protein:16,carbs:6,fat:1,desc:'High protein very low calorie snack'},
        {name:'Almonds',cals:140,protein:5,carbs:5,fat:12,desc:'12-15 almonds — healthy fat and satiety'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:2,lunch:0,dinner:0,snack:0},
      wed:{breakfast:1,lunch:1,dinner:1,snack:1},
      thu:{breakfast:2,lunch:2,dinner:2,snack:2},
      fri:{breakfast:3,lunch:3,dinner:3,snack:3},
      sat:{breakfast:0,lunch:0,dinner:0,snack:0},
      sun:{breakfast:1,lunch:1,dinner:1,snack:1},
    },
    tips:['Recomp requires patience — trust the process','Protein must stay high EVERY day without exception','Measure progress with photos not just weight','Scale will not move much — that is normal','After 3 months you will see dramatic body composition change']
  },

  recomp_nonveg: {
    id:'recomp_nonveg', goal:'recomposition', type:'non-vegetarian',
    name:'Body Recomp — Non-Veg',
    icon:'⚖️', surplus:0,
    desc:'Build muscle and lose fat at the same time. Best for intermediate level trainees.',
    macros:{protein:'2.2-2.5g/kg', carbs:'cycled by training', fat:'moderate'},
    rules:['High protein every day without exception','Carb cycle: high on lifting days, low on cardio/rest','Track food for first 4 weeks minimum','Weigh food — eyeballing does not work for recomp','Progressive overload in gym required for results'],
    meals:{
      breakfast:[
        {name:'Eggs + Chicken (High Protein)',cals:420,protein:52,carbs:8,fat:18,desc:'4 eggs + 75g chicken — pure protein morning for rest days'},
        {name:'Eggs + Oats (Training Day)',cals:540,protein:44,carbs:52,fat:16,desc:'3 eggs with oats and banana on training days'},
        {name:'Greek Yogurt + Eggs',cals:380,protein:44,carbs:14,fat:14,desc:'2 eggs + 200g Greek yogurt — very high protein'},
        {name:'Protein Omelette',cals:400,protein:40,carbs:16,fat:20,desc:'5 egg omelette with chicken and vegetables'},
      ],
      lunch:[
        {name:'Chicken Salad Bowl',cals:420,protein:50,carbs:20,fat:14,desc:'180g chicken, mixed greens, avocado, lemon — rest day'},
        {name:'Chicken Rice (Training Day)',cals:620,protein:52,carbs:66,fat:12,desc:'Training day — 180g chicken with 1.5 cups rice'},
        {name:'Fish + Vegetables',cals:400,protein:46,carbs:16,fat:14,desc:'180g grilled fish with large vegetable portion'},
        {name:'Tuna Salad',cals:360,protein:44,carbs:12,fat:12,desc:'2 cans tuna with salad and olive oil'},
      ],
      dinner:[
        {name:'Chicken + Low Carb Veg',cals:380,protein:46,carbs:14,fat:14,desc:'180g chicken with broccoli, spinach — every night'},
        {name:'Fish + Small Rice',cals:460,protein:44,carbs:38,fat:12,desc:'Training day dinner — slightly more carbs'},
        {name:'Eggs + Salad',cals:320,protein:30,carbs:12,fat:16,desc:'3-4 eggs with large salad'},
        {name:'Chicken Soup',cals:340,protein:42,carbs:16,fat:10,desc:'High protein low calorie soup dinner'},
      ],
      snacks:[
        {name:'Boiled Eggs',cals:140,protein:18,carbs:1,fat:8,desc:'2 boiled eggs — perfect macro snack'},
        {name:'Chicken Strips',cals:130,protein:26,carbs:0,fat:3,desc:'Cold grilled chicken — pure protein'},
        {name:'Greek Yogurt',cals:100,protein:17,carbs:6,fat:1,desc:'High protein very low calorie'},
        {name:'Jerky',cals:160,protein:26,carbs:4,fat:4,desc:'Beef or chicken jerky — portable protein'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:1,lunch:1,dinner:1,snack:1},
      wed:{breakfast:2,lunch:2,dinner:2,snack:2},
      thu:{breakfast:3,lunch:3,dinner:3,snack:3},
      fri:{breakfast:0,lunch:1,dinner:0,snack:0},
      sat:{breakfast:1,lunch:2,dinner:1,snack:1},
      sun:{breakfast:2,lunch:3,dinner:2,snack:2},
    },
    tips:['Chicken breast is king for recomp — cheap and high protein','Track everything for first month','Higher carbs only on training days','The scale will fluctuate — ignore daily changes','Take monthly progress photos — the real measure']
  },

  // ═══════════════════════════════════════════════════════
  // GENERAL FITNESS / MAINTENANCE
  // ═══════════════════════════════════════════════════════
  gen_veg: {
    id:'gen_veg', goal:'general', type:'vegetarian',
    name:'General Fitness — Vegetarian',
    icon:'🌿', surplus:0,
    desc:'Balanced vegetarian diet for overall health, energy, and fitness maintenance.',
    macros:{protein:'1.4-1.6g/kg', carbs:'moderate', fat:'moderate'},
    rules:['Eat a rainbow of vegetables daily','Whole grains over refined always','Legumes at every lunch for protein and fiber','Healthy fats from nuts and seeds','Limit processed and packaged foods'],
    meals:{
      breakfast:[
        {name:'Poha + Tea',cals:340,protein:10,carbs:60,fat:8,desc:'Classic Indian breakfast — poha with vegetables and green tea'},
        {name:'Dosa + Sambar',cals:360,protein:14,carbs:64,fat:8,desc:'2 dosas with sambar and coconut chutney'},
        {name:'Upma + Fruits',cals:320,protein:10,carbs:56,fat:8,desc:'Semolina upma with seasonal fruits'},
        {name:'Paratha + Pickle',cals:400,protein:12,carbs:58,fat:14,desc:'2 whole wheat parathas with pickle and curd'},
      ],
      lunch:[
        {name:'Dal Rice + Sabzi',cals:560,protein:22,carbs:86,fat:10,desc:'Complete balanced Indian meal — dal, rice, vegetable'},
        {name:'Roti + Dal + Curd',cals:520,protein:20,carbs:76,fat:10,desc:'3 rotis, dal, curd, salad'},
        {name:'Rajma Rice',cals:580,protein:24,carbs:90,fat:8,desc:'Rajma chawal — complete protein from combination'},
        {name:'Sambar + Rice + Papad',cals:540,protein:18,carbs:88,fat:8,desc:'South Indian style meal'},
      ],
      dinner:[
        {name:'Khichdi + Curd',cals:420,protein:18,carbs:62,fat:10,desc:'Light digestible dinner — dal khichdi with curd'},
        {name:'Vegetable Soup + Roti',cals:380,protein:14,carbs:58,fat:8,desc:'Mixed vegetable soup with 2 rotis'},
        {name:'Paneer Sabzi + Roti',cals:480,protein:24,carbs:52,fat:18,desc:'Paneer curry with 2 rotis'},
        {name:'Dal + Roti',cals:400,protein:18,carbs:60,fat:8,desc:'Simple dal with rotis — clean light dinner'},
      ],
      snacks:[
        {name:'Fruits',cals:100,protein:2,carbs:24,fat:1,desc:'Any seasonal fruit — apple, banana, orange, papaya'},
        {name:'Murmura Chaat',cals:120,protein:4,carbs:22,fat:3,desc:'Puffed rice with vegetables and lime — healthy low calorie'},
        {name:'Roasted Peanuts',cals:140,protein:8,carbs:6,fat:10,desc:'Small portion roasted peanuts — healthy fat and protein'},
        {name:'Buttermilk',cals:80,protein:4,carbs:8,fat:2,desc:'Chaas — probiotic and cooling'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:1,lunch:1,dinner:1,snack:1},
      wed:{breakfast:2,lunch:2,dinner:2,snack:2},
      thu:{breakfast:3,lunch:3,dinner:3,snack:3},
      fri:{breakfast:0,lunch:1,dinner:0,snack:0},
      sat:{breakfast:1,lunch:2,dinner:1,snack:1},
      sun:{breakfast:2,lunch:3,dinner:2,snack:2},
    },
    tips:['Indian traditional food is already very balanced','Cook with minimal oil — 1-2 tsp per meal','Curd daily for gut health and calcium','Seasonal fruits are cheaper and more nutritious','Walk 30 minutes daily regardless of gym']
  },

  gen_nonveg: {
    id:'gen_nonveg', goal:'general', type:'non-vegetarian',
    name:'General Fitness — Non-Veg',
    icon:'🍽️', surplus:0,
    desc:'Balanced non-veg diet for everyday health and fitness. Simple, practical, sustainable.',
    macros:{protein:'1.4-1.6g/kg', carbs:'moderate', fat:'moderate'},
    rules:['Lean protein at least twice daily','Vegetables with every main meal','Limit red meat to twice weekly','Fish at least once a week','Avoid deep fried foods daily'],
    meals:{
      breakfast:[
        {name:'Egg + Toast',cals:320,protein:22,carbs:32,fat:12,desc:'2 eggs any style with 2 whole wheat toast'},
        {name:'Omelette + Fruits',cals:300,protein:20,carbs:30,fat:12,desc:'2 egg omelette with seasonal fruits'},
        {name:'Chicken Sandwich',cals:360,protein:28,carbs:38,fat:10,desc:'2 slices bread with 75g chicken and salad leaves'},
        {name:'Poha + Eggs',cals:380,protein:24,carbs:50,fat:10,desc:'Poha with 2 poached eggs on top'},
      ],
      lunch:[
        {name:'Chicken Dal Rice',cals:580,protein:40,carbs:68,fat:12,desc:'100g chicken, dal, rice — balanced complete meal'},
        {name:'Fish Curry + Rice',cals:560,protein:38,carbs:64,fat:12,desc:'Fish curry with rice and salad'},
        {name:'Egg Curry + Roti',cals:520,protein:32,carbs:58,fat:16,desc:'Egg curry with 2-3 rotis'},
        {name:'Chicken Salad + Rice',cals:540,protein:38,carbs:58,fat:12,desc:'Grilled chicken with salad and small rice portion'},
      ],
      dinner:[
        {name:'Grilled Chicken + Vegetables',cals:420,protein:40,carbs:24,fat:12,desc:'150g grilled chicken with mixed vegetables'},
        {name:'Fish + Dal + Roti',cals:500,protein:36,carbs:52,fat:14,desc:'Fish curry, dal, and 2 rotis'},
        {name:'Eggs + Rice',cals:440,protein:28,carbs:52,fat:12,desc:'Egg curry or bhurji with rice'},
        {name:'Chicken Soup + Bread',cals:380,protein:30,carbs:38,fat:10,desc:'Chicken vegetable soup with 2 slices bread'},
      ],
      snacks:[
        {name:'Boiled Egg',cals:70,protein:6,carbs:0,fat:5,desc:'Single boiled egg — simplest protein snack'},
        {name:'Fruits',cals:100,protein:2,carbs:24,fat:1,desc:'Banana, apple, or orange'},
        {name:'Roasted Chana',cals:120,protein:8,carbs:18,fat:2,desc:'High fiber protein snack'},
        {name:'Yogurt',cals:100,protein:8,carbs:10,fat:3,desc:'Plain curd or yogurt'},
      ]
    },
    weekly:{
      mon:{breakfast:0,lunch:0,dinner:0,snack:0},
      tue:{breakfast:1,lunch:1,dinner:1,snack:1},
      wed:{breakfast:2,lunch:2,dinner:2,snack:2},
      thu:{breakfast:3,lunch:3,dinner:3,snack:3},
      fri:{breakfast:0,lunch:1,dinner:0,snack:0},
      sat:{breakfast:1,lunch:2,dinner:1,snack:1},
      sun:{breakfast:2,lunch:3,dinner:2,snack:2},
    },
    tips:['Eggs are the most complete protein source','Cook meals at home — healthier and cheaper','Grilled or baked always over fried','Fish is the healthiest animal protein','Consistency beats perfection every time']
  }
};

// ── DIET HELPER FUNCTIONS ─────────────────────────────────────────────────────
function getDietPlan(goal, type) {
  const veg = (type === 'vegetarian' || type === 'veg') ? 'veg' : 'nonveg';
  // Direct prefix lookup
  const prefixMap = {
    fat_loss:'wl', muscle:'mg', strength:'str',
    athletic:'ath', recomposition:'recomp', general:'gen'
  };
  const prefix = prefixMap[goal] || 'gen';
  return DIET_PLANS[prefix+'_'+veg] || DIET_PLANS['gen_'+veg] || null;
}

function calcDietCals(profile) {
  const w = parseFloat(profile.weight) || 70;
  const a = parseInt(profile.age) || 25;
  const h = parseFloat(profile.height) || 170;
  const g = profile.gender === 'male';
  const bmr = g ? (10*w + 6.25*h - 5*a + 5) : (10*w + 6.25*h - 5*a - 161);
  return Math.round(bmr * 1.55);
}

function getDietGoalFromWorkout(planId) {
  const map = {
    ppl:'muscle', bro:'muscle', muscle:'muscle',
    muscle_gain:'muscle', 'muscle gain':'muscle',
    wl1:'fat_loss', wl2:'fat_loss', wl3:'fat_loss',
    'weight loss phase 1':'fat_loss','weight loss phase 2':'fat_loss','weight loss phase 3':'fat_loss',
    strength:'strength','strength and power':'strength', upper:'strength','upper lower':'strength',
    athletic:'athletic','athletic performance':'athletic',
    home:'general','home workout':'general',
    fullbody:'general','full body':'general',
    mobility:'general','mobility and recovery':'general',
    recomp:'recomposition','body recomp':'recomposition'
  };
  // Try exact match first, then lowercase
  return map[planId] || map[(planId||'').toLowerCase()] || 'general';
}

const DIET_META = [
  {id:'wl_veg',    icon:'🥗', name:'Weight Loss — Veg',        goal:'fat_loss',      type:'vegetarian'},
  {id:'wl_nonveg', icon:'🍗', name:'Weight Loss — Non-Veg',    goal:'fat_loss',      type:'non-vegetarian'},
  {id:'mg_veg',    icon:'💪', name:'Muscle Gain — Veg',        goal:'muscle',        type:'vegetarian'},
  {id:'mg_nonveg', icon:'🍖', name:'Muscle Gain — Non-Veg',    goal:'muscle',        type:'non-vegetarian'},
  {id:'str_veg',   icon:'🏋️', name:'Strength — Veg',           goal:'strength',      type:'vegetarian'},
  {id:'str_nonveg',icon:'💥', name:'Strength — Non-Veg',       goal:'strength',      type:'non-vegetarian'},
  {id:'ath_veg',   icon:'🏃', name:'Athletic — Veg',           goal:'athletic',      type:'vegetarian'},
  {id:'ath_nonveg',icon:'⚡', name:'Athletic — Non-Veg',       goal:'athletic',      type:'non-vegetarian'},
  {id:'recomp_veg',   icon:'🔄', name:'Recomp — Veg',          goal:'recomposition', type:'vegetarian'},
  {id:'recomp_nonveg',icon:'⚖️', name:'Recomp — Non-Veg',      goal:'recomposition', type:'non-vegetarian'},
  {id:'gen_veg',   icon:'🌿', name:'General Fitness — Veg',    goal:'general',       type:'vegetarian'},
  {id:'gen_nonveg',icon:'🍽️', name:'General Fitness — Non-Veg',goal:'general',      type:'non-vegetarian'},
];

// ── DIET UI RENDERER ──────────────────────────────────────────────────────────
function renderDietView(containerId, profile) {
  const c = document.getElementById(containerId);
  if (!c) return;

  // Get goal from planId
  const rawPlan = (profile.planId || 'ppl').toLowerCase().trim();
  let goal = 'muscle'; // default
  if(rawPlan.includes('wl')||rawPlan.includes('weight')) goal='fat_loss';
  else if(rawPlan.includes('str')||rawPlan.includes('upper')||rawPlan.includes('power')) goal='strength';
  else if(rawPlan.includes('ath')) goal='athletic';
  else if(rawPlan.includes('recomp')) goal='recomposition';
  else if(rawPlan.includes('home')||rawPlan.includes('full')||rawPlan.includes('mob')) goal='general';
  else goal='muscle'; // ppl, bro, muscle, mg all map to muscle
  const type = profile.dietType || 'non-vegetarian';
  const plan = getDietPlan(goal, type);
  const tdee = calcDietCals(profile);

  let html = `
  <div style="padding:0 16px 16px">
    <!-- Type Toggle -->
    <div style="display:flex;background:rgba(79,110,247,0.08);border-radius:14px;padding:4px;margin-bottom:16px;border:1px solid rgba(79,110,247,0.1)">
      <button onclick="switchDietType('vegetarian')" id="dt_veg"
        style="flex:1;padding:9px;border-radius:9px;border:none;cursor:pointer;font-size:13px;font-weight:600;font-family:inherit;transition:all .2s;background:${type==='vegetarian'?'white':'transparent'};color:${type==='vegetarian'?'#10b981':'#8892b0'};box-shadow:${type==='vegetarian'?'0 2px 12px rgba(16,185,129,0.2)':'none'}">
        🌿 Vegetarian
      </button>
      <button onclick="switchDietType('non-vegetarian')" id="dt_nonveg"
        style="flex:1;padding:9px;border-radius:9px;border:none;cursor:pointer;font-size:13px;font-weight:600;font-family:inherit;transition:all .2s;background:${type!=='vegetarian'?'white':'transparent'};color:${type!=='vegetarian'?'#f59e0b':'#8892b0'};box-shadow:${type!=='vegetarian'?'0 2px 12px rgba(245,158,11,0.2)':'none'}">
        🍗 Non-Veg
      </button>
    </div>`;

  if (!plan) {
    html += `<div style="text-align:center;padding:40px;color:#8892b0;font-size:13px">No plan found. Please update your profile.</div></div>`;
    c.innerHTML = html; return;
  }

  const surplus = plan.surplus || 0;
  const deficit = plan.deficit || 0;
  const targetCals = surplus ? tdee + surplus : deficit ? tdee - deficit : tdee;

  // Header card
  html += `
    <div style="background:rgba(255,255,255,0.65);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.9);border-radius:18px;padding:16px;margin-bottom:14px;box-shadow:0 4px 16px rgba(0,0,0,0.08)">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <span style="font-size:28px">${plan.icon}</span>
        <div>
          <div style="font-size:15px;font-weight:700;color:#0f1729">${plan.name}</div>
          <div style="font-size:11px;color:#8892b0;margin-top:2px">${plan.desc}</div>
        </div>
      </div>
      <!-- Calorie targets -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;text-align:center;background:rgba(79,110,247,0.06);border-radius:12px;padding:12px;border:1px solid rgba(79,110,247,0.1)">
        <div><div style="font-size:18px;font-weight:800;color:#4f6ef7">${targetCals}</div><div style="font-size:9px;color:#8892b0;font-weight:700;text-transform:uppercase;margin-top:2px">Calories</div></div>
        <div><div style="font-size:18px;font-weight:800;color:#ef4444">${profile.weight?Math.round(parseFloat(profile.weight)*2.2)+'g':'—'}</div><div style="font-size:9px;color:#8892b0;font-weight:700;text-transform:uppercase;margin-top:2px">Protein</div></div>
        <div><div style="font-size:18px;font-weight:800;color:#FF9500">${deficit?'Low':'High'}</div><div style="font-size:9px;color:#8892b0;font-weight:700;text-transform:uppercase;margin-top:2px">Carbs</div></div>
        <div><div style="font-size:18px;font-weight:800;color:#1D9E75">${deficit?'—'+deficit:surplus?'+'+surplus:'0'}</div><div style="font-size:9px;color:#8892b0;font-weight:700;text-transform:uppercase;margin-top:2px">vs TDEE</div></div>
      </div>
    </div>`;

  // Rules
  html += `
    <div style="background:rgba(79,110,247,0.06);border:1px solid rgba(79,110,247,0.2);border-radius:14px;padding:14px;margin-bottom:14px">
      <div style="font-size:11px;font-weight:800;color:#4f6ef7;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">📋 Key Rules</div>
      ${plan.rules.map(r=>`<div style="font-size:12px;color:#4a5578;padding:3px 0;display:flex;gap:6px"><span style="color:#4f6ef7;flex-shrink:0">→</span>${r}</div>`).join('')}
    </div>`;

  // Meals
  const mealTypes = ['breakfast','lunch','dinner','snacks'];
  const mealIcons = {breakfast:'🌅',lunch:'☀️',dinner:'🌙',snacks:'🍎'};
  mealTypes.forEach(mt => {
    const meals = plan.meals[mt] || [];
    html += `
      <div style="margin-bottom:14px">
        <div style="font-size:13px;font-weight:800;color:#0f1729;margin-bottom:8px">${mealIcons[mt]} ${mt.charAt(0).toUpperCase()+mt.slice(1)} Options</div>
        ${meals.map((m,i)=>`
        <div style="background:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.9);border-radius:14px;padding:13px;margin-bottom:8px;box-shadow:0 2px 8px rgba(0,0,0,0.06)">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px">
            <div style="font-size:13px;font-weight:700;color:#0f1729">${m.name}</div>
            <div style="font-size:11px;color:#4f6ef7;font-weight:800;flex-shrink:0;margin-left:8px">${m.cals} kcal</div>
          </div>
          <div style="font-size:11px;color:#8892b0;margin-bottom:7px">${m.desc}</div>
          <div style="display:flex;gap:10px">
            <span style="font-size:10px;color:#ef4444;font-weight:700">P: ${m.protein}g</span>
            <span style="font-size:10px;color:#f59e0b;font-weight:700">C: ${m.carbs}g</span>
            <span style="font-size:10px;color:#10b981;font-weight:700">F: ${m.fat}g</span>
          </div>
        </div>`).join('')}
      </div>`;
  });

  // Tips
  html += `
    <div style="background:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.9);border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(0,0,0,0.06)">
      <div style="font-size:11px;font-weight:800;color:#f59e0b;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">💡 Expert Tips</div>
      ${plan.tips.map(t=>`<div style="font-size:12px;color:#4a5578;padding:5px 0;border-bottom:1px solid rgba(200,210,240,0.3);font-weight:500">${t}</div>`).join('')}
    </div>
  </div>`;

  c.innerHTML = html;
}

function switchDietType(type) {
  if (typeof profile !== 'undefined') {
    profile.dietType = type;
    if (typeof sched === 'function') sched();
    renderDietView('vDiet', profile);
  }
}
