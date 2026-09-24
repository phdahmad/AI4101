/* =========================================================
   Course Content — Artificial Intelligence Principles (AI4101)
   Style: plain-language first, formalism second.
   Aligned with the official course specification (7 topics, 60 contact hours)
   and Russell & Norvig, Artificial Intelligence: A Modern Approach, 4th ed.
   ========================================================= */

const COURSE_CONTENT = [


  // ==================== MODULE 1 ====================
  {
    id: 1,
    title: "Introduction to Artificial Intelligence",
    subtitle: "Concepts, Domains, and Applications",
    shortDesc: "What people mean by \"intelligent\", what this field actually builds, and the responsibility that comes with it.",
    hours: 4,
    story: "Before we write a single algorithm, we should agree on what we are trying to build. This module is the map of the whole course: what AI means, where it came from, what it can and cannot do today, and what we owe the people who will use our systems.",
    objectives: [
      "Describe what makes a system \"artificially intelligent\", and recognise one when you see it.",
      "Distinguish an agent from an intelligent agent, and give an example of each.",
      "Name the main areas of AI and give a real application for each.",
      "Discuss the responsibilities that come with building systems whose predictions and decisions affect people."
    ],
    collapseTerms: true,
    terms: [
      { term: "Artificial Intelligence (AI)", meaning: "A branch of Computer Science concerned with building systems that perform tasks associated with intelligence. This course emphasises the rational-agent view: systems that perceive their environment, make decisions, and act to achieve goals." },
      { term: "Agent", meaning: "A system that perceives its environment and acts upon that environment. A thermostat, an automatic door, a robot, or a program that acts on websites, files, or people can all be agents." },
      { term: "Environment", meaning: "What lies outside the agent and can affect it or be affected by its actions: a room or a road for a robot; websites, files, databases, other programs, or people for a software agent." },
      { term: "Intelligent agent", meaning: "An agent that perceives its environment, makes decisions, and takes actions to achieve goals." },
      { term: "Rational", meaning: "Choosing the action expected to produce the best outcome, given the information available to the agent. Rational does not mean perfect, and it does not mean always successful." },
      { term: "Turing test", say: "TOO-ring", meaning: "A test proposed by Alan Turing in 1950: a judge exchanges written messages with a hidden human and a hidden machine. If the judge cannot reliably tell which is which, the machine passes." },
      { term: "Machine Learning (ML)", meaning: "A subfield of AI in which systems learn patterns from data to improve at a task, rather than relying only on explicitly programmed rules." },
      { term: "Deep Learning", meaning: "A subfield of machine learning based on neural networks with multiple layers that learn representations from data." },
      { term: "Generative AI", say: "GenAI", meaning: "An area of AI focused on generating new content — text, images, audio, video, or code — from patterns learned in data." },
      { term: "Expert system", meaning: "An AI system that uses knowledge and rules collected from human experts to reason about problems in one specific domain." },
      { term: "NLP", say: "Natural Language Processing", meaning: "A subfield of AI concerned with enabling computers to process, understand, and generate human language, in text and in speech — including Arabic." },
      { term: "AI winter", meaning: "A period of sharply reduced interest, investment, and funding in AI, following unmet expectations and limits in the technology of the time." },
      { term: "AGI", say: "Artificial General Intelligence", meaning: "Intelligence across tasks, comparable to a human's. No system today is agreed to have it." },
      { term: "LLM", say: "Large Language Model", meaning: "A model trained on very large amounts of text, able to read and generate language. It is the engine inside most of today's AI assistants." },
      { term: "Narrow AI", meaning: "AI designed to perform specific tasks or work within a limited domain, rather than having general-purpose intelligence comparable to a human." },
      { term: "Bias", meaning: "A systematic pattern in a system that can lead to unfair or unequal outcomes. It can arise from the data, the system design, the objective it was given, or the way it is used." }
    ],
    sections: [
      {
        title: "What is Artificial Intelligence?",
        body: `
<p>Ask ten researchers to define artificial intelligence and you will get ten answers. This is not because the field is confused. It is because <em>intelligence</em> itself is hard to define.</p>

<div class="analogy">
  <span class="analogy-label">Think about a calculator and a mobile map app</span>
  <p>A calculator multiplies faster than any human. Nobody calls it intelligent.</p>
  <p>Your map app chooses a route around a traffic jam on King Abdulaziz Road, changes its mind when an accident appears, and gets you home. We are happy to call that intelligent.</p>
</div>

<p>So the difference is not speed, and it is not the amount of calculation. The calculator wins on both. The difference is what the map app <em>does</em> with the situation it finds itself in.</p>

<div class="definition">
  <p><strong>Artificial Intelligence (AI)</strong> is a branch of <strong>Computer Science</strong> concerned with building systems that perform tasks associated with intelligence: perceiving, reasoning, solving problems, understanding language, making decisions, and acting in an environment.</p>
</div>

<p>There is no single agreed definition. Russell and Norvig organise the main ones around two questions: does the system <em>think</em> or <em>act</em>? And does it do so <em>like a human</em> or <em>rationally</em>? (Section 1.7 lays the four out, for those who want them.)</p>

<p>In this course we place particular emphasis on the <strong>rational-agent view</strong>: intelligent systems perceive their environment, make decisions, and act to achieve goals. It is the foundation of most of what you will study here — search, optimization, games, constraint solving, and logical reasoning — and it remains the frame for modern AI agents too.</p>

<div class="aha">
  <div class="aha-label">The idea behind everything in this course</div>
  <p>An intelligent system can <strong>perceive</strong> a situation, <strong>consider what to do</strong>, and <strong>take action</strong> towards a goal. Hold on to those three words. The next section turns them into the one technical term this whole course is built on.</p>
</div>

<p class="reading-time">5 min read</p>
        `
      },

      {
        title: "Agents, and intelligent agents",
        body: `
<p>To understand AI from the agent perspective, we first need to understand what an agent is.</p>

<div class="definition">
  <p>An <strong>agent</strong> is a system that <strong>perceives</strong> its environment and <strong>acts</strong> upon that environment.</p>
</div>

<p>The <strong>environment</strong> is what lies outside the agent and can affect it or be affected by its actions. For a robot, this may be a room or a road. For a software agent, it may be websites, files, databases, other programs, or people.</p>

<div class="callout note">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">Where is the line?</div>
    <p>A spreadsheet formula that only recalculates values inside its own sheet is better viewed here as a <strong>computation</strong>, not an agent. If the same spreadsheet watches for new data and sends an email when a condition is met, we can view it as an agent interacting with an external environment.</p>
    <p>Calling a system an agent is a way of looking at it — a useful perspective for understanding what the system does.</p>
  </div>
</div>

<div class="diagram">
  <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">AN AGENT AND ITS ENVIRONMENT</text>

    <rect x="255" y="75" width="190" height="72" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2.5"/>
    <text x="350" y="118" text-anchor="middle" font-size="16" fill="var(--accent)" font-weight="700">AGENT</text>

    <rect x="40" y="75" width="150" height="72" rx="10" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="2"/>
    <text x="115" y="118" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="600">Environment</text>

    <rect x="510" y="75" width="150" height="72" rx="10" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="2"/>
    <text x="585" y="118" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="600">Environment</text>

    <path d="M195 111 H 248" stroke="var(--teal)" stroke-width="2.5" fill="none" marker-end="url(#a1)"/>
    <text x="221" y="100" text-anchor="middle" font-size="12" fill="var(--teal)" font-weight="700">perceive</text>

    <path d="M452 111 H 505" stroke="var(--gold)" stroke-width="2.5" fill="none" marker-end="url(#a2)"/>
    <text x="478" y="100" text-anchor="middle" font-size="12" fill="var(--gold)" font-weight="700">act</text>

    <path d="M585 152 V 180 H 115 V 152" fill="none" stroke="var(--rule)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#a3)"/>
    <text x="350" y="202" text-anchor="middle" font-size="11" fill="var(--ink-soft)">the action changes the environment, which the agent then perceives again</text>

    <defs>
      <marker id="a1" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--teal)"/></marker>
      <marker id="a2" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--gold)"/></marker>
      <marker id="a3" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--ink-mute)"/></marker>
    </defs>
  </svg>
  <div class="diagram-caption">Notice what the definition does not say: nothing about robots, code, or hardware.</div>
</div>

<h3>Is every agent intelligent?</h3>

<p><strong>No.</strong></p>

<p>A door that opens when someone steps in front of it perceives and acts. It is an agent. But it makes no choice — one input, one fixed response, forever. Nothing in it decides anything.</p>

<div class="definition">
  <p>An <strong>intelligent agent</strong> is a system that <strong>perceives</strong> its environment, <strong>makes decisions</strong>, and <strong>takes actions</strong> to achieve <strong>goals</strong>.</p>
</div>

<div class="diagram">
  <svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">WHAT GETS ADDED</text>

    <text x="45" y="72" font-size="12" fill="var(--ink-soft)" font-weight="700">Agent</text>
    <rect x="150" y="50" width="120" height="42" rx="8" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="2"/>
    <text x="210" y="76" text-anchor="middle" font-size="13" fill="var(--ink)">Perceive</text>
    <path d="M278 71 H 318" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#b1)"/>
    <rect x="325" y="50" width="120" height="42" rx="8" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="2"/>
    <text x="385" y="76" text-anchor="middle" font-size="13" fill="var(--ink)">Act</text>

    <line x1="40" y1="112" x2="660" y2="112" stroke="var(--rule)"/>

    <text x="45" y="165" font-size="12" fill="var(--accent)" font-weight="700">Intelligent</text>
    <text x="45" y="181" font-size="12" fill="var(--accent)" font-weight="700">agent</text>

    <rect x="150" y="142" width="96" height="42" rx="8" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="2"/>
    <text x="198" y="168" text-anchor="middle" font-size="13" fill="var(--ink)">Perceive</text>
    <path d="M252 163 H 282" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#b1)"/>

    <rect x="289" y="138" width="106" height="50" rx="8" fill="var(--accent)" stroke="var(--accent)" stroke-width="2"/>
    <text x="342" y="169" text-anchor="middle" font-size="14" fill="var(--bg)" font-weight="700">Decide</text>
    <path d="M401 163 H 431" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#b1)"/>

    <rect x="438" y="142" width="86" height="42" rx="8" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="2"/>
    <text x="481" y="168" text-anchor="middle" font-size="13" fill="var(--ink)">Act</text>
    <path d="M530 163 H 560" stroke="var(--gold)" stroke-width="2.5" marker-end="url(#b2)"/>

    <rect x="567" y="138" width="96" height="50" rx="8" fill="none" stroke="var(--gold)" stroke-width="3"/>
    <text x="615" y="169" text-anchor="middle" font-size="14" fill="var(--gold)" font-weight="700">Goal</text>

    <text x="350" y="216" text-anchor="middle" font-size="11" fill="var(--ink-soft)">two words make the difference: it <tspan font-weight="700" fill="var(--accent)">decides</tspan>, and it decides towards a <tspan font-weight="700" fill="var(--gold)">goal</tspan></text>

    <defs>
      <marker id="b1" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--ink-mute)"/></marker>
      <marker id="b2" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--gold)"/></marker>
    </defs>
  </svg>
  <div class="diagram-caption">Perceive and act make an agent. Deciding, towards a goal, makes it intelligent.</div>
</div>

<div class="callout note">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">When do we call an agent intelligent?</div>
    <p>Not every agent needs to be intelligent. Some agents simply follow fixed rules; others must choose their actions according to the situation and the goal. Both are agents, and both are useful — this course focuses on the second kind.</p>
    <p>A quick test you can apply to any system: <strong>does it choose between options in order to reach a goal?</strong> Module 2 makes the idea of choosing <em>well</em> precise, under the name <em>rationality</em>.</p>
  </div>
</div>

<h3>Back to our definition</h3>

<p>In section 1.1 we said that this course places particular emphasis on the <strong>rational-agent view</strong>. At that point the words were not yet available. Now that <em>agent</em>, <em>intelligent agent</em>, and <em>goal</em> each have a precise meaning, we can state it properly:</p>

<div class="definition">
  <p><strong>Artificial Intelligence (AI)</strong> is a field of <strong>Computer Science</strong> concerned with the study and design of <strong>intelligent agents</strong> &mdash; systems that <strong>perceive</strong> their environment, <strong>make decisions</strong>, and <strong>take actions</strong> to achieve <strong>goals</strong>.</p>
</div>

<p>This is the same field described in section 1.1, said in the language of this course. Every word in it is now a term you know — which is exactly why we took this order.</p>

<div class="callout note">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">What about learning?</div>
    <p>Some intelligent agents also <strong>learn</strong> — they improve their own decisions from experience. Learning is a powerful capability an agent may have; it is not part of what makes it an agent. Most of the systems in this course decide very well and never learn anything: the route planner in Module 3, the game player in Module 5, the timetable solver in Module 6. Module 2 shows exactly where learning fits: not as a separate way of choosing actions, but as an ability that can be added to any agent design.</p>
  </div>
</div>

<div class="aha">
  <div class="aha-label">One sentence to carry through the course</div>
  <p>An agent perceives and acts. An intelligent agent perceives, decides, and acts towards a goal. AI studies and designs intelligent agents. If you remember nothing else from this module, remember that.</p>
</div>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "Agents come in different forms",
        body: `
<p>The definition said nothing about hardware. That was deliberate — an agent does not have to be a robot, and the same three words describe very different systems.</p>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">💻</span>
      <strong>Software agent</strong>
      <p>Acts inside a digital environment. A fraud checker perceives a transaction, decides whether it fits your normal behaviour, and acts by approving it or asking you to confirm.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🤖</span>
      <strong>Robot agent</strong>
      <p>Acts in the physical world. A warehouse robot perceives shelves and obstacles through its sensors, decides on a route, and acts by moving.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🗣️</span>
      <strong>LLM-based agent</strong>
      <p>Uses a language model to read a request, decide which steps and which tools or APIs are needed, and carry them out — searching, writing a file, sending a message.</p>
    </div>
  </div>
</div>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">From classical agents to AI agents today</div>
    <p>The idea of an agent is not new. What has changed is how one can be built. Classical agents relied on rules, search, planning, and logic. A modern AI agent may combine a language model with memory, tools, retrieval, planning, and feedback.</p>
    <p>The technology changed; the question did not: <strong>given what the agent knows, what should it do next to reach its goal?</strong> That question is what this course is about.</p>
  </div>
</div>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">Automation is not the same as an agent</div>
    <p>Workflow platforms (Zapier, Make, n8n and others) are a common place to build systems that look intelligent. But a workflow with fixed steps — "when a form arrives, add a row, then send an email" — perceives and acts without ever deciding. It is an agent, not an intelligent one. A fixed workflow follows the steps you designed in advance; an intelligent agent chooses what to do next from its goal and the situation in front of it.</p>
  </div>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>Which of these are agents, and which of those deserve to be called intelligent? (a) A washing machine that weighs the clothes and picks a water level. (b) A spreadsheet of student grades. (c) A map app rerouting around traffic.</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>(a)</strong> An agent, but not an intelligent one: it perceives weight and acts on the water valve, yet it reads one number off a fixed table and never weighs alternatives. <strong>(b)</strong> Not an agent at all: it stores data and never acts on any environment. <strong>(c)</strong> An agent, and clearly an intelligent one: it perceives changing traffic, decides between routes whose outcomes it cannot fully predict, and acts towards the goal of getting you home.</p>
    <p>A useful habit with borderline cases: ask what the system would do if the situation changed. If the answer is "exactly the same thing", there was no decision in it.</p>
  </details>
</div>

<p class="reading-time">4 min read</p>
        `
      },

      {
        title: "A very short history: hope, winter, hope again",
        body: `
<p>AI is about seventy years old. Its history is a repeating cycle: a breakthrough, big promises, disappointment, then a quiet period of real work.</p>

<ol class="steps">
  <li><strong>1950 — the question</strong><p>Alan Turing asks whether machines can think, and proposes his test.</p></li>
  <li><strong>1956 — the field gets a name</strong><p>A summer workshop at Dartmouth College gives "artificial intelligence" its name. The mood is very optimistic.</p></li>
  <li><strong>1956&ndash;1974 — early success, then the first winter</strong><p>Programs prove theorems and play simple games. But they fail on anything realistic, because the search space explodes — exactly the problem you will meet in Module 3. Funding collapses.</p></li>
  <li><strong>1980s — expert systems</strong><p>Industry buys systems full of human expert rules. They work well in narrow areas, but they are expensive to update and cannot learn. A second winter follows.</p></li>
  <li><strong>1990s&ndash;2000s — learning from data</strong><p>The field turns to statistics and machine learning. In 1997 Deep Blue beats the world chess champion — using search, with alpha-beta pruning, which is Module 5.</p></li>
  <li><strong>2012 onwards — deep learning</strong><p>Big data, powerful GPUs, and deep neural networks transform vision and speech.</p></li>
  <li><strong>2017 onwards — the Transformer and large language models</strong><p>A new architecture makes models that read and write language at a level that surprised everyone, including the researchers — the first widely used systems that <strong>generate</strong> language rather than only classify it.</p></li>
</ol>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">What this history teaches you</div>
    <p>AI winters had several causes: limited computing power, scarce data, problems that proved harder than expected, and expectations that exceeded what the systems could actually deliver. One pattern is worth noticing: success in a narrow domain can raise expectations of much broader intelligence.</p>
    <p>The lesson is simple: <strong>doing one task well is not general intelligence.</strong></p>
    <p>So be precise about what a system can do, what it cannot do, and the conditions it needs. Say "this model recognises five diseases across three plant species from clear images", not "our AI diagnoses plant diseases" — good practice means being clear about capabilities <em>and</em> limitations.</p>

    <div class="ar-note" dir="rtl" lang="ar">
      <span class="ar-label">بالعربية</span>
      <p>كان لفترات تراجع الذكاء الاصطناعي (<span class="en">AI Winters</span>) أسبابٌ متعدّدة، منها محدودية القدرة الحاسوبية، وقلّة البيانات، ومشكلاتٌ تبيّن أنها أصعب مما كان متوقّعاً، إضافةً إلى توقّعاتٍ تجاوزت ما كانت الأنظمة قادرةً فعلياً على تقديمه. وهناك نمطٌ يستحقّ الانتباه: النجاح في نطاقٍ ضيّق قد يرفع التوقّعات إلى ذكاءٍ أوسع بكثير.</p>
      <p>والدرس بسيط: <strong>إتقان مهمّة واحدة لا يعني امتلاك ذكاءٍ عام.</strong></p>
      <p>لذلك كن دقيقاً عند وصف قدرات أيّ نظام: وضّح ما الذي يستطيع فعله، وما الذي لا يستطيع فعله، والظروف التي يحتاجها ليعمل كما هو متوقّع. فبدلاً من القول: «نظام الذكاء الاصطناعي لدينا يشخّص أمراض النباتات»، قل: «يتعرّف هذا النموذج على خمسة أمراض في ثلاثة أنواع نباتية من صورٍ واضحة». فالممارسة الجيدة تعني الوضوح بشأن قدرات النظام وحدوده.</p>
    </div>
  </div>
</div>

<div class="aha">
  <div class="aha-label">The classical methods did not die</div>
  <p>It is easy to think that deep learning replaced everything older. It did not. Your maps app still runs search. Airline and exam schedules still run constraint solving. Chess engines still run alpha-beta. Modern systems usually combine a learned part with a classical part — which is exactly why this course teaches you the classical half properly.</p>
</div>

<p class="reading-time">5 min read</p>
        `
      },

      {
        title: "The map of the field",
        body: `
<p>AI is a broad field with several areas that often overlap. Here are the main ones you will meet in this course.</p>

<h3>Areas of AI</h3>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">🔍</span>
      <strong>Search and planning</strong>
      <p>Finding a sequence of actions that reaches a goal: routes, schedules, robot plans. Modules 3 to 6 of this course.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🧠</span>
      <strong>Knowledge and reasoning</strong>
      <p>Storing facts and deriving new ones. Expert systems and formal checking. Module 7.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">📈</span>
      <strong>Machine learning</strong>
      <p>Learning patterns from data instead of hand-written rules: predictions, recommendations, fraud detection.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🗣️</span>
      <strong>Natural language processing</strong>
      <p>Processing and generating human language. Arabic brings its own challenges: rich word forms, missing short vowels, and many dialects.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">👁️</span>
      <strong>Computer vision</strong>
      <p>Understanding images and video: medical scans, quality checks in factories, reading plate numbers.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🤖</span>
      <strong>Robotics</strong>
      <p>Agents with a body: warehouse robots, inspection drones, autonomous vehicles.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">✨</span>
      <strong>Generative AI</strong>
      <p>Generating new content — text, images, audio, video, or code — from patterns learned in data. Most of today's generative systems are built with deep learning, and the area overlaps with NLP, computer vision, and speech.</p>
    </div>
  </div>
</div>

<p class="grid-note">This course covers the first two areas — search and planning, and knowledge and reasoning. The others have their own courses in the programme.</p>

<h3>Where you can see it around you</h3>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">🕋</span>
      <strong>Hajj and Umrah operations</strong>
      <p>Crowd density analysis from cameras, and planning walking routes and time slots for very large numbers of pilgrims.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🏦</span>
      <strong>Banking</strong>
      <p>Your bank app decides in milliseconds whether a transaction looks normal for you, and asks for confirmation when it does not.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🏥</span>
      <strong>Hospitals</strong>
      <p>Vision models mark suspicious areas on X-rays so the radiologist looks there first. The doctor still decides.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🛢️</span>
      <strong>Industry and energy</strong>
      <p>Predicting when a pump or turbine will fail, so maintenance happens before the breakdown.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🎓</span>
      <strong>Universities</strong>
      <p>Building exam timetables, spotting students at risk of dropping a course, and answering admission questions automatically.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">📱</span>
      <strong>Arabic language tools</strong>
      <p>Speech recognition, translation, and assistants that must handle both formal Arabic and everyday dialect.</p>
    </div>
  </div>
</div>

<div class="definition">
  <p>Everything above is <strong>narrow AI</strong>: a system built for one job. A model that reads X-rays cannot book a flight. General intelligence across tasks — often called AGI — is a much stronger claim than doing many tasks well, and whether anything today is approaching it is still argued over.</p>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>A language model can write essays, translate between languages, and produce working code. Does doing many tasks make it general intelligence?</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>Breadth of tasks is not the same thing as general intelligence.</strong> A system trained on an enormous amount of human text can do many tasks partly because many tasks appeared in that text. That is a real change from the narrow systems of ten years ago — but it is not automatically the same kind of capability a person has.</p>
    <p>Three questions are more useful than the label itself. Can it <em>transfer</em> — meet a genuinely new kind of problem, unlike anything it was trained on, and still work it out? Can it <em>learn a new domain</em> from a handful of examples, the way you learn a new game from one explanation? Does it <em>know its own limits</em>, and say so, instead of answering confidently anyway?</p>
    <p>Researchers disagree about where today's systems sit on these three, and that disagreement is honest rather than settled. What is not in dispute is the reasoning: counting tasks is weak evidence, because it measures coverage, not capability.</p>
  </details>
</div>

<p class="reading-time">5 min read</p>
        `
      },

      {
        title: "Your responsibility when building AI systems",
        body: `
<p>You are learning to build systems that make predictions, recommendations, and decisions that can affect people. A system does not have to act on its own to change someone's life — a score, a ranking, or a suggestion is enough. That reach is what creates the duty, and this is not a side topic: it is one of the official learning outcomes of this course.</p>

<div class="analogy">
  <span class="analogy-label">Think like an engineer, not just a coder</span>
  <p>Nobody builds a bridge and says "it held in the test, let's see what happens."</p>
  <p>A coder asks: <em>does the system work?</em> An engineer also asks: <em>what could go wrong, who could be affected, and what do we do when it fails?</em></p>
  <p>When a system can affect people's lives, building it responsibly is part of the job — not something added after the code is finished.</p>
</div>

<h3>Four questions to ask about any system you build</h3>

<ol class="steps">
  <li><strong>Who could this system treat unfairly?</strong> <span class="q-tag">bias &amp; fairness</span><p>A learning system reflects the patterns in the data it was trained on — including the unfair ones. An Arabic speech model trained mostly on one dialect may perform poorly for speakers of other dialects. A hiring filter trained on past hiring repeats the past, including its mistakes. That is one form of <strong>bias</strong>. Bias can come from the data, from the way the system is designed — which features you use, how the examples are labelled, what you tell it to maximise — or from how it is later used.</p></li>
  <li><strong>Can I explain its decisions?</strong> <span class="q-tag">explainability &amp; transparency</span><p>If your system recommends denying someone a loan or a university place, that person deserves a reason — whoever signs off on the decision. "The model said so" is not a reason. Some methods are easier to <strong>interpret</strong> — logic rules and decision trees show you the path they took. Others are much harder, and then the explanation has to be designed in from the start, not added at the end.</p></li>
  <li><strong>What data am I collecting, and do I need it?</strong> <span class="q-tag">privacy &amp; data protection</span><p>Ask this before the first record is stored, not afterwards. Personal data should be collected only when it is needed, kept only as long as it is needed, and protected while you hold it. The principle has a name worth knowing: <strong>data minimisation</strong> — collect only what you actually need. Collecting "everything, just in case" is a risk you create for your users and then carry yourself.</p></li>
  <li><strong>What happens when the system gets it wrong?</strong> <span class="q-tag">safety, accountability &amp; human oversight</span><p>Every system can fail. <strong>Design for failure</strong>: keep a human in the loop for high-impact decisions, give people a clear way to appeal, say plainly who is accountable, and monitor the system after launch instead of assuming the test results hold forever.</p></li>
</ol>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">Automation can amplify harm</div>
    <p>One unfair decision affects one person. The same flawed rule inside a system that handles fifty thousand applications is applied fifty thousand times — identically, quickly, and often with nobody noticing.</p>
    <p>Automation does not necessarily create the problem. What it can change is scale and consistency: the same flawed rule is applied repeatedly, quickly, and across thousands of cases, in exactly the same way every time.</p>
  </div>
</div>

<div class="aha">
  <div class="aha-label">The objective you choose shapes the behaviour you get</div>
  <p>A system pursues the objective it was actually given, not the one you had in mind. If the measure does not capture what you really want, the behaviour will not either. Ask a delivery system to minimise driving time and it may route drivers through school zones at closing time. Ask a content system to maximise watching time and it may learn that anger keeps people watching. This is the deepest lesson in this course, and you will meet it again in Module 2 under the name <em>performance measure</em>.</p>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>A university builds a model that predicts which applicants will succeed, trained on the records of past students. Name two things that could go wrong.</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>One:</strong> the model repeats the past. If a certain type of student was rarely admitted before, there is little data about them and the model will rate them badly — not because they would fail, but because it never saw them succeed. <strong>Two:</strong> there is no explanation. A rejected applicant cannot be told why, and the university cannot check whether the reason is legitimate. A third answer worth full marks: predicting "success" depends on how success is defined — first-year grades, graduation, or later employment — and each definition produces a different model.</p>
  </details>
</div>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "Four ways people define AI",
        optional: true,
        body: `
<div class="callout note">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">This section is optional</div>
    <p>Background reading, not part of the required material and not examined. It rounds out the picture of how the field defines itself, and you can come back to it at any time. Nothing later in the course depends on it.</p>
  </div>
</div>

<p>The rational-agent view you met in sections 1.1 and 1.2 — AI as the study of intelligent agents that perceive, decide, and act towards goals — is one of several. The many definitions in textbooks fall into a 2×2 box, and the two questions are: do we care about <em>thinking</em> or about <em>acting</em>? And do we compare the system to <em>a human</em> or to <em>the ideal answer</em>?</p>

<div class="diagram">
  <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">FOUR DEFINITIONS OF AI</text>

    <text x="250" y="60" text-anchor="middle" font-size="13" fill="var(--accent)" font-weight="700">THINKING</text>
    <text x="500" y="60" text-anchor="middle" font-size="13" fill="var(--accent)" font-weight="700">ACTING</text>
    <text x="80" y="125" text-anchor="middle" font-size="12" fill="var(--gold)" font-weight="700">Like a human</text>
    <text x="80" y="230" text-anchor="middle" font-size="12" fill="var(--gold)" font-weight="700">Rationally</text>

    <rect x="140" y="75" width="220" height="90" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="250" y="105" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="600">Cognitive modelling</text>
    <text x="250" y="128" text-anchor="middle" font-size="11" fill="var(--ink-soft)">Copy how humans reason.</text>
    <text x="250" y="146" text-anchor="middle" font-size="11" fill="var(--ink-mute)">Used in psychology research.</text>

    <rect x="390" y="75" width="220" height="90" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="500" y="105" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="600">Turing test</text>
    <text x="500" y="128" text-anchor="middle" font-size="11" fill="var(--ink-soft)">Behave so a judge cannot tell</text>
    <text x="500" y="146" text-anchor="middle" font-size="11" fill="var(--ink-soft)">machine from human.</text>

    <rect x="140" y="180" width="220" height="90" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="250" y="210" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="600">Laws of thought</text>
    <text x="250" y="233" text-anchor="middle" font-size="11" fill="var(--ink-soft)">Reason correctly, using logic</text>
    <text x="250" y="251" text-anchor="middle" font-size="11" fill="var(--ink-soft)">and probability.</text>

    <rect x="390" y="180" width="220" height="90" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
    <text x="500" y="210" text-anchor="middle" font-size="12" fill="var(--accent)" font-weight="700">Rational agent ★</text>
    <text x="500" y="233" text-anchor="middle" font-size="11" fill="var(--ink-soft)">Do the thing expected to give</text>
    <text x="500" y="251" text-anchor="middle" font-size="11" fill="var(--ink-soft)">the best result. This course.</text>
  </svg>
  <div class="diagram-caption">Our definition sits in the bottom-right box: an agent that acts to achieve its goals as well as it can.</div>
</div>

<div class="aha">
  <div class="aha-label">Why "acting rationally" won</div>
  <p>Copying human thinking is a fine goal for psychology, but a poor engineering target: we do not fully know how humans think, and humans are often wrong. "Do the action expected to give the best result" can be measured, compared, and improved. That is why every module in this course ends up asking the same question — what should the agent <em>do</em> next?</p>
</div>

<h3>The Turing test, and why we do not chase it</h3>

<p>In 1950 Alan Turing suggested a test: a judge types questions to a hidden human and a hidden machine. If the judge cannot reliably tell which is which, the machine passes. It is a famous idea and a useful thought experiment.</p>

<p>But engineers rarely aim at it. Passing the test rewards <em>imitating a human</em>, including human mistakes and human slowness. A medical system that spots a tumour better than any doctor would fail the Turing test badly — and would still be excellent AI.</p>

<p class="reading-time">5 min read</p>
        `
      },
    ],
    cheatsheet: [
      {
        group: "The mental model to memorise",
        items: [
          "An <strong>agent</strong> perceives and acts",
          "<strong>Environment</strong> — what lies outside the agent and can affect it or be affected by its actions",
          "An <strong>intelligent agent</strong> chooses its actions towards a <strong>goal</strong>",
          "<strong>AI</strong> is the branch of Computer Science that builds systems doing tasks associated with intelligence",
          "Several definitions exist; this course emphasises the <strong>rational-agent view</strong>",
          "Quick test: does the system <strong>choose between options in order to reach a goal?</strong>",
          "How to judge whether it chooses <em>well</em> — that is rationality, in Module 2",
          "<strong>Learning</strong> is a capability some agents have — not part of the definition of an agent"
        ]
      },
      {
        group: "Forms an agent can take",
        items: [
          "<strong>Software agent</strong> — acts in a digital environment",
          "<strong>Robot agent</strong> — acts in the physical world",
          "<strong>LLM-based agent</strong> — decides which steps and tools to use, then carries them out",
          "A fixed automation workflow perceives and acts, but never decides"
        ]
      },
      {
        group: "History in six dates",
        items: [
          "<strong>1950</strong> — Turing asks if machines can think",
          "<strong>1956</strong> — Dartmouth workshop names the field",
          "<strong>1970s &amp; late 1980s</strong> — two AI winters",
          "<strong>1980s</strong> — expert systems in industry",
          "<strong>1997</strong> — Deep Blue beats the chess champion (using search)",
          "<strong>2012 / 2017</strong> — deep learning, then the Transformer"
        ]
      },
      {
        group: "Areas of AI",
        items: [
          "Search and planning · knowledge and reasoning",
          "Machine learning · natural language processing",
          "Computer vision · robotics",
          "Areas overlap — generative AI cuts across NLP, vision, and speech",
          "Every application in this module is <strong>narrow AI</strong> — each built for one job"
        ]
      },
      {
        group: "Responsibility checklist",
        items: [
          "Who could this system treat unfairly? (bias: data, design, or use)",
          "Can I explain a single decision to the person affected?",
          "Do I really need the personal data I am collecting?",
          "What is the plan when the system is wrong?",
          "Remember: the system pursues the objective you wrote, not the one you meant"
        ]
      },
      {
        group: "Mistakes that cost marks",
        items: [
          "Saying AI and machine learning are the same thing — ML is one part of AI",
          "Saying deep learning replaced classical AI — search and logic still run everywhere",
          "Calling bias a coding bug — it can come from the data, the design, or how the system is used",
          "Saying every agent is intelligent, or that an agent must be a robot",
          "Calling every program that turns input into output an agent — a formula that only recalculates its own sheet is a <strong>computation</strong>"
        ]
      }
    ],
    resources: [
      { type: "video", title: "Introduction and Scope — Lecture 1, MIT 6.034", author: "Patrick Winston, MIT — what the field is, and its history", url: "https://www.youtube.com/watch?v=TjZBTDzGeGg" },
      { type: "video", title: "Search — Lecture 0, CS50's Introduction to AI with Python", author: "Brian Yu, Harvard — the first 15 minutes define AI clearly", url: "https://www.youtube.com/watch?v=WbzNRTTrX0g" },
      { type: "docs", title: "Artificial Intelligence: A Modern Approach, 4th ed. — Chapter 1", author: "Russell & Norvig — the course textbook", url: "https://aima.cs.berkeley.edu/" },
      { type: "docs", title: "MIT 6.034 Artificial Intelligence — all lectures and notes", author: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/resources/lecture-videos/" }
    ]
  },

  // ==================== MODULE 2 ====================
  {
    id: 2,
    title: "Intelligent Agents and Their Environments",
    subtitle: "Agent Designs and Task Environments",
    shortDesc: "The one idea the whole course is built on: something that perceives, decides, and acts.",
    hours: 8,
    story: "Everything in AI is an agent inside an environment. Once you can say \"this is what the agent sees, this is what it can do, and this is how we measure success\", you can choose the right technique for the job. This module gives you that vocabulary, and you will use it in every module after it.",
    objectives: [
      "Define an agent, its percepts, and its agent function.",
      "Explain rationality, and why it depends on the performance measure and not on luck.",
      "Describe a task using PEAS.",
      "Classify a task environment along six properties, and say why each one matters.",
      "Compare the five agent designs and choose one for a given task."
    ],
    terms: [
      { term: "Agent", meaning: "A system that perceives its environment through sensors and acts upon it through actuators. Same definition as Module 1, now with the machinery named." },
      { term: "Percept", meaning: "What the agent perceives from its environment at one moment — a camera frame, a temperature reading, a click." },
      { term: "Percept sequence", meaning: "Everything the agent has perceived since it was switched on." },
      { term: "Agent function", meaning: "The rule that maps any percept sequence to an action. It is the description of behaviour, on paper." },
      { term: "Agent program", meaning: "The actual code that runs inside the machine and produces that behaviour." },
      { term: "Sensor", meaning: "The part through which the agent perceives its environment: a camera, a thermometer, a microphone — or, for a software agent, an incoming message or a web page it reads." },
      { term: "Action", meaning: "What the agent does to its environment through its actuators: opening a valve, turning a wheel, sending a message, booking a room." },
      { term: "Actuator", say: "AK-choo-ay-tor", meaning: "The part that carries out an action: a motor, a valve, a screen message, an API call." },
      { term: "Rational agent", meaning: "An agent that chooses, for each percept sequence, the action expected to maximise its performance measure, given what it has perceived and what it knows. Rational does not mean perfect or always successful." },
      { term: "Autonomy", meaning: "How far an agent relies on its own percepts and experience, rather than only on the knowledge its designer built in. Learning is what makes it possible." },
      { term: "Performance measure", meaning: "How the agent's success is evaluated. It is rarely a single number: some parts are hard requirements, some are things to improve, and some pull against each other. The agent optimises exactly what you write." },
      { term: "Environment", meaning: "The same idea as in Module 1 — what lies outside the agent and can affect it or be affected by its actions." },
      { term: "PEAS", meaning: "The four-part checklist for describing an agent's task environment: Performance measure, Environment, Actuators, Sensors." },
      { term: "Task environment", meaning: "The whole PEAS description of a task — the performance measure, the environment, the actuators and the sensors taken together. The environment alone is one of its four parts." },
      { term: "Fully observable", meaning: "The agent can perceive, at each step, everything it needs to make a decision. Otherwise the environment is partially observable." },
      { term: "Deterministic", say: "de-TER-min-istic", meaning: "The next state is decided completely by the current state and the action. Otherwise it is stochastic (has randomness)." },
      { term: "Episodic", say: "eppi-SOD-ic", meaning: "Each decision stands alone and does not affect the next one. Otherwise the task is sequential." },
      { term: "Static", meaning: "The environment does not change while the agent is thinking. Otherwise it is dynamic. If the world waits but the clock does not — chess with a clock — it is semi-dynamic." },
      { term: "Discrete", meaning: "States and actions come in countable steps, as in chess. Otherwise the environment is continuous, as with steering angle and speed." },
      { term: "Single-agent", meaning: "No other agent's actions affect what happens. Otherwise it is multi-agent, and the other agents may cooperate, compete, or both — as other drivers do in traffic." },
      { term: "Condition–action rule", meaning: "A rule that links a situation to an action: if the soil is dry, then open the valve." },
      { term: "Simple reflex agent", meaning: "Chooses an action from the current percept only, using condition–action rules." },
      { term: "Model-based reflex agent", meaning: "Keeps an internal state — a picture of the parts of the world it cannot perceive right now — and uses it with condition–action rules." },
      { term: "Goal-based agent", meaning: "Chooses actions by asking which ones lead towards a goal. This is where search and planning become useful." },
      { term: "Utility-based agent", say: "yoo-TIL-ity", meaning: "Uses a utility function to compare outcomes, so it can weigh goals against each other and trade them off." },
      { term: "Utility function", meaning: "A function that assigns values to outcomes so the agent can compare them. It should agree with the performance measure, but it is not the same thing. Under uncertainty, the agent chooses the action with the best expected utility." },
      { term: "Learning agent", meaning: "Improves its own behaviour over time from experience and feedback. Learning is not a separate way of choosing actions: it can be added to any of the other designs." },
      { term: "Agentic AI", meaning: "A recent industry label, not a sixth design: AI systems that pursue goals with little step-by-step human direction — deciding steps, using tools, observing results, and deciding again. The LLM-based agent of Module 1 is one example." }
    ],
    sections: [
      {
        title: "What exactly is an agent?",
        body: `
<p>You met this word in Module 1: an agent perceives its environment and acts upon it. That was the idea. This module makes it precise enough to build with — and adds the vocabulary you will use for the rest of the course.</p>

<div class="definition">
  <p>An <strong>agent</strong> is a system that perceives its environment through <strong>sensors</strong> and acts upon it through <strong>actuators</strong>. One input at one moment is a <strong>percept</strong>. Everything it has perceived so far is the <strong>percept sequence</strong>.</p>
</div>

<div class="analogy">
  <span class="analogy-label">A smart irrigation controller on a farm in Al-Kharj</span>
  <p><em>Sensors:</em> soil moisture probes, a temperature sensor, the weather forecast. <em>Actuators:</em> the valves that open and close each irrigation line. <em>Percept:</em> "soil at line 3 is at 18% moisture, air is 41 degrees." <em>Action:</em> "open valve 3 for twelve minutes."</p>
  <p>The farmer is also an agent in the same environment, with eyes as sensors and hands as actuators.</p>
</div>

<div class="diagram">
  <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">THE AGENT LOOP</text>

    <rect x="60" y="55" width="240" height="160" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
    <text x="180" y="85" text-anchor="middle" font-size="14" fill="var(--accent)" font-weight="700">AGENT</text>
    <rect x="95" y="105" width="170" height="38" rx="6" fill="var(--bg-elev)" stroke="var(--rule)"/>
    <text x="180" y="129" text-anchor="middle" font-size="12" fill="var(--ink)">agent program</text>
    <text x="180" y="170" text-anchor="middle" font-size="11" fill="var(--ink-soft)">decides: what do I do now,</text>
    <text x="180" y="188" text-anchor="middle" font-size="11" fill="var(--ink-soft)">given everything I have perceived?</text>

    <rect x="400" y="55" width="240" height="160" rx="10" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="2"/>
    <text x="520" y="85" text-anchor="middle" font-size="14" fill="var(--ink)" font-weight="700">ENVIRONMENT</text>
    <text x="520" y="120" text-anchor="middle" font-size="11" fill="var(--ink-soft)">the farm, the road, the game,</text>
    <text x="520" y="138" text-anchor="middle" font-size="11" fill="var(--ink-soft)">the database, the other players</text>

    <path d="M400 105 H 305" stroke="var(--teal)" stroke-width="2.5" fill="none" marker-end="url(#ag1)"/>
    <text x="352" y="98" text-anchor="middle" font-size="11" fill="var(--teal)" font-weight="600">percepts</text>
    <text x="352" y="117" text-anchor="middle" font-size="10" fill="var(--ink-mute)">(sensors)</text>

    <path d="M300 175 H 395" stroke="var(--gold)" stroke-width="2.5" fill="none" marker-end="url(#ag2)"/>
    <text x="350" y="168" text-anchor="middle" font-size="11" fill="var(--gold)" font-weight="600">actions</text>
    <text x="350" y="192" text-anchor="middle" font-size="10" fill="var(--ink-mute)">(actuators)</text>

    <text x="350" y="243" text-anchor="middle" font-size="12" fill="var(--ink-soft)">This loop never stops while the agent is running.</text>

    <defs>
      <marker id="ag1" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--teal)"/></marker>
      <marker id="ag2" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--gold)"/></marker>
    </defs>
  </svg>
  <div class="diagram-caption">Perceive, decide, act. Then do it again.</div>
</div>

<h3>Function on paper, program in the machine</h3>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Agent function</span>
    <h4>The behaviour</h4>
    <ul>
      <li>A mapping: percept sequence → action</li>
      <li>A mathematical description, possibly an infinite table</li>
      <li>Says <em>what</em> the agent does</li>
      <li>Used when we reason about the agent</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Agent program</span>
    <h4>The implementation</h4>
    <ul>
      <li>Real code, running on real hardware</li>
      <li>Must fit in memory and answer in time</li>
      <li>Says <em>how</em> the behaviour is produced</li>
      <li>Used when we build the agent</li>
    </ul>
  </div>
</div>

<p>Why keep them separate? Because the same behaviour can be produced by very different programs. A lookup table and a clever algorithm may act identically, while one needs a warehouse of memory and the other fits on a small chip.</p>

<div class="callout note">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">Not every function is an agent function</div>
    <p>A spreadsheet formula such as AVERAGE() also maps inputs to an output, but that does not make it an agent function. Here, the inputs are <strong>percepts</strong> from an environment, and the outputs are <strong>actions</strong> of an agent in that environment.</p>
  </div>
</div>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "Rational does not mean perfect",
        body: `
<p>Students often think a rational agent is one that always gets a good result. That is not the definition, and the difference matters.</p>

<div class="definition">
  <p>A <strong>rational agent</strong> chooses, for each percept sequence, the action that is <em>expected</em> to maximise its <strong>performance measure</strong>, given the evidence it has and the knowledge built into it.</p>
</div>

<div class="analogy">
  <span class="analogy-label">Crossing the street</span>
  <p>You look both ways, see nothing coming, and cross. A piece of metal falls from a passing plane and hits you. Were you irrational?</p>
  <p>No. You made the best decision available from what you could perceive. Rationality is judged on the <em>decision</em>, not on the <em>luck</em>. Expecting an agent to be right every time is expecting it to be all-knowing, which no agent is.</p>
</div>

<h3>The performance measure is a design decision — yours</h3>

<p>Do not let the agent judge itself by its own internal feeling of success. Judge it by what you actually want to happen in the world.</p>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">The classic trap</div>
    <p>Reward a cleaning robot for the amount of dust collected, and a clever agent learns to dump the dust back on the floor and collect it again. It scores brilliantly and cleans nothing. The agent did not cheat: it optimised exactly what you wrote. Measure the <em>clean floor</em>, not the <em>dust collected</em>.</p>
  </div>
</div>

<div class="aha">
  <div class="aha-label">Four things rationality depends on</div>
  <p>The performance measure; the agent's built-in knowledge of the environment; the actions it can take; and its percept sequence so far. Change any one of them and the rational action can change. This is why "is this agent rational?" is never answerable until you state all four.</p>
</div>

<h3>Learning and autonomy</h3>

<p>An agent that only follows what its designer wrote is not <strong>autonomous</strong> — it relies on the designer's knowledge of the world. An agent that learns from its own experience can correct wrong assumptions and survive changes the designer never imagined. A practical system usually starts with built-in knowledge (so it is not useless on day one) and learns after that.</p>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>Two food delivery agents work in Riyadh. Agent A is judged on "orders delivered per hour". Agent B is judged on "orders delivered on time, with the food still hot, and no traffic violations". Which behaviours will you see from each?</p>
  <details>
    <summary>Show answer</summary>
    <p>Agent A will take risks: speeding, accepting too many orders at once, choosing the shortest route regardless of safety, and dropping the food quickly at the door. Every one of those raises orders per hour. Agent B has a measure closer to what the customer actually wants, so it will refuse orders it cannot serve well. Same environment, same actions available — the measure produced the behaviour.</p>
  </details>
</div>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "PEAS: describing an agent's task environment",
        body: `
<p>Before designing an agent, we need to describe the task it will perform and the environment in which it will operate.</p>

<p><strong>PEAS</strong> is a framework for describing an agent's <strong>task environment</strong>. It helps us specify what counts as success, what the agent is dealing with, how it can act, and how it perceives.</p>

<div class="definition">
  <p class="def-lead">PEAS stands for:</p>
  <p><strong>P</strong> &mdash; Performance measure: how the agent's success is evaluated.</p>
  <p><strong>E</strong> &mdash; Environment: what lies outside the agent and can affect it or be affected by its actions.</p>
  <p><strong>A</strong> &mdash; Actuators: how the agent acts on its environment.</p>
  <p><strong>S</strong> &mdash; Sensors: how the agent perceives its environment.</p>
</div>

<p><strong>A note about &ldquo;environment&rdquo;.</strong> You met it in Module 1, and the <strong>E</strong> line above is the same idea, now written as part of the agent's task. The complete description &mdash; P + E + A + S &mdash; is what we call the agent's <strong>task environment</strong>.</p>

<div class="formula">
  <p><span>Task environment</span> = P + E + A + S</p>
  <p><span>Environment</span> = E only</p>
</div>

<p>You have already seen two of the four: the irrigation controller in section 2.1 listed its sensors and its actuators. PEAS adds the <strong>P</strong> and the <strong>E</strong>, and turns the description into a standard four-line form.</p>

<h3>Example: a self-driving taxi in Riyadh</h3>

<div class="diagram">
  <svg viewBox="0 0 700 270" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">PEAS — SELF-DRIVING TAXI</text>
    <line x1="40" y1="40" x2="660" y2="40" stroke="var(--rule)"/>

    <text x="50" y="72" font-size="13" fill="var(--accent)" font-weight="700">P</text>
    <text x="80" y="72" font-size="12" fill="var(--ink)" font-weight="600">Performance</text>
    <text x="230" y="72" font-size="12" fill="var(--ink-soft)">safe arrival, legal driving, comfort, fuel, trip time, profit</text>

    <text x="50" y="122" font-size="13" fill="var(--accent)" font-weight="700">E</text>
    <text x="80" y="122" font-size="12" fill="var(--ink)" font-weight="600">Environment</text>
    <text x="230" y="122" font-size="12" fill="var(--ink-soft)">Riyadh roads, other drivers, pedestrians, weather,</text>
    <text x="230" y="141" font-size="12" fill="var(--ink-soft)">road works, passengers</text>

    <text x="50" y="182" font-size="13" fill="var(--accent)" font-weight="700">A</text>
    <text x="80" y="182" font-size="12" fill="var(--ink)" font-weight="600">Actuators</text>
    <text x="230" y="182" font-size="12" fill="var(--ink-soft)">steering, accelerator, brakes, indicators, horn, screen</text>

    <text x="50" y="232" font-size="13" fill="var(--accent)" font-weight="700">S</text>
    <text x="80" y="232" font-size="12" fill="var(--ink)" font-weight="600">Sensors</text>
    <text x="230" y="232" font-size="12" fill="var(--ink-soft)">cameras, radar, GPS, speedometer, microphone,</text>
    <text x="230" y="251" font-size="12" fill="var(--ink-soft)">engine sensors</text>
    <line x1="40" y1="262" x2="660" y2="262" stroke="var(--rule)"/>
  </svg>
  <div class="diagram-caption">Notice how many things sit in P. A real performance measure is rarely one number.</div>
</div>

<h3>Two more, quickly</h3>

<ol class="steps">
  <li><strong>An exam timetabling agent at the university</strong><p><em>P:</em> zero student clashes and no room over capacity &mdash; these are hard requirements, not preferences; then exams spread as evenly as possible across the period. <em>E:</em> the list of courses, students, rooms, and the exam period. <em>A:</em> write an exam into a room and a time slot. <em>S:</em> the registration database.</p></li>
  <li><strong>An Arabic customer-service assistant</strong><p><em>P:</em> questions answered correctly from the knowledge base, in as few turns as possible. Escalating to a human when unsure counts as a correct answer, not a failure &mdash; and a confident wrong answer is the most expensive outcome of all. <em>E:</em> the chat window, the customer, the company's knowledge base. <em>A:</em> send a message, open a ticket, transfer to an agent. <em>S:</em> the text the customer types, and the account history.</p></li>
</ol>

<p>Notice that the parts of a <strong>P</strong> are not all the same kind. Some are <strong>hard requirements</strong> that must hold &mdash; no student sitting two exams at once. Others are things to <strong>improve as far as possible</strong> &mdash; the fewest rooms, the shortest trip. And some <strong>pull against each other</strong>: a faster trip is a less comfortable one. Section 2.5 shows how a utility-based agent weighs the ones that pull against each other.</p>

<p>One more rule &mdash; easy to state, and easy to break. Write <strong>P</strong> in terms of what you want to be true <em>in the world</em>, not in terms of how you imagine the agent should behave. &ldquo;The floor is clean&rdquo; is a state of the world. &ldquo;The robot moves in a spiral pattern&rdquo; is a guess at a method &mdash; and if you write it into the measure, a spiral is exactly what you will get, clean floor or not.</p>

<div class="aha">
  <div class="aha-label">PEAS is where projects are won or lost</div>
  <p>A perfect algorithm cannot rescue a wrong PEAS. A performance measure that rewards the wrong thing, or sensors that cannot see what the decision actually needs, will defeat any algorithm you put behind them. Write the PEAS before you write any code — and show it to the person who asked for the system, because they will correct the P immediately.</p>
</div>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "Six properties of a task environment",
        body: `
<p><strong>What kind of world is my agent operating in?</strong> PEAS gave us a description of the agent's task environment. Now we classify that task environment along six properties.</p>

<p>Some of these properties depend on the agent itself &mdash; especially what its sensors allow it to perceive &mdash; not only on the world around it. That is why we call them properties of the <strong>task environment</strong>, not just of the Environment (E) in PEAS.</p>

<p>These properties help determine which AI techniques are suitable for the task. Ask six questions about every task.</p>

<ol class="steps">
  <li><strong>Fully or partially observable?</strong><p>Can the agent perceive everything it needs to make a decision? A chess board is fully observable. A taxi is partially observable &mdash; it cannot know everything about the road, or what another driver intends to do.</p></li>
  <li><strong>Deterministic or stochastic?</strong><p>Does the same action in the same state always give the same result? Moving a chess piece, yes. Braking on a wet road, not necessarily.</p></li>
  <li><strong>Episodic or sequential?</strong><p>Does this decision affect the next ones? Sorting parcels by their labels is episodic &mdash; each parcel can be handled on its own. Driving is sequential: what you do now changes the choices available later.</p></li>
  <li><strong>Static or dynamic?</strong><p>Does the environment change while the agent is deciding? A crossword waits for you. Traffic does not. In a dynamic environment, taking too long to decide can make a good answer useless. There is also a middle case, <strong>semi-dynamic</strong>: the world waits, but your score does not. In chess with a clock, the board stays still while you think, yet every second you spend is counted against you.</p></li>
  <li><strong>Discrete or continuous?</strong><p>Are the states and actions separate, countable choices, or do they vary over a continuous range? Chess is discrete. Steering angle and speed are continuous.</p></li>
  <li><strong>Single-agent or multi-agent?</strong><p>Are there other agents whose actions affect what happens? Are they cooperating, competing, or both? Driving is multi-agent: other drivers affect what your agent should do. Competitive multi-agent environments lead us to adversarial search, which we study in Module 5.</p></li>
</ol>

<div class="table-figure">
  <p class="table-hint">Swipe sideways to see all six properties &rarr;</p>
  <div class="table-scroll">
    <table class="env-table">
      <thead>
        <tr><th scope="col">Task</th><th scope="col">Observable</th><th scope="col">Deterministic</th><th scope="col">Episodic</th><th scope="col">Static</th><th scope="col">Discrete</th><th scope="col">Agents</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">Crossword puzzle</th><td>Fully</td><td>Deterministic</td><td>Sequential</td><td>Static</td><td>Discrete</td><td>Single</td></tr>
        <tr><th scope="row">Chess with a clock</th><td>Fully</td><td>Deterministic</td><td>Sequential</td><td>Semi-dynamic</td><td>Discrete</td><td>Multi</td></tr>
        <tr><th scope="row">Exam timetabling</th><td>Fully</td><td>Deterministic</td><td>Sequential</td><td>Static</td><td>Discrete</td><td>Single</td></tr>
        <tr><th scope="row">Parcel-sorting robot</th><td>Partially</td><td>Stochastic</td><td>Episodic</td><td>Dynamic</td><td>Continuous</td><td>Single</td></tr>
        <tr><th scope="row">Driving in Riyadh</th><td>Partially</td><td>Stochastic</td><td>Sequential</td><td>Dynamic</td><td>Continuous</td><td>Multi</td></tr>
      </tbody>
    </table>
  </div>
  <div class="diagram-caption">These properties do not just describe the task &mdash; they help us choose how to solve it.</div>
</div>

<div class="aha">
  <div class="aha-label">Why these six questions matter</div>
  <p>These properties are not just labels. They help us decide how an agent should solve its task.</p>
  <p>When the environment is fully observable, deterministic, static, discrete and single-agent, the agent can see what matters and predict the result of each action, so it can plan a whole solution before it acts. That is the setting of Module 3. Change a property and the problem changes with it: continuous states and actions call for the optimization methods of Module 4, and an opponent calls for the adversarial search of Module 5. Missing information and uncertain outcomes need tools that go beyond this course.</p>
  <p>That is why we describe the task environment before choosing an AI technique.</p>
</div>

<p class="reading-time">7 min read</p>
        `
      },

      {
        title: "Five agent designs",
        body: `
<p>All agents receive percepts and produce actions. What differs is how they choose those actions. Some <strong>react</strong> directly, some <strong>remember</strong> what has happened, some <strong>plan</strong> towards goals, some <strong>compare</strong> possible outcomes, and some can <strong>learn</strong> from experience. In the language of section 2.1, these are five ways to write the agent program.</p>

<h3>1. Simple reflex agent</h3>

<p>Looks at the current percept only, and matches it against condition&ndash;action rules: <em>if soil is dry, then open the valve</em>.</p>
<p><strong>Good:</strong> tiny, fast, easy to test. <strong>Bad:</strong> blind to anything it cannot perceive right now. If the moisture sensor breaks and reads "dry" forever, the agent floods the field and never notices. It works well only when the current percept is enough to choose the right action &mdash; for example, in a fully observable environment.</p>

<h3>2. Model-based reflex agent</h3>

<p>Keeps an <strong>internal state</strong>: a picture of the parts of the world it cannot currently perceive, updated with each percept and with knowledge of how the world changes. This is how an agent copes with a partially observable environment.</p>
<p>Our irrigation agent now remembers that line 3 was watered twenty minutes ago, so a "dry" reading is suspicious. That internal state, together with its knowledge of how the world changes and how its own actions change it, is its model.</p>

<h3>3. Goal-based agent</h3>

<p>Knows what it is trying to achieve, and asks which action sequence leads there. This is where <strong>search</strong> and planning become useful &mdash; Module 3 studies search in detail.</p>
<p>A reflex taxi turns right because the rule says so. A goal-based taxi turns right because it has worked out that this road leads to the passenger's destination. Give it a new destination and it plans a new route, with no new rules written.</p>

<h3>4. Utility-based agent</h3>

<p>A goal tells the agent what it wants to achieve, but it may not tell it which of several successful outcomes is better. A <strong>utility function</strong> gives outcomes values, allowing the agent to compare them and trade one thing against another: faster but less comfortable, cheaper but slower, safer but longer.</p>
<p>It also handles uncertainty: when an action might succeed or fail, the agent can choose the one with the best <em>expected</em> utility.</p>
<p>The utility function is the agent's own, internal version of the <strong>performance measure</strong>. The designer judges the agent by the performance measure; the agent uses its utility function to choose. When the two agree, choosing the highest expected utility is rational.</p>

<h3>5. Learning agent</h3>

<p>A learning agent improves its behaviour from experience. Learning is not a completely separate way of choosing actions: it can be added to the designs above.</p>
<p>For example, a goal-based route planner may learn from previous journeys and improve its estimates of travel time. It still plans towards a goal, but now its behaviour can improve with experience.</p>

<div class="diagram">
  <svg viewBox="0 0 700 330" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">FIVE WAYS AN AGENT CAN SELECT AND IMPROVE ITS ACTIONS</text>

    <rect x="30" y="45" width="150" height="150" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="105" y="70" text-anchor="middle" font-size="11" fill="var(--ink)" font-weight="700">1 · Simple reflex</text>
    <text x="105" y="88" text-anchor="middle" font-size="10" fill="var(--teal)" font-weight="600">react</text>
    <text x="105" y="115" text-anchor="middle" font-size="10" fill="var(--ink-soft)">if percept</text>
    <text x="105" y="131" text-anchor="middle" font-size="10" fill="var(--ink-soft)">then action</text>
    <text x="105" y="162" text-anchor="middle" font-size="10" fill="var(--accent)">✗ no memory</text>
    <rect x="193" y="45" width="150" height="150" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="268" y="70" text-anchor="middle" font-size="11" fill="var(--ink)" font-weight="700">2 · Model-based</text>
    <text x="268" y="88" text-anchor="middle" font-size="10" fill="var(--teal)" font-weight="600">remember</text>
    <text x="268" y="115" text-anchor="middle" font-size="10" fill="var(--ink-soft)">+ internal state</text>
    <text x="268" y="131" text-anchor="middle" font-size="10" fill="var(--ink-soft)">of the world</text>
    <text x="268" y="162" text-anchor="middle" font-size="10" fill="var(--accent)">✗ no goal</text>
    <rect x="356" y="45" width="150" height="150" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="431" y="70" text-anchor="middle" font-size="11" fill="var(--ink)" font-weight="700">3 · Goal-based</text>
    <text x="431" y="88" text-anchor="middle" font-size="10" fill="var(--teal)" font-weight="600">plan</text>
    <text x="431" y="115" text-anchor="middle" font-size="10" fill="var(--ink-soft)">+ what I want</text>
    <text x="431" y="131" text-anchor="middle" font-size="10" fill="var(--ink-soft)">→ search, planning</text>
    <text x="431" y="162" text-anchor="middle" font-size="10" fill="var(--accent)">✗ cannot compare</text>
    <text x="431" y="178" text-anchor="middle" font-size="10" fill="var(--accent)">two good options</text>
    <rect x="519" y="45" width="150" height="150" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="594" y="70" text-anchor="middle" font-size="11" fill="var(--ink)" font-weight="700">4 · Utility-based</text>
    <text x="594" y="88" text-anchor="middle" font-size="10" fill="var(--teal)" font-weight="600">compare</text>
    <text x="594" y="115" text-anchor="middle" font-size="10" fill="var(--ink-soft)">+ how good is</text>
    <text x="594" y="131" text-anchor="middle" font-size="10" fill="var(--ink-soft)">each outcome</text>

    <line x1="105" y1="195" x2="105" y2="222" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="268" y1="195" x2="268" y2="222" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="431" y1="195" x2="431" y2="222" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="594" y1="195" x2="594" y2="222" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
    <rect x="30" y="222" width="639" height="56" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4"/>
    <text x="350" y="245" text-anchor="middle" font-size="12" fill="var(--accent)" font-weight="700">5 · Learning  ·  learn</text>
    <text x="350" y="265" text-anchor="middle" font-size="11" fill="var(--ink-soft)">not a fifth step: it can improve any of the four designs from experience</text>

    <text x="350" y="310" text-anchor="middle" font-size="12" fill="var(--ink-soft)">More power costs more memory, more computing, and more ways to go wrong.</text>
  </svg>
  <div class="diagram-caption">Choose the simplest design that solves your problem — not the most advanced one.</div>
</div>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Start with the simplest design that works</div>
    <p>If a reflex rule solves the job, use the reflex rule. A learning agent that needs thousands of examples, careful monitoring, and a retraining plan is a bad answer to a problem that two <code>if</code> statements solve correctly. Engineering judgement means matching the design to the environment, not showing off.</p>
  </div>
</div>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">How this connects to Module 1</div>
    <p>In Module 1, we used a simple introductory distinction: an agent perceives and acts, while an intelligent agent selects actions in ways that help achieve a goal. The five designs here answer a different question: <strong>how is the action selected?</strong> Simple and model-based reflex agents mainly follow condition–action rules. Goal-based and utility-based agents explicitly evaluate actions in relation to goals or preferences. A learning agent can improve the way any of these designs behaves.</p>
    <p>Rationality is a separate idea: it asks <strong>how well</strong> an agent chooses its actions according to its performance measure. In a simple enough environment, even a simple reflex agent can be rational.</p>
  </div>
</div>

<div class="callout note">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">A word you will hear: agentic AI</div>
    <p>Outside this course you will often hear systems described as <strong>agentic AI</strong>. Agentic AI is not a sixth agent design. The term is commonly used today for AI systems that can pursue goals with little step-by-step human direction &mdash; deciding steps, using tools, observing results, and deciding what to do next. One example is the <em>LLM-based agent</em> from Module 1: a large language model (LLM) does the perceiving and the reasoning, and tools act as its actuators (search, files, other software, an API).</p>
    <p>So judge one exactly as you judge any agent in this module. What is its performance measure? What can it actually perceive? What can it actually do? How does it select actions &mdash; does it use goals, a model, utility, learning, or some combination of them? The label is recent and used loosely in industry; those questions are not.</p>
  </div>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>A robot vacuum in a flat in Jeddah. Which design does each behaviour need? (a) "If I hit a wall, turn." (b) "Do not clean the kitchen twice before cleaning the bedroom." (c) "Finish before the family comes home, but stay quiet during nap time."</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>(a)</strong> Simple reflex — it uses only the current percept. <strong>(b)</strong> Model-based — it must remember which rooms it already cleaned, which it cannot perceive right now. <strong>(c)</strong> Utility-based — finishing on time and staying quiet are competing preferences. The agent needs a way to compare the value of different outcomes and choose the best trade-off.</p>
  </details>
</div>

<p class="reading-time">8 min read</p>
        `
      }
    ],
    cheatsheet: [
      {
        group: "Core definitions",
        items: [
          "<strong>Agent</strong> = perceives through sensors, acts through actuators",
          "<strong>Environment</strong> = what lies outside the agent and can affect it or be affected by its actions",
          "<strong>Percept</strong> = one input · <strong>percept sequence</strong> = everything perceived so far",
          "<strong>Agent function</strong> = percept sequence → action (on paper)",
          "<strong>Agent program</strong> = the code that produces it (in the machine)"
        ]
      },
      {
        group: "Rationality — three terms not to mix",
        items: [
          "<strong>Performance measure</strong> = how the agent's success is evaluated — it defines success",
          "<strong>Utility function</strong> = assigns values to outcomes so the agent can compare them — it helps the agent choose",
          "<strong>Rational action</strong> = the action expected to maximise the performance measure, given what the agent has perceived and knows",
          "Judged on the <strong>decision</strong>, not on the luck of the outcome",
          "Depends on four things: the measure, built-in knowledge, available actions, percepts so far",
          "Rational ≠ all-knowing, and rational ≠ perfect",
          "<strong>Autonomous</strong> = relies on its own experience, not only on what the designer built in"
        ]
      },
      {
        group: "PEAS",
        items: [
          "<strong>P</strong>erformance measure · <strong>E</strong>nvironment · <strong>A</strong>ctuators · <strong>S</strong>ensors",
          "<strong>Task environment</strong> = P + E + A + S · <strong>Environment</strong> = E only",
          "P usually has several parts: some must hold, some should improve, some pull against each other (e.g. safety, time, cost)",
          "P describes <strong>what counts as success</strong>, not how the agent achieves it",
          "Write PEAS before writing code"
        ]
      },
      {
        group: "Six properties of a task environment",
        items: [
          "Properties of the <strong>task environment</strong>, not of E alone — observability depends on the sensors",
          "<strong>Fully / partially observable</strong> — can the agent perceive everything it needs?",
          "<strong>Deterministic / stochastic</strong> — same action, same state, always the same result?",
          "<strong>Episodic / sequential</strong> — does this decision affect the next ones?",
          "<strong>Static / dynamic</strong> — does the world change while the agent decides? (<strong>semi-dynamic</strong>: the world waits, the clock does not)",
          "<strong>Discrete / continuous</strong> — countable choices, or a continuous range?",
          "<strong>Single-agent / multi-agent</strong> — do other agents' actions matter? cooperating, competing, or both",
          "Module 3 search assumes: fully observable, deterministic, static, discrete, single-agent — and sequential, because a plan is a sequence of actions",
          "Continuous → Module 4 · an opponent → Module 5"
        ]
      },
      {
        group: "Five agent designs — react → remember → plan → compare → learn",
        items: [
          "<strong>Simple reflex</strong> — current percept only; works when that percept is enough (fully observable)",
          "<strong>Model-based reflex</strong> — maintains an internal state of aspects of the world it cannot currently perceive (partially observable)",
          "<strong>Goal-based</strong> — plans towards a goal → search and planning become useful",
          "<strong>Utility-based</strong> — uses utility to compare outcomes and choose among alternatives",
          "<strong>Learning</strong> — improves itself from experience; can be added to any of the four",
          "<strong>Agentic AI</strong> — a commonly used modern term, not a sixth agent design: AI systems that pursue goals with little step-by-step human direction, often by planning steps and using tools"
        ]
      },
      {
        group: "Mistakes that cost marks",
        items: [
          "Saying an agent was irrational because the outcome was bad",
          "Confusing the performance measure with the agent's internal decision mechanism — the measure defines success; it does not tell the agent how to act",
          "Mixing up agent function (behaviour) and agent program (code)",
          "Treating the six properties as properties of E alone",
          "Calling chess with a clock \"dynamic\" — it is <em>semi-dynamic</em>",
          "Calling learning the fifth, \"smartest\" design — it can improve any design",
          "Saying a simple reflex agent can never be rational",
          "Choosing a learning agent when two <code>if</code> statements would do the job"
        ]
      }
    ],
    resources: [
      { type: "video", title: "Introduction and Scope — Lecture 1, MIT 6.034", author: "Patrick Winston, MIT — agents and what counts as intelligent behaviour", url: "https://www.youtube.com/watch?v=TjZBTDzGeGg" },
      { type: "video", title: "Search — Lecture 0, CS50's Introduction to AI with Python", author: "Brian Yu, Harvard — agents, then straight into Module 3 material", url: "https://www.youtube.com/watch?v=WbzNRTTrX0g" },
      { type: "docs", title: "Artificial Intelligence: A Modern Approach, 4th ed. — Chapter 2", author: "Russell & Norvig — PEAS, rationality, and the five agent types", url: "https://aima.cs.berkeley.edu/" },
      { type: "docs", title: "aima-python — agent and environment code you can run", author: "AIMA code repository, GitHub", url: "https://github.com/aimacode/aima-python" }
    ]
  },

  // ==================== MODULE 3 ====================
  {
    id: 3,
    title: "Problem Solving by Search",
    subtitle: "Uninformed and Informed Search Algorithms",
    shortDesc: "The heart of the course. How an agent that does not know the answer can still find it — first blindly, then with a sense of direction.",
    hours: 16,
    story: "This is the longest module in the course. Search is the first place where a computer does something that really looks like thinking. We start with a problem the agent cannot solve, and we end with A* (said out loud as A-star) — the algorithm inside your maps app, inside game characters, and inside warehouse robots. Take your time here. Every module after this one is search in a different costume.",
    objectives: [
      "Turn a real problem into a search problem: states, actions, transition model, goal test, and cost.",
      "Explain the difference between a state, a node, and the search tree.",
      "Judge any search algorithm on four things: completeness, optimality, time, and memory.",
      "Trace BFS, UCS, DFS, DLS, and IDS on a small map.",
      "Explain what makes a heuristic admissible, and design one for a new problem.",
      "Trace A* by hand, say why it gives the cheapest path, and write it in Python.",
      "Pick the right search variant when memory or time runs short."
    ],
    terms: [
      { term: "State space", meaning: "All the situations you can reach from the start, joined by the actions that move between them. Think of it as the map." },
      { term: "Node", meaning: "One record in the search tree: a state, the node it came from, the action taken, and the cost so far. Two nodes can hold the same state." },
      { term: "Frontier", meaning: "The nodes you have created but not opened yet — the edge of what the search knows." },
      { term: "Expand", meaning: "To open a node: apply every legal action and create its children." },
      { term: "Path cost, g(n)", meaning: "The total cost of the steps taken from the start up to node n." },
      { term: "Heuristic, h(n)", say: "hyoo-RIS-tik", meaning: "A cheap guess at the cost still remaining from node n to the goal. A hint, not a fact." },
      { term: "Admissible", meaning: "A heuristic that never guesses higher than the real remaining cost. It is the condition that makes A* return the cheapest path." },
      { term: "Consistent", meaning: "A stronger condition: one step can never improve the guess by more than that step cost. Every consistent heuristic is also admissible." },
      { term: "Complete", meaning: "The algorithm always finds a solution if one exists." },
      { term: "Optimal", meaning: "The algorithm finds the cheapest solution, not just any solution." },
      { term: "BFS", say: "Breadth-First Search", meaning: "Opens the shallowest node first, using a queue. Finds the path with the fewest steps." },
      { term: "DFS", say: "Depth-First Search", meaning: "Opens the deepest node first, using a stack. Very small memory, no guarantees." },
      { term: "UCS", say: "Uniform-Cost Search", meaning: "Opens the cheapest node first, ordered by g(n). Also known as Dijkstra's algorithm." },
      { term: "DLS", say: "Depth-Limited Search", meaning: "DFS that refuses to go deeper than a fixed limit." },
      { term: "IDS", say: "Iterative Deepening Search", meaning: "Runs DLS again and again with a limit of 0, 1, 2, 3... until the goal is found." },
      { term: "A*", say: "A-star", meaning: "The main algorithm of this module. It opens the node with the smallest f(n) = g(n) + h(n): what you already paid, plus what you still expect to pay. The star is part of the name, not a multiplication sign — see section 3.6." },
      { term: "IDA*", say: "I-D-A-star", meaning: "Iterative-deepening A*: the same idea as IDS, but the limit is placed on f instead of on depth. Used when A* runs out of memory." },
      { term: "Beam search", meaning: "Keeps only the k best nodes in the frontier and throws the rest away. Fast and small, with no guarantees." }
    ],
    sections: [
      {
        title: "What does it mean to \"search\" for a solution?",
        body: `
<p>You already do this every day. You just do not call it search.</p>

<div class="analogy">
  <span class="analogy-label">Driving from Makkah to Jeddah without a maps app</span>
  <p>You reach a junction. Three roads leave it. You do not know which one is best, so you pick one. You drive to the next junction, and now you have new choices.</p>
  <p>That is search. The <em>junctions</em> are states. The <em>roads</em> are actions. Jeddah is the goal. The kilometres you drive are the cost.</p>
</div>

<p>An agent uses search when it knows <strong>what it wants</strong> but not <strong>how to get there</strong>. It is not learning, and it is not guessing. It is trying possibilities in a smart order, and remembering what it already tried.</p>

<p>In Module 2 this agent had a name: a <strong>goal-based agent</strong>. This module also works in the easiest task environment from section 2.4 &mdash; fully observable, deterministic, static, discrete, single-agent &mdash; so the agent can plan the whole route before it takes the first step.</p>

<h3>Five things define any search problem</h3>

<p>Every search problem in this course — every single one — is described by these five parts:</p>

<ol class="steps">
  <li><strong>Initial state</strong><p>Where the agent starts. For example: <em>In(Makkah)</em>.</p></li>
  <li><strong>Actions</strong><p>What the agent can do from that state. From Makkah: take Highway 40, take Highway 80, and so on.</p></li>
  <li><strong>Transition model</strong><p>Where each action takes you: RESULT(In(Makkah), Highway 80) = In(Jeddah). These first three parts together form the <strong>state space</strong>: every state you can reach from the start.</p></li>
  <li><strong>Goal test</strong><p>A check that answers "am I done?" Sometimes it is one state (<em>In(Jeddah)</em>). Sometimes it is a condition ("no student has two exams at the same time").</p></li>
  <li><strong>Action cost</strong><p>What one step costs: kilometres, minutes, or riyals. Add the costs along a path and you get the <strong>path cost</strong>. A <strong>solution</strong> is any path from start to goal. An <strong>optimal solution</strong> is the cheapest one.</p></li>
</ol>

<div class="diagram">
  <svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="24" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.08em">ONE PROBLEM, FIVE PARTS</text>

    <circle cx="90" cy="115" r="30" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
    <text x="90" y="120" text-anchor="middle" font-size="12" fill="var(--accent)" font-weight="700">START</text>
    <text x="90" y="168" text-anchor="middle" font-size="11" fill="var(--ink-mute)">initial state</text>

    <path d="M125 115 H 235" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#ar1)"/>
    <text x="180" y="103" text-anchor="middle" font-size="11" fill="var(--ink-soft)">action</text>
    <text x="180" y="136" text-anchor="middle" font-size="11" fill="var(--gold)">cost 90</text>

    <circle cx="270" cy="115" r="30" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="270" y="120" text-anchor="middle" font-size="12" fill="var(--ink)">state 1</text>

    <path d="M305 115 H 415" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#ar1)"/>
    <text x="360" y="103" text-anchor="middle" font-size="11" fill="var(--ink-soft)">action</text>
    <text x="360" y="136" text-anchor="middle" font-size="11" fill="var(--gold)">cost 420</text>

    <circle cx="450" cy="115" r="30" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="450" y="120" text-anchor="middle" font-size="12" fill="var(--ink)">state 2</text>

    <path d="M485 115 H 595" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#ar1)"/>
    <text x="540" y="103" text-anchor="middle" font-size="11" fill="var(--ink-soft)">action</text>
    <text x="540" y="136" text-anchor="middle" font-size="11" fill="var(--gold)">cost 430</text>

    <circle cx="630" cy="115" r="30" fill="var(--accent-soft)" stroke="var(--teal)" stroke-width="3"/>
    <text x="630" y="120" text-anchor="middle" font-size="12" fill="var(--teal)" font-weight="700">GOAL</text>
    <text x="630" y="168" text-anchor="middle" font-size="11" fill="var(--ink-mute)">goal test passes</text>

    <text x="350" y="206" text-anchor="middle" font-size="12" fill="var(--ink-soft)">the transition model says which circle each arrow reaches</text>
    <text x="350" y="230" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="600">path cost = 90 + 420 + 430 = 940 km</text>

    <defs>
      <marker id="ar1" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="var(--ink-mute)"/>
      </marker>
    </defs>
  </svg>
  <div class="diagram-caption">A solution is a path. An optimal solution is the cheapest path.</div>
</div>

<h3>Writing the problem down is the hard part</h3>

<p>Take the <strong>8-puzzle</strong>: a 3×3 frame with eight numbered tiles and one empty square. You slide tiles until the numbers are in order.</p>

<div class="definition">
  <p><strong>States:</strong> which tile is in which square. <strong>Initial state:</strong> any arrangement. <strong>Actions:</strong> move the <em>empty square</em> left, right, up, or down. (Nice trick: describing the empty square is much easier than describing eight tiles.) <strong>Transition model:</strong> the empty square swaps with its neighbour. <strong>Goal test:</strong> tiles in order 1&ndash;8. <strong>Action cost:</strong> 1 per move.</p>
</div>

<p>Look at what we removed: the colour of the tiles, how long a move takes, whether your hand shakes. This is called <strong>abstraction</strong> — keeping only the details that change the answer. It is the skill that makes AI possible.</p>

<div class="aha">
  <div class="aha-label">The point most students miss</div>
  <p>The algorithms in this module are short. You can memorise them in one evening. The hard part is turning a messy real situation into those five parts. That is the part exams test, and the part employers pay for. Later in this course, when you get stuck, the problem is usually your formulation — not your algorithm.</p>
</div>

<p>In code, all five parts fit in one small class. Every problem in this module plugs into it:</p>

<pre><code class="language-python">class Problem:
    """The five parts of a search problem."""

    def __init__(self, initial, goal=None):
        self.initial = initial          # 1. where we start
        self.goal = goal

    def actions(self, state):           # 2. what can I do here?
        raise NotImplementedError

    def result(self, state, action):    # 3. where does it take me?
        raise NotImplementedError

    def is_goal(self, state):           # 4. am I done?
        return state == self.goal

    def action_cost(self, s, action, s_next):   # 5. what did it cost?
        return 1
</code></pre>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "The search tree: how the computer explores",
        body: `
<p>The state space is the map of the world. The <strong>search tree</strong> is the record of your walk through it. They are not the same thing, and mixing them up is the most common beginner mistake.</p>

<div class="analogy">
  <span class="analogy-label">Walking the alleys of Al-Balad in Jeddah with a notebook</span>
  <p>The old district has a fixed layout: small squares joined by narrow alleys. That layout is the <em>state space</em>. It exists whether you walk it or not.</p>
  <p>Your notebook is the <em>search tree</em>: "from the gate I went right, then left, then hit a closed alley; back at the gate I went left..." The same small square can appear on three pages of your notebook, because you reached it three different ways. One place, three notes.</p>
</div>

<div class="definition">
  <p>A <strong>state</strong> is a situation in the world. A <strong>node</strong> is a record in the search tree: it holds a state, the node it came from, the action taken, and the cost so far. Many nodes can hold the same state.</p>
</div>

<h3>One loop, many algorithms</h3>

<p>Almost every algorithm in this module is the same loop with one line changed. Learn the loop once:</p>

<ol class="steps">
  <li><strong>Start with a frontier</strong><p>The <strong>frontier</strong> holds nodes we have seen but not opened yet. It is the edge of what we know. At the start it holds only the first node.</p></li>
  <li><strong>Take one node out of the frontier</strong><p><em>This is the only line that changes between algorithms.</em> Which node you take — the oldest, the newest, the cheapest, the most promising — decides whether you are running BFS, DFS, UCS, or A*.</p></li>
  <li><strong>Test it</strong><p>If it is a goal, follow the parent links back to the start and return the path.</p></li>
  <li><strong>Expand it</strong><p>To <strong>expand</strong> a node means to make its children: apply every legal action, and add the new nodes to the frontier.</p></li>
  <li><strong>Repeat</strong><p>Until you find a goal, or the frontier is empty — which means there is no solution.</p></li>
</ol>

<div class="diagram">
  <svg viewBox="0 0 700 330" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="175" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">STATE SPACE (the map)</text>
    <text x="525" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">SEARCH TREE (your notebook)</text>
    <line x1="350" y1="35" x2="350" y2="315" stroke="var(--rule)" stroke-width="1"/>

    <circle cx="175" cy="70" r="20" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/><text x="175" y="75" text-anchor="middle" font-size="12" fill="var(--accent)" font-weight="700">A</text>
    <circle cx="105" cy="160" r="20" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/><text x="105" y="165" text-anchor="middle" font-size="12" fill="var(--ink)">B</text>
    <circle cx="245" cy="160" r="20" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/><text x="245" y="165" text-anchor="middle" font-size="12" fill="var(--ink)">C</text>
    <circle cx="175" cy="250" r="20" fill="var(--bg-elev)" stroke="var(--teal)" stroke-width="2.5"/><text x="175" y="255" text-anchor="middle" font-size="12" fill="var(--teal)" font-weight="700">D</text>
    <line x1="160" y1="85" x2="120" y2="145" stroke="var(--ink-mute)" stroke-width="2"/>
    <line x1="190" y1="85" x2="230" y2="145" stroke="var(--ink-mute)" stroke-width="2"/>
    <line x1="120" y1="175" x2="160" y2="235" stroke="var(--ink-mute)" stroke-width="2"/>
    <line x1="230" y1="175" x2="190" y2="235" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="175" y="300" text-anchor="middle" font-size="11" fill="var(--ink-soft)">4 states — fixed before you start</text>

    <circle cx="525" cy="60" r="18" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/><text x="525" y="65" text-anchor="middle" font-size="11" fill="var(--accent)" font-weight="700">A</text>
    <circle cx="455" cy="140" r="18" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/><text x="455" y="145" text-anchor="middle" font-size="11" fill="var(--ink)">B</text>
    <circle cx="595" cy="140" r="18" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/><text x="595" y="145" text-anchor="middle" font-size="11" fill="var(--ink)">C</text>
    <circle cx="455" cy="225" r="18" fill="var(--bg-elev)" stroke="var(--teal)" stroke-width="2.5"/><text x="455" y="230" text-anchor="middle" font-size="11" fill="var(--teal)" font-weight="700">D</text>
    <circle cx="595" cy="225" r="18" fill="var(--bg-elev)" stroke="var(--teal)" stroke-width="2.5"/><text x="595" y="230" text-anchor="middle" font-size="11" fill="var(--teal)" font-weight="700">D</text>
    <line x1="512" y1="74" x2="468" y2="126" stroke="var(--ink-mute)" stroke-width="2"/>
    <line x1="538" y1="74" x2="582" y2="126" stroke="var(--ink-mute)" stroke-width="2"/>
    <line x1="455" y1="158" x2="455" y2="207" stroke="var(--ink-mute)" stroke-width="2"/>
    <line x1="595" y1="158" x2="595" y2="207" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="525" y="272" text-anchor="middle" font-size="11" fill="var(--gold)" font-weight="600">D appears twice — two paths, two nodes</text>
    <text x="525" y="300" text-anchor="middle" font-size="11" fill="var(--ink-soft)">5 nodes — grows as you explore</text>
  </svg>
  <div class="diagram-caption">One state can live in many nodes. That is why we must watch for repeated states.</div>
</div>

<h3>The repeated-state problem</h3>

<p>If the map has a cycle, the search tree can be <em>infinite</em> even when the map has only four places: A → B → A → B → ... forever. Two common ways to handle it:</p>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Tree-like search</span>
    <h4>Remember nothing</h4>
    <ul>
      <li>Uses almost no memory</li>
      <li>Can loop forever if the map has cycles</li>
      <li>Repeats the same work many times</li>
      <li>Fine when the map has no cycles</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Graph search</span>
    <h4>Keep a <em>reached</em> table of visited states</h4>
    <ul>
      <li>Never opens the same state twice</li>
      <li>Always stops, if the map is finite</li>
      <li>Costs memory: one entry per state reached</li>
      <li>The default choice in this course</li>
    </ul>
  </div>
</div>

<pre><code class="language-python">from collections import deque

class Node:
    def __init__(self, state, parent=None, action=None, path_cost=0):
        self.state, self.parent = state, parent
        self.action, self.path_cost = action, path_cost

def expand(problem, node):
    """Make the child nodes — one for every legal action."""
    for action in problem.actions(node.state):
        s_next = problem.result(node.state, action)
        cost = node.path_cost + problem.action_cost(node.state, action, s_next)
        yield Node(s_next, parent=node, action=action, path_cost=cost)

def path(node):
    """Follow the parent links back to the start, then reverse."""
    steps = []
    while node.parent is not None:
        steps.append(node.action)
        node = node.parent
    return list(reversed(steps))
</code></pre>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>A map has 6 places. You run a tree-like search and your search tree now holds 40 nodes. Is something broken?</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>No, this is normal.</strong> Without a reached table, the same place is created again on every path that leads to it, so nodes are many more than states. It wastes work, but the answer is still correct. Graph search would keep the expansions at 6.</p>
  </details>
</div>

<p class="reading-time">7 min read</p>
        `
      },

      {
        title: "How do we judge a search algorithm?",
        body: `
<p>Four questions. Always the same four. Ask them about every algorithm in the rest of this course.</p>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">✅</span>
      <strong>Complete?</strong>
      <p>If a solution exists, will the algorithm always find it?</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🏆</span>
      <strong>Optimal?</strong>
      <p>Does it find the <em>cheapest</em> solution, or just <em>any</em> solution?</p>
    </div>
    <div class="app-card">
      <span class="app-icon">⏱️</span>
      <strong>Time</strong>
      <p>How many nodes does it create before it finishes?</p>
    </div>
    <div class="app-card">
      <span class="app-icon">💾</span>
      <strong>Memory</strong>
      <p>How many nodes must it hold at the same time?</p>
    </div>
  </div>
</div>

<div class="analogy">
  <span class="analogy-label">Judging a delivery driver in Jeddah</span>
  <p><em>Complete</em> = he always delivers in the end. <em>Optimal</em> = he takes the shortest route. <em>Time</em> = how long he drives. <em>Memory</em> = how many boxes fit in his car at once.</p>
  <p>A driver who always takes the shortest route is still useless if his car holds three boxes and you have a thousand.</p>
</div>

<h3>Three letters you need</h3>

<div class="definition">
  <p><strong>b</strong> — the <em>branching factor</em>: how many actions are available at a typical state. <strong>d</strong> — the <em>depth of the nearest goal</em>. <strong>m</strong> — the <em>deepest</em> the tree can go, which may be infinite. We write costs using these letters: $O(b^d)$, $O(b^m)$, $O(bd)$.</p>
</div>

<p>Why exponential growth is so painful, in real numbers. Take $b = 10$, one microsecond to make a node, and 100 bytes to store it:</p>

<div class="diagram">
  <svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="20" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">SEARCHING TO DEPTH d, WITH b = 10</text>
    <line x1="60" y1="40" x2="640" y2="40" stroke="var(--rule)"/>
    <text x="90" y="60" font-size="12" fill="var(--ink-soft)" font-weight="600">depth</text>
    <text x="230" y="60" font-size="12" fill="var(--ink-soft)" font-weight="600">nodes</text>
    <text x="400" y="60" font-size="12" fill="var(--ink-soft)" font-weight="600">time</text>
    <text x="540" y="60" font-size="12" fill="var(--ink-soft)" font-weight="600">memory</text>
    <line x1="60" y1="70" x2="640" y2="70" stroke="var(--rule)"/>

    <text x="90" y="95" font-size="12" fill="var(--ink)">4</text>
    <text x="230" y="95" font-size="12" fill="var(--ink)">10 thousand</text>
    <text x="400" y="95" font-size="12" fill="var(--teal)">10 milliseconds</text>
    <text x="540" y="95" font-size="12" fill="var(--teal)">1 megabyte</text>

    <text x="90" y="125" font-size="12" fill="var(--ink)">8</text>
    <text x="230" y="125" font-size="12" fill="var(--ink)">100 million</text>
    <text x="400" y="125" font-size="12" fill="var(--gold)">2 minutes</text>
    <text x="540" y="125" font-size="12" fill="var(--gold)">10 gigabytes</text>

    <text x="90" y="155" font-size="12" fill="var(--ink)">12</text>
    <text x="230" y="155" font-size="12" fill="var(--ink)">1 trillion</text>
    <text x="400" y="155" font-size="12" fill="var(--accent)">13 days</text>
    <text x="540" y="155" font-size="12" fill="var(--accent)">100 terabytes</text>

    <text x="90" y="185" font-size="12" fill="var(--ink)">16</text>
    <text x="230" y="185" font-size="12" fill="var(--ink)">10 quadrillion</text>
    <text x="400" y="185" font-size="12" fill="var(--accent)">350 years</text>
    <text x="540" y="185" font-size="12" fill="var(--accent)">1 exabyte</text>

    <line x1="60" y1="200" x2="640" y2="200" stroke="var(--rule)"/>
    <text x="350" y="228" text-anchor="middle" font-size="12" fill="var(--ink-soft)">Four more levels of depth = ten thousand times more work.</text>
  </svg>
  <div class="diagram-caption">Rounded numbers. The shape is the lesson, not the digits.</div>
</div>

<div class="aha">
  <div class="aha-label">Memory fails first</div>
  <p>Look at depth 12 again. Waiting 13 days is painful but possible. Finding 100 terabytes of RAM is not. In real projects, algorithms that need exponential <em>memory</em> die long before algorithms that need exponential <em>time</em>. This one fact explains why iterative deepening and IDA* exist, and why repeating work can be a smart trade.</p>
</div>

<div class="callout note">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">When do we test for the goal?</div>
    <p>Some books test a node when it is <em>created</em>. Others test it when it is <em>taken out</em> of the frontier. Testing on creation is faster, but it can return a path that is not the cheapest, because a cheaper path to the same goal may still be waiting in the frontier. Safe rule for UCS and A*: <strong>test when you take the node out, not when you put it in.</strong></p>
  </div>
</div>

<p class="reading-time">5 min read</p>
        `
      },

      {
        title: "Uninformed search: exploring with your eyes closed",
        body: `
<p><strong>Uninformed</strong> (also called blind) means the algorithm knows nothing except the five parts of the problem. It cannot tell which state looks closer to the goal. The only thing it chooses is <em>the order of exploring</em> — and that one choice gives us five different algorithms.</p>

<div class="analogy">
  <span class="analogy-label">Looking for one office inside a large building</span>
  <p><strong>Breadth-first</strong>: check every office on floor 1, then every office on floor 2, then floor 3. You will find the nearest office first, but you must remember every door you have not opened yet.</p>
  <p><strong>Depth-first</strong>: walk down one corridor, take every turn you meet, until you reach a dead end. Then step back and try the next door. You need almost no memory, but you may wander into the basement while your office is next to the entrance.</p>
</div>

<h3>1. Breadth-First Search (BFS)</h3>

<p>Expand the <strong>shallowest</strong> node first. The frontier is a queue: first in, first out.</p>

<div class="diagram">
  <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="175" y="20" text-anchor="middle" font-size="13" fill="var(--accent)" font-weight="700">BFS — level by level</text>
    <text x="525" y="20" text-anchor="middle" font-size="13" fill="var(--gold)" font-weight="700">DFS — branch by branch</text>
    <line x1="350" y1="30" x2="350" y2="225" stroke="var(--rule)"/>

    <g stroke="var(--ink-mute)" stroke-width="1.5">
      <line x1="175" y1="62" x2="120" y2="115"/><line x1="175" y1="62" x2="230" y2="115"/>
      <line x1="120" y1="133" x2="85" y2="180"/><line x1="120" y1="133" x2="155" y2="180"/>
      <line x1="230" y1="133" x2="200" y2="180"/><line x1="230" y1="133" x2="265" y2="180"/>
    </g>
    <circle cx="175" cy="50" r="14" fill="var(--accent)"/><text x="175" y="55" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">1</text>
    <circle cx="120" cy="124" r="14" fill="var(--accent)"/><text x="120" y="129" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">2</text>
    <circle cx="230" cy="124" r="14" fill="var(--accent)"/><text x="230" y="129" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">3</text>
    <circle cx="85" cy="192" r="14" fill="var(--accent)"/><text x="85" y="197" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">4</text>
    <circle cx="155" cy="192" r="14" fill="var(--accent)"/><text x="155" y="197" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">5</text>
    <circle cx="200" cy="192" r="14" fill="var(--accent)"/><text x="200" y="197" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">6</text>
    <circle cx="265" cy="192" r="14" fill="var(--accent)"/><text x="265" y="197" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">7</text>

    <g stroke="var(--ink-mute)" stroke-width="1.5">
      <line x1="525" y1="62" x2="470" y2="115"/><line x1="525" y1="62" x2="580" y2="115"/>
      <line x1="470" y1="133" x2="435" y2="180"/><line x1="470" y1="133" x2="505" y2="180"/>
      <line x1="580" y1="133" x2="550" y2="180"/><line x1="580" y1="133" x2="615" y2="180"/>
    </g>
    <circle cx="525" cy="50" r="14" fill="var(--gold)"/><text x="525" y="55" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">1</text>
    <circle cx="470" cy="124" r="14" fill="var(--gold)"/><text x="470" y="129" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">2</text>
    <circle cx="580" cy="124" r="14" fill="var(--gold)"/><text x="580" y="129" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">5</text>
    <circle cx="435" cy="192" r="14" fill="var(--gold)"/><text x="435" y="197" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">3</text>
    <circle cx="505" cy="192" r="14" fill="var(--gold)"/><text x="505" y="197" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">4</text>
    <circle cx="550" cy="192" r="14" fill="var(--gold)"/><text x="550" y="197" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">6</text>
    <circle cx="615" cy="192" r="14" fill="var(--gold)"/><text x="615" y="197" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">7</text>

    <text x="350" y="232" text-anchor="middle" font-size="11" fill="var(--ink-soft)">the numbers show the order of expansion</text>
  </svg>
  <div class="diagram-caption">Same tree, same five parts. Only the rule for taking a node out changed.</div>
</div>

<pre><code class="language-python">from collections import deque

def breadth_first_search(problem):
    node = Node(problem.initial)
    if problem.is_goal(node.state):
        return node
    frontier = deque([node])            # queue: oldest node leaves first
    reached = {problem.initial}
    while frontier:
        node = frontier.popleft()
        for child in expand(problem, node):
            if problem.is_goal(child.state):
                return child            # safe here: all steps cost the same
            if child.state not in reached:
                reached.add(child.state)
                frontier.append(child)
    return None                         # no solution
</code></pre>

<p><strong>Result:</strong> complete. Optimal <em>only when every step costs the same</em>. Time and memory are both $O(b^d)$. The memory is what kills it: BFS must hold a whole level of the tree at once.</p>

<h3>2. Uniform-Cost Search (UCS), also known as Dijkstra's algorithm</h3>

<p>Expand the node with the <strong>lowest cost so far, g(n)</strong>. The frontier is a priority queue ordered by $g$.</p>

<p>BFS counts steps. UCS counts cost. As soon as your steps have different costs — 8 km of open highway against 3 km of heavy city traffic — the BFS answer stops being the best one, and UCS becomes the right tool.</p>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Why UCS must test the goal when it takes the node out</div>
    <p>Finding a goal node inside the frontier only proves that <em>a</em> path exists. It does not prove it is the cheapest. Only when that node reaches the front of the queue do you know that nothing cheaper is left.</p>
  </div>
</div>

<p><strong>Result:</strong> complete (as long as every step costs more than zero), and always optimal. Its cost depends on the cheapest step size, so with many tiny steps it can be slower than BFS.</p>

<h3>3. Depth-First Search (DFS)</h3>

<p>Expand the <strong>deepest</strong> node first. The frontier is a stack: last in, first out.</p>

<p>The strong point of DFS is memory. It only remembers the current path and the unopened siblings along it: $O(bm)$ instead of $O(b^d)$. For a problem with depth 12 and $b = 10$, that is about 120 nodes instead of a trillion.</p>

<p><strong>Result:</strong> not optimal, and the tree-like version is not even complete — it can follow an endless branch or go around a cycle forever. Time $O(b^m)$, memory $O(bm)$.</p>

<h3>4. Depth-Limited Search (DLS)</h3>

<p>DFS with a hard limit: never go deeper than $\\ell$ levels. This stops the endless branch, but creates a new problem — if the goal is deeper than the limit, you will never find it. Time $O(b^{\\ell})$, memory $O(b\\ell)$.</p>

<p>Sometimes the problem gives you a good limit for free. On a map with 20 cities, no sensible route uses more than 19 roads.</p>

<h3>5. Iterative Deepening Search (IDS)</h3>

<p>The clever one. Run DLS with limit 0. Fail. Run it again with limit 1. Fail. Limit 2. Limit 3. Keep going until you find the goal.</p>

<p>Students always object: <em>"but you throw away all the work every time!"</em> Here are the real numbers, for $b = 10$ and a goal at depth 5:</p>

<div class="diagram">
  <svg viewBox="0 0 700 190" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="20" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">IS ITERATIVE DEEPENING WASTEFUL?</text>
    <text x="60" y="52" font-size="12" fill="var(--ink-soft)">Nodes made by BFS down to depth 5:</text>
    <text x="470" y="52" font-size="13" fill="var(--ink)" font-weight="700">111,110</text>
    <text x="60" y="82" font-size="12" fill="var(--ink-soft)">Nodes made by IDS down to depth 5:</text>
    <text x="470" y="82" font-size="13" fill="var(--ink)" font-weight="700">123,450</text>
    <line x1="60" y1="98" x2="640" y2="98" stroke="var(--rule)"/>
    <text x="60" y="124" font-size="12" fill="var(--ink-soft)">Extra work:</text>
    <text x="470" y="124" font-size="13" fill="var(--gold)" font-weight="700">about 11%</text>
    <text x="60" y="154" font-size="12" fill="var(--ink-soft)">Memory needed by BFS:</text>
    <text x="470" y="154" font-size="13" fill="var(--accent)" font-weight="700">100,000 nodes</text>
    <text x="60" y="178" font-size="12" fill="var(--ink-soft)">Memory needed by IDS:</text>
    <text x="470" y="178" font-size="13" fill="var(--teal)" font-weight="700">about 50 nodes</text>
  </svg>
  <div class="diagram-caption">Repeating the top levels is cheap, because the bottom level holds most of the nodes.</div>
</div>

<div class="aha">
  <div class="aha-label">Why the repeated work does not matter</div>
  <p>In a tree with branching factor 10, the deepest level holds about 90% of all nodes. Repeating levels 0 to 4 costs you about one ninth of a single pass over level 5. You pay about 11% more time and save about 99.9% of the memory. That is why IDS — not BFS — is the standard blind search when you do not know how deep the goal is.</p>
</div>

<p><strong>Result:</strong> complete. Optimal when all steps cost the same. Time $O(b^d)$, memory $O(bd)$. It has the memory of DFS and the guarantees of BFS.</p>

<h3>The table to memorise</h3>

<div class="diagram">
  <svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <line x1="30" y1="40" x2="670" y2="40" stroke="var(--rule)"/>
    <text x="40" y="30" font-size="12" fill="var(--ink-soft)" font-weight="700">Algorithm</text>
    <text x="200" y="30" font-size="12" fill="var(--ink-soft)" font-weight="700">Complete?</text>
    <text x="320" y="30" font-size="12" fill="var(--ink-soft)" font-weight="700">Optimal?</text>
    <text x="460" y="30" font-size="12" fill="var(--ink-soft)" font-weight="700">Time</text>
    <text x="570" y="30" font-size="12" fill="var(--ink-soft)" font-weight="700">Memory</text>

    <text x="40" y="70" font-size="12" fill="var(--ink)" font-weight="600">BFS</text>
    <text x="200" y="70" font-size="12" fill="var(--teal)">Yes</text>
    <text x="320" y="70" font-size="12" fill="var(--gold)">If equal costs</text>
    <text x="460" y="70" font-size="12" fill="var(--ink)">O(b^d)</text>
    <text x="570" y="70" font-size="12" fill="var(--accent)">O(b^d)</text>

    <text x="40" y="100" font-size="12" fill="var(--ink)" font-weight="600">UCS</text>
    <text x="200" y="100" font-size="12" fill="var(--teal)">Yes</text>
    <text x="320" y="100" font-size="12" fill="var(--teal)">Yes, always</text>
    <text x="460" y="100" font-size="12" fill="var(--ink)">depends on costs</text>
    <text x="570" y="100" font-size="12" fill="var(--accent)">large</text>

    <text x="40" y="130" font-size="12" fill="var(--ink)" font-weight="600">DFS (tree-like)</text>
    <text x="200" y="130" font-size="12" fill="var(--accent)">No</text>
    <text x="320" y="130" font-size="12" fill="var(--accent)">No</text>
    <text x="460" y="130" font-size="12" fill="var(--ink)">O(b^m)</text>
    <text x="570" y="130" font-size="12" fill="var(--teal)">O(bm)</text>

    <text x="40" y="160" font-size="12" fill="var(--ink)" font-weight="600">DLS</text>
    <text x="200" y="160" font-size="12" fill="var(--gold)">If limit ≥ d</text>
    <text x="320" y="160" font-size="12" fill="var(--accent)">No</text>
    <text x="460" y="160" font-size="12" fill="var(--ink)">O(b^ℓ)</text>
    <text x="570" y="160" font-size="12" fill="var(--teal)">O(bℓ)</text>

    <text x="40" y="190" font-size="12" fill="var(--ink)" font-weight="600">IDS</text>
    <text x="200" y="190" font-size="12" fill="var(--teal)">Yes</text>
    <text x="320" y="190" font-size="12" fill="var(--gold)">If equal costs</text>
    <text x="460" y="190" font-size="12" fill="var(--ink)">O(b^d)</text>
    <text x="570" y="190" font-size="12" fill="var(--teal)">O(bd)</text>

    <text x="40" y="220" font-size="12" fill="var(--ink)" font-weight="600">Bidirectional</text>
    <text x="200" y="220" font-size="12" fill="var(--teal)">Yes</text>
    <text x="320" y="220" font-size="12" fill="var(--gold)">If equal costs</text>
    <text x="460" y="220" font-size="12" fill="var(--teal)">O(b^(d/2))</text>
    <text x="570" y="220" font-size="12" fill="var(--gold)">O(b^(d/2))</text>
    <line x1="30" y1="236" x2="670" y2="236" stroke="var(--rule)"/>
  </svg>
  <div class="diagram-caption">b = branching factor · d = depth of nearest goal · m = deepest level · ℓ = depth limit</div>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>A robot moves around a warehouse in Riyadh. Moving to the next cell takes 1 second, but passing through a narrow aisle takes 4 seconds. You want the <em>fastest</em> route. Is BFS good enough?</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>No.</strong> BFS returns the route with the fewest moves, and here that is not the fastest. A 5-step route through two narrow aisles takes 11 seconds, while an 8-step route around them takes 8 seconds. When steps have different costs you need UCS — or A*, once you add a heuristic.</p>
  </details>
</div>

<p class="reading-time">9 min read</p>
        `
      },

      {
        title: "Heuristics: giving the search a sense of direction",
        body: `
<p>Every algorithm so far has been blind. Now we give the agent a hint.</p>

<div class="analogy">
  <span class="analogy-label">The children's game: "hot and cold"</span>
  <p>Looking for a hidden object by opening every drawer in order is uninformed search. Having a friend say "warmer... warmer... cold!" is <strong>informed</strong> search. Your friend does not tell you where the object is. He only ranks your choices. That ranking is a heuristic.</p>
</div>

<div class="definition">
  <p>A <strong>heuristic function</strong> $h(n)$ is a guess at the cost of the cheapest path from the state at node $n$ to a goal. At the goal itself, $h = 0$. It is only a guess: cheap to compute, allowed to be wrong, and useful as long as it is close to the truth.</p>
</div>

<h3>Three heuristics you should know</h3>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">📏</span>
      <strong>Straight-line distance</strong>
      <p>For maps: the distance in a straight line to the destination. Roads curve, so the real drive is never shorter than this.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🔢</span>
      <strong>h₁ — misplaced tiles</strong>
      <p>For the 8-puzzle: count the tiles that are not in the right square. Each one needs at least one move.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🗺️</span>
      <strong>h₂ — Manhattan distance</strong>
      <p>For the 8-puzzle: for every tile, add its horizontal and vertical distance from its correct square. Sharper than h₁, and still never too high.</p>
    </div>
  </div>
</div>

<h3>Admissible: the one property that makes A* work</h3>

<div class="definition">
  <p>$h(n)$ is <strong>admissible</strong> if it <em>never guesses too high</em>. The guess must be less than or equal to the real remaining cost. An admissible heuristic is an optimist: it may think the goal is nearer than it is, but never further.</p>
</div>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Not admissible (too pessimistic)</span>
    <h4>What goes wrong</h4>
    <ul>
      <li>Guesses higher than the real cost somewhere</li>
      <li>A* may reject the true best route as "too expensive"</li>
      <li>You still get an answer, but not the cheapest one</li>
      <li>Often faster — some systems accept this on purpose</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Admissible (optimistic)</span>
    <h4>What you gain</h4>
    <ul>
      <li>Never guesses higher than the real cost</li>
      <li>A* is guaranteed to return the cheapest path</li>
      <li>The closer the guess, the fewer nodes opened</li>
      <li>h(n) = 0 is admissible but useless — A* becomes UCS</li>
    </ul>
  </div>
</div>

<h3>Consistent: the stronger version</h3>

<div class="definition">
  <p>$h$ is <strong>consistent</strong> if, for every node $n$ and every child $n'$ reached by a step of cost $c$: $h(n) \\le c + h(n')$. In words: taking one step should never improve your guess by more than that step actually cost.</p>
</div>

<p>Every consistent heuristic is also admissible. The opposite is not always true. Consistency is what lets A* use a reached table safely: the first time it opens a state, it has already found the cheapest way there, so it never needs to go back and fix it. Almost every natural heuristic — straight-line distance, Manhattan distance — is consistent.</p>

<h3>Dominance: when one heuristic is simply better</h3>

<p>If $h_2(n) \\ge h_1(n)$ for every node, and both are admissible, we say $h_2$ <strong>dominates</strong> $h_1$. A* with $h_2$ never opens more nodes than A* with $h_1$. Bigger is better, as long as you stay under the real cost.</p>

<p>The classic measurement on the 8-puzzle, for problems needing 12 moves: IDS creates about three million nodes. A* with $h_1$ needs about 200. A* with $h_2$ needs about 70. Same algorithm, better hint, four orders of magnitude.</p>

<h3>Where do heuristics come from?</h3>

<ol class="steps">
  <li><strong>Remove a rule from the problem</strong><p>Solve an easier version exactly. If a tile could jump anywhere, the cost is the number of misplaced tiles — that is $h_1$. If a tile could slide onto a full square, the cost is the Manhattan distance — that is $h_2$. The exact cost of an easier problem is always an admissible heuristic for the real one, because every real solution also solves the easier version.</p></li>
  <li><strong>Solve part of the problem exactly</strong><p>Compute in advance the exact cost of putting tiles 1 to 4 in place, ignoring the others, and save it in a table. Then just look it up during the search.</p></li>
  <li><strong>Take the largest of several</strong><p>If $h_a$ and $h_b$ are both admissible, then $\\max(h_a, h_b)$ is admissible too, and it is better than both. You pay to compute both, so do this only when each one is cheap.</p></li>
</ol>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">A heuristic is not free</div>
    <p>A perfect heuristic would walk you straight to the goal — but computing it exactly means solving the problem first, so you gained nothing. The real engineering question is the balance: is this guess accurate enough to be worth its cost at every node?</p>
  </div>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>On a road map, is straight-line distance admissible when the cost is <em>kilometres</em>? What if the cost is <em>travel time</em>?</p>
  <details>
    <summary>Show answer</summary>
    <p>In kilometres: <strong>yes</strong>. No road is shorter than the straight line. In travel time: <strong>not automatically</strong>. You must divide the distance by the <em>highest possible speed</em> on the network. If you divide by an average speed instead, you will guess too high on fast highways, break admissibility, and lose the A* guarantee. Units matter.</p>
  </details>
</div>

<p class="reading-time">8 min read</p>
        `
      },

      {
        title: "Informed search: Greedy Best-First and A*",
        body: `
<p>We have a hint now. How do we use it? There are two obvious answers. One is fast and wrong. The other is the most famous algorithm in AI.</p>

<h3>Greedy best-first search: follow your nose</h3>

<p>Always expand the node that <em>looks</em> closest to the goal. Order the frontier by $h(n)$ only, and ignore what you already spent.</p>

<div class="analogy">
  <span class="analogy-label">Walking towards a mountain you can see</span>
  <p>You always take the path that points most directly at the peak. It works well — until your path meets a deep valley, while the path that curved away had a bridge. Greedy search never looks back at what it spent. It only looks forward at what it hopes is left.</p>
</div>

<p><strong>Result:</strong> often fast, but <em>not optimal</em>. In its tree-like form it is not even complete, because it can bounce between two states that both look good. Worst case $O(b^m)$.</p>

<h3>A*: the algorithm you will remember from this course</h3>

<div class="callout note">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">First, the name</div>
    <p>A* is written with a star and said out loud as <strong>"A-star"</strong>. The star is part of the name — it is not multiplication and not a footnote mark. It comes from the 1968 paper by Hart, Nilsson and Raphael: they called their family of algorithms "A", and marked with a star the version they proved always returns the cheapest path.</p>
  </div>
</div>

<div class="definition">
  <p>A* expands the node with the smallest $f(n) = g(n) + h(n)$, where $g(n)$ is the cost <em>already paid</em> to reach $n$, and $h(n)$ is the guess for the cost <em>still to pay</em>. So $f(n)$ is a guess at the total cost of the best solution passing through $n$.</p>
</div>

<div class="aha">
  <div class="aha-label">A* is not really a new algorithm</div>
  <p>Set $h(n) = 0$ and A* becomes uniform-cost search. Ignore $g(n)$ and it becomes greedy search. A* is just UCS that was given a hint. The whole idea is adding one guess to one running total — and the famous guarantee comes straight from that: if the guess is never too high, then $f$ is never too high either, so A* cannot settle for an expensive goal while a cheaper one is still reachable.</p>
</div>

<h3>Worked example: Makkah to Riyadh</h3>

<p>A real map, with real cities. The numbers on the roads are approximate driving distances in kilometres. The number inside each circle is $h$ — the straight-line distance from that city to Riyadh, which we can compute from coordinates before the search starts.</p>

<div class="diagram">
  <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="20" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">MAKKAH → RIYADH — TWO ANSWERS</text>

    <g stroke="var(--ink-mute)" stroke-width="2" fill="none">
      <line x1="95" y1="205" x2="255" y2="85"/>
      <line x1="255" y1="85" x2="430" y2="70"/>
      <line x1="430" y1="70" x2="590" y2="150"/>
      <line x1="95" y1="205" x2="230" y2="265"/>
      <line x1="230" y1="265" x2="420" y2="255"/>
      <line x1="420" y1="255" x2="590" y2="185"/>
    </g>

    <text x="150" y="132" font-size="11" fill="var(--gold)" font-weight="600">450</text>
    <text x="340" y="66" font-size="11" fill="var(--gold)" font-weight="600">650</text>
    <text x="525" y="100" font-size="11" fill="var(--gold)" font-weight="600">360</text>
    <text x="150" y="252" font-size="11" fill="var(--gold)" font-weight="600">90</text>
    <text x="320" y="275" font-size="11" fill="var(--gold)" font-weight="600">420</text>
    <text x="520" y="238" font-size="11" fill="var(--gold)" font-weight="600">430</text>

    <circle cx="95" cy="205" r="30" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2.5"/>
    <text x="95" y="203" text-anchor="middle" font-size="11" fill="var(--accent)" font-weight="700">Makkah</text>
    <text x="95" y="217" text-anchor="middle" font-size="10" fill="var(--ink-mute)">h=789</text>

    <circle cx="255" cy="85" r="31" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="255" y="83" text-anchor="middle" font-size="10" fill="var(--ink)">Madinah</text>
    <text x="255" y="97" text-anchor="middle" font-size="10" fill="var(--ink-mute)">h=714</text>

    <circle cx="430" cy="70" r="31" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="430" y="68" text-anchor="middle" font-size="10" fill="var(--ink)">Buraydah</text>
    <text x="430" y="82" text-anchor="middle" font-size="10" fill="var(--ink-mute)">h=325</text>

    <circle cx="230" cy="265" r="28" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="230" y="263" text-anchor="middle" font-size="11" fill="var(--ink)">Taif</text>
    <text x="230" y="277" text-anchor="middle" font-size="10" fill="var(--ink-mute)">h=746</text>

    <circle cx="420" cy="255" r="28" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="420" y="253" text-anchor="middle" font-size="11" fill="var(--ink)">Afif</text>
    <text x="420" y="267" text-anchor="middle" font-size="10" fill="var(--ink-mute)">h=391</text>

    <circle cx="590" cy="168" r="33" fill="var(--accent-soft)" stroke="var(--teal)" stroke-width="3"/>
    <text x="590" y="166" text-anchor="middle" font-size="11" fill="var(--teal)" font-weight="700">Riyadh</text>
    <text x="590" y="180" text-anchor="middle" font-size="10" fill="var(--ink-mute)">h=0</text>

    <line x1="50" y1="310" x2="650" y2="310" stroke="var(--rule)"/>
    <text x="50" y="336" font-size="12" fill="var(--gold)" font-weight="700">Greedy (h only):</text>
    <text x="205" y="336" font-size="12" fill="var(--ink)">Makkah → Madinah → Buraydah → Riyadh</text>
    <text x="545" y="336" font-size="12" fill="var(--gold)" font-weight="700">1460 km</text>
    <text x="50" y="362" font-size="12" fill="var(--teal)" font-weight="700">A* (g + h):</text>
    <text x="205" y="362" font-size="12" fill="var(--ink)">Makkah → Taif → Afif → Riyadh</text>
    <text x="545" y="362" font-size="12" fill="var(--teal)" font-weight="700">940 km</text>
  </svg>
  <div class="diagram-caption">Road distances are approximate. Straight-line values were computed from city coordinates.</div>
</div>

<p>Watch the trap. In a straight line, Madinah (714 km) really is closer to Riyadh than Taif (746 km). Greedy search sees only that number, drives north, and ends up 520 km worse off — because the roads from Madinah to Riyadh are long, while the road from Makkah to Taif is only 90 km.</p>

<p>A* does the arithmetic instead. From Makkah it compares two options:</p>

<ul class="steps">
  <li><strong>Through Taif</strong><p>$g = 90$, $h = 746$, so $f = 836$.</p></li>
  <li><strong>Through Madinah</strong><p>$g = 450$, $h = 714$, so $f = 1164$.</p></li>
</ul>

<p>836 is smaller, so A* opens Taif first. Then Afif: $g = 90 + 420 = 510$, $f = 510 + 391 = 901$ — still smaller than Madinah's 1164, so Afif opens next. From Afif, Riyadh appears with $g = 940$ and $f = 940$. That is still below 1164, so A* takes it out of the frontier and returns the 940 km route. It never even opened Madinah.</p>

<pre><code class="language-python">import heapq

def a_star(problem, h):
    """A* = best-first search using f(n) = g(n) + h(n)."""
    start = Node(problem.initial)
    frontier = [(h(start.state), 0, start)]   # (f, tie-breaker, node)
    reached = {problem.initial: start}
    counter = 0

    while frontier:
        _, _, node = heapq.heappop(frontier)

        if problem.is_goal(node.state):       # test on the way OUT
            return node

        for child in expand(problem, node):
            s = child.state
            # keep the child if it is new, or cheaper than the path we had
            if s not in reached or child.path_cost &lt; reached[s].path_cost:
                reached[s] = child
                counter += 1
                f = child.path_cost + h(s)
                heapq.heappush(frontier, (f, counter, child))
    return None
</code></pre>

<h3>What A* guarantees</h3>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">✅</span>
      <strong>Complete</strong>
      <p>As long as the branching factor is finite and every step costs more than zero.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🏆</span>
      <strong>Optimal</strong>
      <p>With an admissible h in tree-like search, and a consistent h when using a reached table.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">⚡</span>
      <strong>The best you can do</strong>
      <p>No other optimal algorithm using the same h opens fewer nodes.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">💾</span>
      <strong>Hungry for memory</strong>
      <p>A* keeps every node it creates. On hard problems it fills the RAM before it runs out of time.</p>
    </div>
  </div>
</div>

<p class="reading-time">9 min read</p>
        `
      },

      {
        title: "When A* runs out of memory: the practical versions",
        body: `
<p>A* is optimal and efficient — and often unusable, because it stores every node it creates. On a large map it will eat all the memory in minutes. Each version below answers the same question in a different way: <em>what do we give up to fit in memory, or in time?</em></p>

<h3>IDA* — iterative deepening on f</h3>

<p>Run a depth-first search that cuts off any node whose $f$ is above a limit. If no goal is found, raise the limit to the smallest $f$ you cut off, and run again. Same idea as IDS, but the limit is on $f$ instead of depth.</p>

<p><strong>You give up:</strong> some repeated work. <strong>You gain:</strong> memory drops from exponential to $O(bd)$, because only the current path is stored. This is how the 15-puzzle was first solved optimally.</p>

<h3>Weighted A* — buy speed with a small, known loss</h3>

<p>Use $f(n) = g(n) + W \\cdot h(n)$ with $W &gt; 1$. Making the guess bigger pushes the search straight at the goal, so it opens far fewer nodes.</p>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">The guarantee you keep</div>
    <p>The answer is no longer the cheapest, but the damage has a limit: the cost is at most $W$ times the best possible cost. With $W = 1.5$ you might open a hundred times fewer nodes and accept a route at most 50% longer — usually much closer than that in practice. Most shipped navigation and game systems run in this mode.</p>
  </div>
</div>

<h3>Beam search — keep only the best k</h3>

<p>After each expansion, throw away everything except the $k$ best nodes in the frontier. Memory becomes constant, $O(k)$. You may throw away the only node on the path to the goal, so you lose both completeness and optimality. Speech recognition and machine translation systems have accepted this trade for decades.</p>

<h3>Bidirectional search — dig from both ends</h3>

<p>Search forward from the start and backward from the goal until the two searches meet. Two trees of depth $d/2$ are much smaller than one tree of depth $d$: $O(b^{d/2})$ instead of $O(b^d)$. With $b = 10$ and $d = 12$, that is two million nodes instead of a trillion.</p>

<p><strong>The catch:</strong> you must be able to search backwards, you need one known goal state (not just a condition), and detecting the meeting point is harder than it sounds.</p>

<h3>Choosing in practice</h3>

<div class="diagram">
  <svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <line x1="30" y1="42" x2="670" y2="42" stroke="var(--rule)"/>
    <text x="40" y="30" font-size="12" fill="var(--ink-soft)" font-weight="700">Your situation</text>
    <text x="400" y="30" font-size="12" fill="var(--ink-soft)" font-weight="700">Use</text>

    <text x="40" y="72" font-size="12" fill="var(--ink)">No heuristic, all steps cost the same</text>
    <text x="400" y="72" font-size="12" fill="var(--accent)" font-weight="600">BFS, or IDS if memory is tight</text>

    <text x="40" y="102" font-size="12" fill="var(--ink)">No heuristic, steps have different costs</text>
    <text x="400" y="102" font-size="12" fill="var(--accent)" font-weight="600">Uniform-cost search</text>

    <text x="40" y="132" font-size="12" fill="var(--ink)">Good heuristic, you need the cheapest path</text>
    <text x="400" y="132" font-size="12" fill="var(--accent)" font-weight="600">A*</text>

    <text x="40" y="162" font-size="12" fill="var(--ink)">Good heuristic, but A* fills the memory</text>
    <text x="400" y="162" font-size="12" fill="var(--accent)" font-weight="600">IDA*</text>

    <text x="40" y="192" font-size="12" fill="var(--ink)">You need an answer in 16 milliseconds (one game frame)</text>
    <text x="400" y="192" font-size="12" fill="var(--accent)" font-weight="600">Weighted A* or beam search</text>
    <line x1="30" y1="208" x2="670" y2="208" stroke="var(--rule)"/>
  </svg>
  <div class="diagram-caption">There is no "best" search algorithm. There is only the best fit for your limits.</div>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>Your A* pathfinder works on a small test map, but crashes with an out-of-memory error on the full game world. Give two fixes that still return a usable route, and say what each one costs you.</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>IDA*</strong> — keeps the cheapest path and cuts memory to the current path, but repeats work, so it costs CPU time. <strong>Weighted A*</strong> (or beam search) — opens far fewer nodes and answers fast, but the route may be longer: at most W times the best for weighted A*, with no limit for beam search. A third practical option: make the map coarser (search room to room first, then inside the chosen room).</p>
  </details>
</div>

<p class="reading-time">7 min read</p>
        `
      },

      {
        title: "Where you will actually meet these algorithms",
        body: `
<p>Search is not only a classroom exercise. It is running right now on the phone in your pocket.</p>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">🧭</span>
      <strong>Maps and navigation</strong>
      <p>Your maps app runs improved versions of A* and Dijkstra over road graphs with millions of edges, and re-plans when traffic changes.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🕋</span>
      <strong>Crowd routing in Hajj and Umrah</strong>
      <p>Planning safe walking routes and gate assignments for very large crowds is a search over paths with capacity limits.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🎮</span>
      <strong>Game characters</strong>
      <p>Every character that walks around an obstacle to reach you is running A* on a navigation mesh, usually weighted for speed.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🤖</span>
      <strong>Robots and self-driving</strong>
      <p>Warehouse robots and autonomous cars search for a path that reaches the target without collisions.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🚚</span>
      <strong>Delivery and logistics</strong>
      <p>Delivery companies search the space of possible routes and orders to cut driving time and fuel.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">📅</span>
      <strong>Exam timetables</strong>
      <p>Assigning exams to rooms and time slots at a university is a search through a huge space of possible timetables.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🌐</span>
      <strong>Network routing</strong>
      <p>Internet routing protocols such as OSPF run Dijkstra to build their forwarding tables.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🧠</span>
      <strong>Assistants that plan their own steps</strong>
      <p>The systems industry calls <em>agentic AI</em> (Module 2) decide a sequence of steps towards a goal — and finding that sequence is a search problem.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🧩</span>
      <strong>Puzzles and proofs</strong>
      <p>Rubik's cube solvers, Sudoku solvers, and automatic theorem provers are all search with strong heuristics.</p>
    </div>
  </div>
</div>

<h3>The whole module in one paragraph</h3>

<p>Describe your problem with five parts. Explore it with a frontier, and remember the states you reached. Judge every algorithm on completeness, optimality, time, and memory — and expect memory to be the limit that stops you. With no hint, use BFS or UCS when you can afford the memory, and IDS when you cannot. With a hint, add it to the cost you already paid, and you have A*, which returns the cheapest path whenever the hint is never too high. When A* is too slow or too big, give up one guarantee — memory with IDA*, optimality with weighted A* or beam search — and keep going.</p>

<div class="aha">
  <div class="aha-label">Where this takes you next</div>
  <p>Every remaining module is this module in a costume. Local search (Module 4) throws away the path and keeps only the current state. Adversarial search (Module 5) searches a tree where an opponent chooses every second move. Constraint satisfaction (Module 6) searches partial assignments, and its heuristics choose which variable to try next. Logical agents (Module 7) search a space of conclusions instead of a space of places.</p>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>You are assigning 400 exams to rooms and time slots at the university, with rules about room capacity and students who must not have two exams at once. What are the five parts here — and what makes this different from finding a route?</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>States:</strong> partial timetables (some exams placed, some not). <strong>Actions:</strong> place the next exam in a legal room and slot. <strong>Transition model:</strong> the timetable with that exam added. <strong>Goal test:</strong> all exams placed and no rule broken. <strong>Cost:</strong> whatever you want to reduce — clashes, walking distance, or exam days.</p>
    <p>The difference: here <em>the path does not matter</em>. Nobody cares in which order you placed the exams, only what the final timetable looks like. That single observation is what leads to Modules 4 and 6.</p>
  </details>
</div>

<p class="reading-time">6 min read</p>
        `
      }
    ],
    cheatsheet: [
      {
        group: "The five parts of a search problem",
        items: [
          "<strong>Initial state</strong> — where the agent starts",
          "<strong>Actions</strong> — what it can do in a state",
          "<strong>Transition model</strong> — where each action leads",
          "<strong>Goal test</strong> — how to know you are done",
          "<strong>Action cost</strong> — the price of one step; add them for the path cost"
        ]
      },
      {
        group: "Formulas to memorise",
        items: [
          "<code>g(n)</code> = cost already paid from the start to n",
          "<code>h(n)</code> = guessed cost from n to the goal",
          "<code>f(n) = g(n) + h(n)</code> — this is A*",
          "<code>h(n) = 0</code> → A* becomes UCS",
          "ignore <code>g(n)</code> → A* becomes greedy search",
          "Admissible: <code>h(n) ≤ real remaining cost</code>",
          "Consistent: <code>h(n) ≤ c + h(n')</code>"
        ]
      },
      {
        group: "Which algorithm, when",
        items: [
          "Equal step costs, no hint → <strong>BFS</strong>",
          "Different step costs, no hint → <strong>UCS</strong>",
          "Memory is tight, depth unknown → <strong>IDS</strong>",
          "Good hint, need cheapest path → <strong>A*</strong>",
          "A* fills the memory → <strong>IDA*</strong>",
          "Answer needed in milliseconds → <strong>weighted A*</strong> or <strong>beam search</strong>"
        ]
      },
      {
        group: "Complexity table",
        items: [
          "BFS — complete; optimal if equal costs; time and memory <code>O(b^d)</code>",
          "UCS — complete; always optimal; cost depends on the smallest step",
          "DFS — not complete (tree-like), not optimal; time <code>O(b^m)</code>, memory <code>O(bm)</code>",
          "DLS — complete only if limit ≥ d; time <code>O(b^ℓ)</code>, memory <code>O(bℓ)</code>",
          "IDS — complete; optimal if equal costs; time <code>O(b^d)</code>, memory <code>O(bd)</code>",
          "Bidirectional — <code>O(b^(d/2))</code> instead of <code>O(b^d)</code>"
        ]
      },
      {
        group: "Mistakes that cost marks",
        items: [
          "Saying BFS is always optimal — it is not, unless all steps cost the same",
          "Testing the goal when a node is <em>created</em> in UCS or A* instead of when it is <em>taken out</em>",
          "Confusing a state with a node: one state can appear in many nodes",
          "Using an average speed to turn distance into time — it breaks admissibility; use the maximum speed",
          "Forgetting the reached table and then wondering why the search never stops"
        ]
      },
      {
        group: "The Makkah → Riyadh example",
        items: [
          "Greedy uses h only → Madinah looks nearer (714 &lt; 746) → 1460 km",
          "A* uses g + h → Taif f = 90 + 746 = 836, Madinah f = 450 + 714 = 1164",
          "A* opens Taif, then Afif (f = 901), then reaches Riyadh at f = 940",
          "<strong>A* answer: 940 km. Greedy answer: 1460 km.</strong>",
          "Lesson: a good-looking guess is not enough — you must count what you already spent"
        ]
      }
    ],
    resources: [
      { type: "video", title: "Search — Lecture 0, CS50's Introduction to AI with Python", author: "Brian Yu, Harvard University — watch this one first", url: "https://www.youtube.com/watch?v=WbzNRTTrX0g" },
      { type: "video", title: "Dijkstra's Algorithm", author: "Dr Mike Pound, Computerphile — 11 minutes, very clear", url: "https://www.youtube.com/watch?v=GazC3A4OQTE" },
      { type: "video", title: "A* (A Star) Search Algorithm", author: "Dr Mike Pound, Computerphile — watch straight after the Dijkstra video", url: "https://www.youtube.com/watch?v=ySN5Wnu88nE" },
      { type: "video", title: "Search: Optimal, Branch and Bound, A* (Lecture 5)", author: "Patrick Winston, MIT 6.034 — the classic university lecture", url: "https://www.youtube.com/watch?v=gGQ-vAmdAOI" },
      { type: "video", title: "A* Pathfinding (E01: how the algorithm works)", author: "Sebastian Lague — A* from a game developer's view", url: "https://www.youtube.com/watch?v=-L-WgKMFuhE" },
      { type: "video", title: "Maze Solving — search algorithms in practice", author: "Dr Mike Pound, Computerphile", url: "https://www.youtube.com/watch?v=rop0W4QDOUI" },
      { type: "blog", title: "Introduction to the A* Algorithm (interactive)", author: "Amit Patel, Red Blob Games — move the sliders and watch the search", url: "https://www.redblobgames.com/pathfinding/a-star/introduction.html" },
      { type: "blog", title: "PathFinding.js — visual race between search algorithms", author: "Xueqiao Xu — draw walls and compare BFS, Dijkstra, and A*", url: "https://qiao.github.io/PathFinding.js/visual/" },
      { type: "docs", title: "Artificial Intelligence: A Modern Approach, 4th ed. — Chapter 3", author: "Russell & Norvig — the course textbook; Chapter 3 is this module", url: "https://aima.cs.berkeley.edu/" },
      { type: "docs", title: "aima-python — working code for every algorithm in the book", author: "AIMA code repository, GitHub", url: "https://github.com/aimacode/aima-python" },
      { type: "docs", title: "MIT 6.034 Artificial Intelligence — all lecture videos and notes", author: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/resources/lecture-videos/" }
    ]
  },

  // ==================== MODULE 4 ====================
  {
    id: 4,
    title: "Local Search and Optimization",
    subtitle: "Hill Climbing, Simulated Annealing, Genetic Algorithms, Gradient Descent",
    shortDesc: "When nobody cares how you got there — only what the final answer looks like.",
    hours: 8,
    story: "In Module 3 the answer was a path. Here the answer is a single state, and the road you took to reach it is thrown away. That small change lets us attack problems far too large for A*: timetables with millions of arrangements, placing facilities in a city, and training the models you will meet later in your degree.",
    objectives: [
      "Explain when keeping the path is a waste, and local search is the better tool.",
      "Trace hill climbing, and name the three shapes that trap it.",
      "Explain how simulated annealing escapes a local maximum, and why the temperature must fall.",
      "Describe the genetic algorithm cycle: selection, crossover, mutation.",
      "Apply gradient descent to a continuous problem and explain the learning rate."
    ],
    terms: [
      { term: "Local search", meaning: "Search that keeps only the current state and tries to improve it, instead of building a tree of paths." },
      { term: "State space landscape", meaning: "A picture of the problem as hills and valleys: position = a state, height = how good that state is." },
      { term: "Objective function", meaning: "The number we are trying to make as large (or as small) as possible. Height on the landscape." },
      { term: "Global maximum", meaning: "The best state in the whole problem — the highest peak." },
      { term: "Local maximum", meaning: "A state better than all its neighbours, but not the best overall. A small hill next to a mountain." },
      { term: "Plateau", say: "pla-TOH", meaning: "A flat area where all neighbours have the same value, so the search has no direction to follow." },
      { term: "Ridge", meaning: "A narrow rising path where every single step sideways goes down, so the search stops even though the top is further along." },
      { term: "Hill climbing", meaning: "Always move to the best neighbour. Stop when no neighbour is better." },
      { term: "Simulated annealing", say: "a-NEE-ling", meaning: "Hill climbing that sometimes accepts a worse state on purpose, less and less often as it runs, to escape local maxima." },
      { term: "Temperature", meaning: "The control number in simulated annealing. High = accept bad moves often. Low = behave like plain hill climbing." },
      { term: "Local beam search", meaning: "Keeps k states at once instead of one, and picks the best k successors of all of them together." },
      { term: "Genetic algorithm", meaning: "Keeps a population of states, combines pairs of good ones, and adds small random changes." },
      { term: "Crossover", meaning: "Making a new state by taking part of one parent state and part of another." },
      { term: "Mutation", meaning: "A small random change in a state, which keeps new possibilities alive in the population." },
      { term: "Gradient descent", meaning: "For continuous problems: repeatedly step in the direction that decreases the value fastest." },
      { term: "Learning rate", meaning: "The size of each step in gradient descent. Too small is slow; too large jumps over the answer." }
    ],
    sections: [
      {
        title: "When the road does not matter",
        body: `
<p>Look at two problems side by side.</p>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Module 3 problem</span>
    <h4>Driving Makkah to Riyadh</h4>
    <ul>
      <li>The answer is a <strong>route</strong></li>
      <li>The order of the steps is the whole answer</li>
      <li>Cost is paid along the way</li>
      <li>Path-based search (BFS, UCS, A*)</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Module 4 problem</span>
    <h4>Building the exam timetable</h4>
    <ul>
      <li>The answer is a <strong>timetable</strong></li>
      <li>Nobody cares in what order you filled it in</li>
      <li>Cost is judged on the final result only</li>
      <li>Local search</li>
    </ul>
  </div>
</div>

<div class="definition">
  <p><strong>Local search</strong> keeps only the current state in memory and tries to improve it step by step. It does not store paths, so its memory use is tiny and constant, and it can work in state spaces far too large to draw a tree for.</p>
</div>

<h3>The landscape picture</h3>

<p>Imagine the problem as a landscape. Every possible state is a position on the ground, and the height is how good that state is — the <strong>objective function</strong>. Local search is a walker who can only feel the ground immediately around their feet.</p>

<div class="diagram">
  <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">THE STATE SPACE LANDSCAPE</text>
    <path d="M40 210 C 110 210, 120 150, 170 150 C 220 150, 230 200, 300 200 C 360 200, 370 70, 440 70 C 510 70, 520 185, 590 185 C 640 185, 650 205, 660 210"
          fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <line x1="40" y1="230" x2="660" y2="230" stroke="var(--rule)"/>
    <text x="350" y="250" text-anchor="middle" font-size="11" fill="var(--ink-mute)">every possible state, side by side</text>
    <text x="20" y="140" font-size="11" fill="var(--ink-mute)" transform="rotate(-90 20 140)">how good</text>

    <circle cx="170" cy="150" r="6" fill="var(--gold)"/>
    <text x="170" y="138" text-anchor="middle" font-size="11" fill="var(--gold)" font-weight="600">local maximum</text>
    <circle cx="440" cy="70" r="7" fill="var(--teal)"/>
    <text x="440" y="56" text-anchor="middle" font-size="11" fill="var(--teal)" font-weight="700">global maximum</text>
    <line x1="230" y1="197" x2="295" y2="199" stroke="var(--ink-mute)" stroke-width="4" stroke-linecap="round"/>
    <text x="262" y="219" text-anchor="middle" font-size="11" fill="var(--ink-soft)">plateau</text>
  </svg>
  <div class="diagram-caption">The walker can only feel the slope under their feet — never the whole map.</div>
</div>

<h3>Where you meet these problems</h3>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">📅</span>
      <strong>Timetables and rosters</strong>
      <p>Exams, lectures, shifts in a hospital. Only the final schedule is judged.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🚑</span>
      <strong>Where to place facilities</strong>
      <p>Ambulance stations, warehouses, or mobile towers in a city, placed to reduce distance for everyone.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🚚</span>
      <strong>Delivery routes for a whole fleet</strong>
      <p>Which driver takes which orders. The final assignment is what matters.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">📉</span>
      <strong>Training models</strong>
      <p>Choosing the numbers inside a neural network is continuous local search — gradient descent, at the end of this module.</p>
    </div>
  </div>
</div>

<p class="reading-time">5 min read</p>
        `
      },

      {
        title: "Hill climbing, and the three traps",
        body: `
<p>The simplest local search there is: look at all your neighbours, move to the best one, repeat. Stop when no neighbour is better than where you stand.</p>

<div class="analogy">
  <span class="analogy-label">Climbing sand dunes in thick fog</span>
  <p>You want the highest point in the dunes, but you can only see one metre around you. So you feel the ground and always step upward. Eventually every direction goes down, and you stop.</p>
  <p>You are standing on <em>a</em> summit. Whether it is <em>the</em> summit, you have no way of knowing — the fog never lifts.</p>
</div>

<pre><code class="language-python">def hill_climbing(problem):
    current = problem.initial_state()
    while True:
        neighbours = problem.neighbours(current)
        best = max(neighbours, key=problem.value)
        if problem.value(best) &lt;= problem.value(current):
            return current          # no neighbour is better: stop
        current = best
</code></pre>

<p>It is fast, uses almost no memory, and often finds a good answer quickly. It also fails in three specific ways — know all three by name.</p>

<ol class="steps">
  <li><strong>Local maximum</strong><p>A small hill next to a mountain. Every neighbour is worse, so the search stops, far below the best answer.</p></li>
  <li><strong>Plateau</strong><p>A wide flat area. All neighbours are equal, so there is no direction to follow. The search either stops early or wanders at random.</p></li>
  <li><strong>Ridge</strong><p>The nastiest one. The ground rises along a narrow line, but every step you are allowed to take goes slightly down. You stop even though the top is clearly further along the ridge.</p></li>
</ol>

<h3>Cheap fixes that work surprisingly well</h3>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">🎲</span>
      <strong>Random-restart hill climbing</strong>
      <p>Run it again from a new random start, many times, and keep the best result. If one run has a 20% chance of finding the top, ten runs almost certainly will.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">↔️</span>
      <strong>Allow sideways moves</strong>
      <p>Let the search cross a plateau by accepting equal-value moves — but cap the number, or it will walk in circles forever.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🎯</span>
      <strong>Stochastic hill climbing</strong>
      <p>Pick randomly among the uphill moves instead of always the steepest. Slower per step, but it explores more.</p>
    </div>
  </div>
</div>

<div class="aha">
  <div class="aha-label">Why random restarts are so strong</div>
  <p>If a single run succeeds with probability p, you need about 1/p runs on average to succeed once. With p = 0.1 that is ten quick runs — and each run is cheap, because hill climbing is cheap. For the 8-queens problem, random-restart hill climbing solves almost every instance in well under a second, even though a single run fails most of the time.</p>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>Your hill-climbing timetable solver returns a different answer every time you run it, and the quality varies a lot. Is this a bug?</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>No.</strong> It starts from a random state, so it climbs a different hill each time and stops on a different local maximum. The fix is not to remove the randomness — it is to use it: run the solver many times and keep the best result. That is random-restart hill climbing.</p>
  </details>
</div>

<p class="reading-time">7 min read</p>
        `
      },

      {
        title: "Simulated annealing: going down to go higher",
        body: `
<p>Hill climbing never accepts a worse state, and that is exactly why it gets stuck. Simulated annealing fixes it with one strange rule: <em>sometimes accept a worse state on purpose</em>.</p>

<div class="analogy">
  <span class="analogy-label">A metal workshop</span>
  <p>The name comes from metalwork. To make metal strong, you heat it until the atoms move freely, then cool it <em>slowly</em>. The atoms settle into a low-energy, well-ordered arrangement. Cool it too fast and you freeze in the flaws.</p>
  <p>Simulated annealing does the same to a search: shake the answer hard at the start, then shake it less and less, until it settles.</p>
</div>

<h3>The rule</h3>

<ol class="steps">
  <li><strong>Pick a random neighbour</strong><p>Not the best one — any one.</p></li>
  <li><strong>If it is better, always take it</strong><p>Same as hill climbing.</p></li>
  <li><strong>If it is worse, take it with a probability</strong><p>The probability depends on two things: how much worse it is, and the current <strong>temperature</strong>. Slightly worse and hot → usually accepted. Much worse and cold → almost never accepted.</p></li>
  <li><strong>Lower the temperature and repeat</strong><p>The schedule that lowers the temperature is the one setting you must tune.</p></li>
</ol>

<pre><code class="language-python">import math, random

def simulated_annealing(problem, schedule):
    current = problem.initial_state()
    for t in range(1, 100000):
        T = schedule(t)                 # temperature falls as t grows
        if T &lt;= 0:
            return current
        nxt = random.choice(problem.neighbours(current))
        delta = problem.value(nxt) - problem.value(current)
        if delta &gt; 0 or random.random() &lt; math.exp(delta / T):
            current = nxt               # better, or accepted anyway
    return current
</code></pre>

<div class="aha">
  <div class="aha-label">Why the temperature must fall</div>
  <p>Keep the temperature high forever and the search accepts almost anything — it becomes a random walk and never settles. Start it at zero and it is plain hill climbing, stuck on the first hill. The whole method lives in the middle: explore widely first, then commit. If it is cooled slowly enough, simulated annealing is guaranteed to find the global maximum — but "slowly enough" can mean impractically slow, so in real work we cool faster and accept a very good answer instead of a perfect one.</p>
</div>

<h3>Local beam search: k walkers instead of one</h3>

<p>A different idea. Keep <strong>k</strong> states at once. Generate all their neighbours, then keep the best k of the whole set and drop the rest.</p>

<p>This is not the same as running k separate searches: the walkers share information, because the best k are chosen from everyone's neighbours together. If one walker finds a promising region, the others get pulled into it. The weakness is the mirror image — all k can crowd into the same area and lose their variety. <strong>Stochastic beam search</strong> fixes that by choosing the survivors randomly, with better states more likely to be chosen.</p>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>Someone sets the temperature in their annealing solver to a constant high value because "more exploring is better". What will happen?</p>
  <details>
    <summary>Show answer</summary>
    <p>The solver accepts almost every move, good or bad, so it wanders randomly and never settles anywhere. It will end wherever it happened to be when time ran out — no better than picking a random state. Exploration is only useful if it is followed by commitment, which is what the falling temperature provides.</p>
  </details>
</div>

<p class="reading-time">7 min read</p>
        `
      },

      {
        title: "Genetic algorithms: breeding better answers",
        body: `
<p>All the methods so far improve one state — or k separate states. Genetic algorithms do something different: they <em>combine</em> two good states into a new one.</p>

<div class="analogy">
  <span class="analogy-label">Breeding date palms</span>
  <p>A farmer has one variety with excellent fruit but poor heat tolerance, and another that survives anything but gives ordinary dates. He crosses them, hoping for offspring with the good traits of both. Most offspring are unremarkable. A few are better than either parent — and those become the parents of the next generation.</p>
  <p>That is the entire algorithm.</p>
</div>

<h3>The cycle</h3>

<div class="diagram">
  <svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">ONE GENERATION</text>

    <rect x="30" y="60" width="130" height="80" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="95" y="92" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="700">Population</text>
    <text x="95" y="114" text-anchor="middle" font-size="11" fill="var(--ink-soft)">many states</text>

    <path d="M165 100 H 205" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#ga)"/>

    <rect x="210" y="60" width="130" height="80" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="275" y="92" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="700">Selection</text>
    <text x="275" y="114" text-anchor="middle" font-size="11" fill="var(--ink-soft)">better = more likely</text>

    <path d="M345 100 H 385" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#ga)"/>

    <rect x="390" y="60" width="130" height="80" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="455" y="92" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="700">Crossover</text>
    <text x="455" y="114" text-anchor="middle" font-size="11" fill="var(--ink-soft)">mix two parents</text>

    <path d="M525 100 H 565" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#ga)"/>

    <rect x="570" y="60" width="100" height="80" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
    <text x="620" y="92" text-anchor="middle" font-size="12" fill="var(--accent)" font-weight="700">Mutation</text>
    <text x="620" y="114" text-anchor="middle" font-size="11" fill="var(--ink-soft)">small random</text>
    <text x="620" y="129" text-anchor="middle" font-size="11" fill="var(--ink-soft)">change</text>

    <path d="M620 145 V 175 H 95 V 145" fill="none" stroke="var(--gold)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ga2)"/>
    <text x="350" y="196" text-anchor="middle" font-size="11" fill="var(--gold)" font-weight="600">the children become the next population — repeat</text>

    <defs>
      <marker id="ga" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--ink-mute)"/></marker>
      <marker id="ga2" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--gold)"/></marker>
    </defs>
  </svg>
  <div class="diagram-caption">Selection keeps what works, crossover combines it, mutation keeps new options alive.</div>
</div>

<div class="definition">
  <p>Each state is written as a string, often called a <strong>chromosome</strong> — for example the timetable "exam 1 in slot 3, exam 2 in slot 7, ..." becomes <code>3 7 1 5 2 ...</code>. <strong>Crossover</strong> cuts two parent strings at a point and swaps the tails. <strong>Mutation</strong> changes one position at random.</p>
</div>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">Crossover only helps if the pieces mean something</div>
    <p>Cutting and swapping is useful when a part of the string is a meaningful building block on its own — a good morning schedule, a good set of routes for the east of the city. If the positions in your string have no independent meaning, crossover is just organised vandalism, and simulated annealing will usually beat it. Genetic algorithms are not magic: they are a good fit for some problem shapes and a poor fit for others.</p>
  </div>
</div>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "Gradient descent: local search on smooth ground",
        body: `
<p>Everything so far assumed you can list your neighbours. But what if the choices are continuous — a temperature between 18 and 26 degrees, a position anywhere in a city, a number anywhere on the line? There are infinitely many neighbours and you cannot try them all.</p>

<div class="analogy">
  <span class="analogy-label">Walking downhill in fog, again — but the ground is smooth</span>
  <p>You cannot see the valley. But you can feel which way the ground slopes under your feet, and you take a step that way. Repeat, and you reach the bottom. The slope is the <strong>gradient</strong>, and following it downward is <strong>gradient descent</strong>.</p>
</div>

<div class="definition">
  <p>Gradient descent repeatedly updates the current point: $x \\leftarrow x - \\alpha \\nabla f(x)$. Here $\\nabla f(x)$ is the direction of steepest increase, the minus sign turns it downhill, and $\\alpha$ is the <strong>learning rate</strong> — the size of each step.</p>
</div>

<h3>A concrete problem</h3>

<p>A delivery company wants to place one new distribution centre so that the total distance to all its shops is as small as possible. Shop positions are fixed coordinates. The centre can be anywhere — continuous. Start with a guess, compute which direction reduces the total distance fastest, step that way, and repeat until the steps stop changing anything.</p>

<pre><code class="language-python">def gradient_descent(gradient, x, learning_rate=0.1, steps=1000):
    """Follow the slope downhill from a starting point x."""
    for _ in range(steps):
        g = gradient(x)                 # which way is uphill?
        x = x - learning_rate * g       # step the other way
    return x
</code></pre>

<h3>The learning rate is the whole story</h3>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Too small</span>
    <h4>Safe but painful</h4>
    <ul>
      <li>Every step barely moves</li>
      <li>Thousands of steps to arrive</li>
      <li>May stop early because progress looks like zero</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Too large</span>
    <h4>Fast but unstable</h4>
    <ul>
      <li>Jumps over the bottom to the other side</li>
      <li>Bounces back and forth, getting worse</li>
      <li>Can run away to infinity</li>
    </ul>
  </div>
</div>

<div class="aha">
  <div class="aha-label">This is the same algorithm as hill climbing</div>
  <p>Hill climbing looks at a list of neighbours and moves to the best one. Gradient descent computes the direction of the best neighbour instead of listing them, because listing them is impossible. Same idea, different arithmetic — and the same weakness: it settles in the nearest valley, not necessarily the deepest one. When you train a neural network in a later course and it gets stuck, remember this module: it is local search in the fog.</p>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>Which method fits each job? (a) Placing a warehouse anywhere in a city to reduce driving. (b) Assigning 400 exams to 30 slots. (c) A timetable that keeps getting stuck at a fairly good but not great arrangement.</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>(a)</strong> Gradient descent — the position is continuous. <strong>(b)</strong> Local search over discrete arrangements: hill climbing with random restarts, or a genetic algorithm if parts of the timetable are meaningful blocks. <strong>(c)</strong> Simulated annealing — "fairly good but not great, every time" is the signature of a local maximum, and accepting occasional worse states is the standard cure.</p>
  </details>
</div>

<p class="reading-time">7 min read</p>
        `
      }
    ],
    cheatsheet: [
      {
        group: "When to use local search",
        items: [
          "The answer is a <strong>state</strong>, not a path",
          "The state space is far too large to build a tree",
          "Memory is constant — you keep one state (or k states)",
          "You give up: any guarantee of finding the best answer"
        ]
      },
      {
        group: "Landscape vocabulary",
        items: [
          "<strong>Global maximum</strong> — the best state overall",
          "<strong>Local maximum</strong> — better than its neighbours only",
          "<strong>Plateau</strong> — flat area, no direction to follow",
          "<strong>Ridge</strong> — rises along a line, but every allowed step goes down"
        ]
      },
      {
        group: "The four methods",
        items: [
          "<strong>Hill climbing</strong> — always take the best neighbour; gets stuck",
          "<strong>Simulated annealing</strong> — sometimes accept a worse state; less often as T falls",
          "<strong>Local beam search</strong> — keep k states, share information between them",
          "<strong>Genetic algorithm</strong> — population + selection + crossover + mutation",
          "<strong>Gradient descent</strong> — continuous version: <code>x ← x − α∇f(x)</code>"
        ]
      },
      {
        group: "Fixes for getting stuck",
        items: [
          "<strong>Random restarts</strong> — run again from a new start, keep the best (needs about 1/p runs)",
          "<strong>Sideways moves</strong> — cross a plateau, but cap the count",
          "<strong>Stochastic choice</strong> — pick randomly among uphill moves",
          "<strong>Higher temperature</strong> early in annealing"
        ]
      },
      {
        group: "Mistakes that cost marks",
        items: [
          "Saying hill climbing finds the best answer — it finds <em>a</em> local maximum",
          "Keeping the annealing temperature constant — it becomes a random walk",
          "Using a genetic algorithm when parts of the string carry no independent meaning",
          "Blaming a bug when a local search gives different answers each run — that is the randomness working",
          "Forgetting that gradient descent settles in the nearest valley, not the deepest"
        ]
      },
      {
        group: "Learning rate α",
        items: [
          "Too small → very slow, may look stuck",
          "Too large → jumps over the answer and oscillates",
          "No single correct value — it is tuned by experiment"
        ]
      }
    ],
    resources: [
      { type: "video", title: "Optimization — Lecture 3, CS50's Introduction to AI with Python", author: "Brian Yu, Harvard — local search, hill climbing and simulated annealing from minute 1", url: "https://www.youtube.com/watch?v=qK46ET1xk2A" },
      { type: "docs", title: "Artificial Intelligence: A Modern Approach, 4th ed. — Chapter 4", author: "Russell & Norvig — this module is Chapter 4", url: "https://aima.cs.berkeley.edu/" },
      { type: "docs", title: "aima-python — hill climbing, annealing and genetic algorithm code", author: "AIMA code repository, GitHub", url: "https://github.com/aimacode/aima-python" }
    ]
  },

  // ==================== MODULE 5 ====================
  {
    id: 5,
    title: "Adversarial Search",
    subtitle: "Minimax, Alpha-Beta Pruning, Expectiminimax",
    shortDesc: "Search when somebody else chooses every second move — and they want you to lose.",
    hours: 8,
    story: "Until now the world was neutral. Roads do not move while you drive on them. In a game, an opponent picks every second move, and picks the move that is worst for you. That single change turns search into a new problem — and gives us the algorithms that beat the world chess champion in 1997.",
    objectives: [
      "Describe a two-player zero-sum game as a search problem.",
      "Trace the minimax algorithm on a game tree and read off the best move.",
      "Apply alpha-beta pruning by hand and explain why move ordering matters so much.",
      "Use an evaluation function and a cutoff test to play under a time limit.",
      "Extend minimax to games with dice using expectiminimax."
    ],
    terms: [
      { term: "Adversarial search", say: "ad-ver-SAIR-ee-al", meaning: "Search where another agent chooses some of the moves and wants the opposite result to you." },
      { term: "Zero-sum game", meaning: "Whatever one player gains, the other loses by the same amount. Chess and tic-tac-toe are zero-sum." },
      { term: "Game tree", meaning: "The tree of all possible move sequences. Levels alternate between the two players." },
      { term: "MAX", meaning: "The player we are deciding for. MAX wants the largest final value." },
      { term: "MIN", meaning: "The opponent. MIN wants the smallest final value." },
      { term: "Ply", say: "rhymes with 'fly'", meaning: "One move by one player. Two plies (one move each) make a full round." },
      { term: "Terminal state", meaning: "A finished position: win, lose, or draw. Its value comes from the rules." },
      { term: "Utility / payoff", meaning: "The number given to a terminal state, e.g. +1 win, 0 draw, −1 loss." },
      { term: "Minimax value", meaning: "The value of a position assuming both players play their best from there on." },
      { term: "Alpha-beta pruning", say: "AL-fa BAY-ta", meaning: "Skipping branches that cannot change the final decision. Same answer as minimax, far less work." },
      { term: "Alpha (α)", meaning: "The best value MAX can already guarantee on the path so far." },
      { term: "Beta (β)", meaning: "The best value MIN can already guarantee on the path so far." },
      { term: "Evaluation function", meaning: "A quick guess at how good a non-final position is, used when we cannot search to the end." },
      { term: "Cutoff test", meaning: "The rule that stops the search early — usually a depth limit or a time limit." },
      { term: "Horizon effect", meaning: "A problem where the search stops just before a bad event, so it never sees it coming." },
      { term: "Expectiminimax", meaning: "Minimax plus chance nodes, for games with dice or shuffled cards. Chance nodes take the average, weighted by probability." }
    ],
    sections: [
      {
        title: "A game is a search problem with an enemy",
        body: `
<p>You can describe a game with the same five parts from Module 3 — with two changes that make everything harder.</p>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Module 3 search</span>
    <h4>You control every step</h4>
    <ul>
      <li>You pick the whole path</li>
      <li>The world does not fight back</li>
      <li>Answer = a sequence of actions</li>
      <li>Cost is added along the way</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Adversarial search</span>
    <h4>You control every second step</h4>
    <ul>
      <li>The opponent picks the alternate moves</li>
      <li>They choose what is worst for you</li>
      <li>Answer = a <strong>strategy</strong>: a reply to every reply</li>
      <li>Value comes at the end, from the result</li>
    </ul>
  </div>
</div>

<div class="definition">
  <p>We study <strong>two-player zero-sum games with perfect information</strong>: two players take turns, both can see the whole position, and one player's gain is exactly the other's loss. Tic-tac-toe, chess, and checkers all fit.</p>
</div>

<h3>The vocabulary</h3>

<p>The two players are called <strong>MAX</strong> and <strong>MIN</strong>. MAX is the player we are deciding for and wants the highest value; MIN is the opponent and wants the lowest. Finished positions get a <strong>utility</strong>: +1 for a MAX win, 0 for a draw, −1 for a loss. One move by one player is a <strong>ply</strong>.</p>

<div class="analogy">
  <span class="analogy-label">Planning around someone who will not help you</span>
  <p>You are arranging a match schedule with someone who gets to pick every second slot, and who will always pick the slot that is worst for you. You cannot plan a single line and hope. You must plan a <em>reply for every reply</em>: "if he takes Tuesday, I take Thursday; if he takes Thursday, I take Tuesday."</p>
  <p>That is why the answer to a game is not a path — it is a strategy.</p>
</div>

<div class="aha">
  <div class="aha-label">Why games became AI's laboratory</div>
  <p>Games have simple rules and an unarguable score, so an algorithm can be tested honestly. They are also far too large to solve by brute force: chess has roughly 35 legal moves per position and games run about 50 moves each side, which gives a tree with more nodes than there are atoms in anything you can imagine. Every technique in this module exists because that tree cannot be searched.</p>
</div>

<p class="reading-time">5 min read</p>
        `
      },

      {
        title: "Minimax: assume the opponent plays perfectly",
        body: `
<p>The core idea is one sentence: <em>at MAX levels take the largest child value, at MIN levels take the smallest, and pass the result upward.</em></p>

<div class="diagram">
  <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="20" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">MINIMAX ON A SMALL TREE</text>

    <g stroke="var(--ink-mute)" stroke-width="1.6">
      <line x1="350" y1="62" x2="180" y2="118"/><line x1="350" y1="62" x2="520" y2="118"/>
      <line x1="180" y1="142" x2="105" y2="205"/><line x1="180" y1="142" x2="255" y2="205"/>
      <line x1="520" y1="142" x2="445" y2="205"/><line x1="520" y1="142" x2="595" y2="205"/>
    </g>

    <circle cx="350" cy="50" r="20" fill="var(--accent)"/>
    <text x="350" y="56" text-anchor="middle" font-size="13" fill="#fff" font-weight="700">3</text>
    <text x="350" y="34" text-anchor="middle" font-size="11" fill="var(--accent)" font-weight="700">MAX</text>

    <circle cx="180" cy="130" r="20" fill="var(--bg-elev)" stroke="var(--gold)" stroke-width="2.5"/>
    <text x="180" y="136" text-anchor="middle" font-size="13" fill="var(--gold)" font-weight="700">3</text>
    <circle cx="520" cy="130" r="20" fill="var(--bg-elev)" stroke="var(--gold)" stroke-width="2.5"/>
    <text x="520" y="136" text-anchor="middle" font-size="13" fill="var(--gold)" font-weight="700">2</text>
    <text x="110" y="128" font-size="11" fill="var(--gold)" font-weight="700">MIN</text>

    <rect x="85" y="205" width="40" height="34" rx="5" fill="var(--bg-soft)" stroke="var(--rule)"/><text x="105" y="228" text-anchor="middle" font-size="13" fill="var(--ink)">3</text>
    <rect x="235" y="205" width="40" height="34" rx="5" fill="var(--bg-soft)" stroke="var(--rule)"/><text x="255" y="228" text-anchor="middle" font-size="13" fill="var(--ink)">12</text>
    <rect x="425" y="205" width="40" height="34" rx="5" fill="var(--bg-soft)" stroke="var(--rule)"/><text x="445" y="228" text-anchor="middle" font-size="13" fill="var(--ink)">2</text>
    <rect x="575" y="205" width="40" height="34" rx="5" fill="var(--bg-soft)" stroke="var(--rule)"/><text x="595" y="228" text-anchor="middle" font-size="13" fill="var(--ink)">8</text>

    <text x="350" y="266" text-anchor="middle" font-size="11" fill="var(--ink-soft)">MIN picks min(3,12)=3 on the left, and min(2,8)=2 on the right</text>
    <text x="350" y="286" text-anchor="middle" font-size="11" fill="var(--ink)" font-weight="600">MAX picks max(3,2)=3 → play the left move</text>
  </svg>
  <div class="diagram-caption">Notice that MAX does not get 12. MIN would never allow it.</div>
</div>

<pre><code class="language-python">def minimax(state, game):
    """Return the best move for the player about to move."""
    player = game.to_move(state)

    def max_value(state):
        if game.is_terminal(state):
            return game.utility(state, player)
        return max(min_value(game.result(state, a)) for a in game.actions(state))

    def min_value(state):
        if game.is_terminal(state):
            return game.utility(state, player)
        return min(max_value(game.result(state, a)) for a in game.actions(state))

    return max(game.actions(state),
               key=lambda a: min_value(game.result(state, a)))
</code></pre>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Minimax is pessimistic on purpose</div>
    <p>It assumes the opponent always finds their best reply. If the opponent plays badly, you do at least as well as minimax promised — never worse. That is why the assumption is safe even when it is wrong.</p>
  </div>
</div>

<p><strong>Cost:</strong> minimax is depth-first search over the game tree, so time is $O(b^m)$ and memory is $O(bm)$, where $b$ is the number of legal moves and $m$ is the depth. For tic-tac-toe that is fine. For chess it is impossible — which is the next two sections.</p>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>In the tree above, a student says "MAX should play right, because 8 is the biggest number there." What is wrong?</p>
  <details>
    <summary>Show answer</summary>
    <p>MAX does not choose the leaf — MIN does, one level down. If MAX goes right, MIN will choose 2, not 8. The value of the right branch is therefore 2, and the left branch, worth 3, is better. Always evaluate a branch by what the <em>opponent</em> will allow, not by its best leaf.</p>
  </details>
</div>

<p class="reading-time">7 min read</p>
        `
      },

      {
        title: "Alpha-beta pruning: skipping what cannot matter",
        body: `
<p>Minimax examines every leaf. Most of them cannot possibly change the decision. Alpha-beta finds those and skips them — and it returns <em>exactly</em> the same move as minimax. This is not an approximation.</p>

<div class="analogy">
  <span class="analogy-label">Buying a car</span>
  <p>You have already found a good car for 60,000 riyals. At the next showroom the salesman says the cheapest car he has starts at 75,000. You do not need to see the rest of his cars, ask about colours, or take a test drive. Nothing he can show you will beat the offer you already have.</p>
  <p>That is pruning: one fact made a whole branch irrelevant.</p>
</div>

<div class="definition">
  <p><strong>α (alpha)</strong> is the best value MAX can already guarantee along the current path. <strong>β (beta)</strong> is the best value MIN can already guarantee. When <strong>α ≥ β</strong>, stop examining this node's remaining children — nobody will ever choose to come here.</p>
</div>

<h3>Walk through it once</h3>

<p>Take the same tree. MAX explores the left branch first and learns its value is 3, so α = 3: MAX is guaranteed at least 3.</p>

<p>Now MAX starts the right branch, a MIN node. The first child is 2, so this MIN node will return <em>at most</em> 2 — MIN can already guarantee 2 or better for itself. Compare: α = 3 and β = 2, so α ≥ β. Whatever the other child holds, MIN will never return more than 2, and MAX already has 3. <strong>Skip the remaining child completely.</strong> In this tiny tree we saved one leaf. In a real game tree that same logic removes millions.</p>

<pre><code class="language-python">def alpha_beta(state, game):
    def max_value(state, alpha, beta):
        if game.is_terminal(state):
            return game.utility(state)
        v = -float('inf')
        for a in game.actions(state):
            v = max(v, min_value(game.result(state, a), alpha, beta))
            if v &gt;= beta:
                return v            # MIN would avoid this node — prune
            alpha = max(alpha, v)
        return v

    def min_value(state, alpha, beta):
        if game.is_terminal(state):
            return game.utility(state)
        v = float('inf')
        for a in game.actions(state):
            v = min(v, max_value(game.result(state, a), alpha, beta))
            if v &lt;= alpha:
                return v            # MAX would avoid this node — prune
            beta = min(beta, v)
        return v

    return max(game.actions(state),
               key=lambda a: min_value(game.result(state, a),
                                       -float('inf'), float('inf')))
</code></pre>

<h3>Move ordering decides how much you save</h3>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Worst order</span>
    <h4>Best moves examined last</h4>
    <ul>
      <li>Almost nothing can be pruned</li>
      <li>Time stays <code>O(b^m)</code></li>
      <li>Same cost as plain minimax</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Perfect order</span>
    <h4>Best moves examined first</h4>
    <ul>
      <li>Time falls to about <code>O(b^(m/2))</code></li>
      <li>Same time now searches <strong>twice as deep</strong></li>
      <li>Effective branching factor drops from b to about √b</li>
    </ul>
  </div>
</div>

<div class="aha">
  <div class="aha-label">Twice as deep is the whole game</div>
  <p>In chess, searching two extra plies is roughly the difference between a club player and a strong one. That is why engines spend real effort guessing a good move order before searching: try captures first, try the move that was best at the previous shallower depth, keep a table of positions already seen. The ordering is not a detail — it is where the strength comes from.</p>
</div>

<p class="reading-time">8 min read</p>
        `
      },

      {
        title: "Playing under a clock: evaluation and cutoff",
        body: `
<p>Even with alpha-beta, chess cannot be searched to the end. So we stop early and <em>guess</em> the value of the position we stopped at.</p>

<ol class="steps">
  <li><strong>Replace the terminal test with a cutoff test</strong><p>Stop at a fixed depth, or when the clock says stop.</p></li>
  <li><strong>Replace utility with an evaluation function</strong><p>A quick formula that estimates how good this position is for MAX.</p></li>
</ol>

<div class="definition">
  <p>An <strong>evaluation function</strong> gives a number for a non-final position. In chess the classic form is a weighted sum of features: material (pawn 1, knight and bishop 3, rook 5, queen 9), control of the centre, king safety, pawn structure. It must be fast, because it runs on millions of positions.</p>
</div>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">The horizon effect</div>
    <p>Search 6 plies deep and the program is blind to anything that happens on ply 7. A program can even learn to <em>delay</em> disaster with pointless moves that push the bad event just past its horizon — and then feel satisfied. The standard cure is to search unstable positions a little deeper (captures and checks) before trusting the evaluation, so you never stop in the middle of an exchange.</p>
  </div>
</div>

<h3>Iterative deepening, again</h3>

<p>Module 3's trick returns here for a different reason. Search to depth 2 and keep the best move. Then depth 3, then 4, until the clock runs out — and play the best move from the deepest search that finished. You always have an answer ready, and the results of shallow searches give you the move ordering that makes alpha-beta so much faster at the next depth.</p>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">♟️</span>
      <strong>Deep Blue, 1997</strong>
      <p>Beat world champion Garry Kasparov using alpha-beta with a hand-built evaluation function and special hardware. Classical search, not learning.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🎮</span>
      <strong>Game opponents</strong>
      <p>The difficulty setting in many games is simply the search depth the computer is allowed.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🤝</span>
      <strong>Negotiation and auctions</strong>
      <p>Any setting where another party responds to your move with their own interest in mind.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🛡️</span>
      <strong>Security planning</strong>
      <p>Placing checks and patrols against someone who will adapt to whatever you do.</p>
    </div>
  </div>
</div>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "When luck joins the game: expectiminimax",
        body: `
<p>Backgammon has dice. Card games have a shuffle. The opponent is still against you, but now a third thing decides part of the outcome: chance.</p>

<div class="definition">
  <p><strong>Expectiminimax</strong> adds a third kind of node. MAX nodes take the maximum, MIN nodes take the minimum, and <strong>chance nodes</strong> take the <em>average of their children, weighted by probability</em>.</p>
</div>

<div class="diagram">
  <svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="20" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">A CHANCE NODE TAKES THE AVERAGE</text>

    <g stroke="var(--ink-mute)" stroke-width="1.6">
      <line x1="350" y1="75" x2="200" y2="140"/><line x1="350" y1="75" x2="350" y2="140"/><line x1="350" y1="75" x2="500" y2="140"/>
    </g>

    <polygon points="350,38 380,62 368,98 332,98 320,62" fill="var(--bg-elev)" stroke="var(--teal)" stroke-width="2.5"/>
    <text x="350" y="76" text-anchor="middle" font-size="12" fill="var(--teal)" font-weight="700">6.0</text>
    <text x="350" y="30" text-anchor="middle" font-size="11" fill="var(--teal)" font-weight="700">CHANCE</text>

    <text x="255" y="108" font-size="11" fill="var(--gold)" font-weight="600">0.5</text>
    <text x="360" y="118" font-size="11" fill="var(--gold)" font-weight="600">0.3</text>
    <text x="445" y="108" font-size="11" fill="var(--gold)" font-weight="600">0.2</text>

    <rect x="170" y="140" width="60" height="36" rx="6" fill="var(--bg-soft)" stroke="var(--rule)"/><text x="200" y="164" text-anchor="middle" font-size="13" fill="var(--ink)">4</text>
    <rect x="320" y="140" width="60" height="36" rx="6" fill="var(--bg-soft)" stroke="var(--rule)"/><text x="350" y="164" text-anchor="middle" font-size="13" fill="var(--ink)">10</text>
    <rect x="470" y="140" width="60" height="36" rx="6" fill="var(--bg-soft)" stroke="var(--rule)"/><text x="500" y="164" text-anchor="middle" font-size="13" fill="var(--ink)">5</text>

    <text x="350" y="210" text-anchor="middle" font-size="12" fill="var(--ink-soft)">value = 0.5 × 4 + 0.3 × 10 + 0.2 × 5</text>
    <text x="350" y="232" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="700">= 2.0 + 3.0 + 1.0 = 6.0</text>
  </svg>
  <div class="diagram-caption">Not the best case, not the worst case — the expected case.</div>
</div>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">Now the exact numbers matter</div>
    <p>In plain minimax, only the <em>order</em> of the values matters: any evaluation function that ranks positions the same way produces the same move. With chance nodes that is no longer true. Doubling one value changes an average, and so can change the decision. Your evaluation numbers must be meaningful on a real scale, not just correctly ordered.</p>
  </div>
</div>

<p><strong>The cost:</strong> the branching factor now includes every dice roll, so the tree explodes and useful depth drops sharply. Pruning is still possible but much weaker, because a chance node's average cannot be bounded until you have looked at most of its children.</p>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>Why can alpha-beta prune so much less in a game with dice?</p>
  <details>
    <summary>Show answer</summary>
    <p>Pruning works because a MIN node can only go <em>down</em> as you see more children, and a MAX node can only go <em>up</em>, so a bound is known early. A chance node computes an average, which can move up or down with every new child. Without a firm bound you cannot safely skip the rest — unless you know the range the values must lie in, which allows a weaker form of pruning.</p>
  </details>
</div>

<p class="reading-time">6 min read</p>
        `
      }
    ],
    cheatsheet: [
      {
        group: "Setup",
        items: [
          "Two players, <strong>zero-sum</strong>, perfect information",
          "<strong>MAX</strong> wants the largest value, <strong>MIN</strong> the smallest",
          "<strong>Ply</strong> = one move by one player",
          "The answer is a <strong>strategy</strong>, not a single path"
        ]
      },
      {
        group: "Minimax",
        items: [
          "MAX level → take the <strong>maximum</strong> child",
          "MIN level → take the <strong>minimum</strong> child",
          "Assumes the opponent plays perfectly (safe assumption)",
          "Time <code>O(b^m)</code>, memory <code>O(bm)</code>"
        ]
      },
      {
        group: "Alpha-beta",
        items: [
          "<strong>α</strong> = best MAX can guarantee so far",
          "<strong>β</strong> = best MIN can guarantee so far",
          "Prune when <strong>α ≥ β</strong>",
          "Returns <em>exactly</em> the same move as minimax",
          "Perfect ordering → <code>O(b^(m/2))</code> = twice the depth in the same time"
        ]
      },
      {
        group: "Playing in real time",
        items: [
          "Replace terminal test with a <strong>cutoff test</strong> (depth or clock)",
          "Replace utility with an <strong>evaluation function</strong> (fast, weighted features)",
          "<strong>Iterative deepening</strong> keeps an answer ready and improves move ordering",
          "<strong>Horizon effect</strong>: trouble just past the search depth is invisible"
        ]
      },
      {
        group: "Expectiminimax",
        items: [
          "Adds <strong>chance nodes</strong> for dice and shuffles",
          "Chance node value = <strong>Σ probability × child value</strong>",
          "Exact evaluation numbers now matter, not just their order",
          "Much less pruning is possible"
        ]
      },
      {
        group: "Mistakes that cost marks",
        items: [
          "Reading a branch's value from its best leaf instead of what the opponent allows",
          "Saying alpha-beta gives an approximate answer — it gives the exact minimax move",
          "Pruning when α &gt; β only — the condition is <strong>α ≥ β</strong>",
          "Forgetting that move ordering is what makes alpha-beta fast",
          "Using plain minimax for a game with dice"
        ]
      }
    ],
    resources: [
      { type: "video", title: "Search: Games, Minimax, and Alpha-Beta — Lecture 6, MIT 6.034", author: "Patrick Winston, MIT — the clearest lecture on this topic", url: "https://www.youtube.com/watch?v=STjW3eH0Cik" },
      { type: "video", title: "Search — Lecture 0, CS50's Introduction to AI with Python", author: "Brian Yu, Harvard — adversarial search starts at 1:12:00", url: "https://www.youtube.com/watch?v=WbzNRTTrX0g" },
      { type: "docs", title: "Artificial Intelligence: A Modern Approach, 4th ed. — Chapter 5", author: "Russell & Norvig — this module is Chapter 5", url: "https://aima.cs.berkeley.edu/" },
      { type: "docs", title: "aima-python — minimax and alpha-beta implementations", author: "AIMA code repository, GitHub", url: "https://github.com/aimacode/aima-python" }
    ]
  },

  // ==================== MODULE 6 ====================
  {
    id: 6,
    title: "Constraint Satisfaction Problems",
    subtitle: "Backtracking, Heuristics, Constraint Propagation",
    shortDesc: "Search that looks inside the problem instead of treating each state as a black box — and solves it far faster because of it.",
    hours: 8,
    story: "Sudoku, exam timetables, colouring a map, assigning staff to shifts: these look like different problems, but they have one shape. Give every variable a value without breaking the rules. Because that shape is standard, we can reason about it in general — and cut away enormous parts of the search before ever visiting them.",
    objectives: [
      "Define a CSP by its variables, domains, and constraints.",
      "Trace backtracking search on a small CSP.",
      "Apply the MRV, degree, and least-constraining-value heuristics.",
      "Enforce node and arc consistency, and trace AC-3.",
      "Use forward checking to detect failure early, and min-conflicts for large problems."
    ],
    terms: [
      { term: "CSP", say: "Constraint Satisfaction Problem", meaning: "A problem defined by variables, a domain of allowed values for each, and constraints saying which combinations are legal." },
      { term: "Variable", meaning: "Something that needs a value: a region on a map, an exam, a Sudoku square." },
      { term: "Domain", meaning: "The set of values a variable is allowed to take." },
      { term: "Constraint", meaning: "A rule restricting the values that some variables can take together, e.g. \"these two exams must not be in the same slot\"." },
      { term: "Assignment", meaning: "A choice of values for some or all variables. Complete = every variable has a value. Consistent = no constraint is broken." },
      { term: "Backtracking search", meaning: "Assign one variable at a time; when a variable has no legal value left, undo the last choice and try another." },
      { term: "MRV", say: "Minimum Remaining Values", meaning: "Choose next the variable with the fewest legal values left. Also called the most-constrained-variable heuristic." },
      { term: "Degree heuristic", meaning: "Tie-breaker for MRV: choose the variable involved in the most constraints with unassigned variables." },
      { term: "LCV", say: "Least Constraining Value", meaning: "Try first the value that rules out the fewest options for the remaining variables." },
      { term: "Node consistency", meaning: "Every value in a variable's domain satisfies that variable's own single-variable constraints." },
      { term: "Arc consistency", meaning: "For every value of X there is at least one value of Y that works with it, for each constraint between X and Y." },
      { term: "AC-3", meaning: "The standard algorithm that makes a whole CSP arc consistent by repeatedly checking pairs and removing impossible values." },
      { term: "Forward checking", meaning: "After each assignment, delete the now-illegal values from the domains of the neighbouring variables. If a domain becomes empty, backtrack at once." },
      { term: "Min-conflicts", meaning: "A local search method for CSPs: pick a variable that breaks a rule and give it the value that breaks the fewest rules." }
    ],
    sections: [
      {
        title: "Same problem, many costumes",
        body: `
<p>In Module 3 a state was a black box. The algorithm could only ask "is this the goal?" and "what are the neighbours?" It knew nothing about the <em>structure</em> inside a state.</p>

<p>A CSP opens the box. Once we know that a state is a set of variables with values, and that rules connect them, we can throw away huge parts of the search space using reasoning instead of exploration.</p>

<div class="definition">
  <p>A <strong>CSP</strong> has three parts: a set of <strong>variables</strong>, a <strong>domain</strong> of allowed values for each variable, and a set of <strong>constraints</strong> saying which combinations of values are legal. A solution is a complete assignment that breaks no constraint.</p>
</div>

<h3>Example: colouring a map</h3>

<p>Colour the regions of a map so that no two neighbouring regions share a colour, using three colours only.</p>

<div class="diagram">
  <svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="20" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">MAP COLOURING AS A CONSTRAINT GRAPH</text>

    <g stroke="var(--ink-mute)" stroke-width="2">
      <line x1="150" y1="90" x2="300" y2="70"/>
      <line x1="150" y1="90" x2="250" y2="180"/>
      <line x1="300" y1="70" x2="250" y2="180"/>
      <line x1="300" y1="70" x2="450" y2="120"/>
      <line x1="250" y1="180" x2="450" y2="120"/>
      <line x1="450" y1="120" x2="570" y2="80"/>
    </g>

    <circle cx="150" cy="90" r="30" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
    <text x="150" y="94" text-anchor="middle" font-size="11" fill="var(--accent)" font-weight="700">A</text>
    <circle cx="300" cy="70" r="30" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="300" y="74" text-anchor="middle" font-size="11" fill="var(--ink)">B</text>
    <circle cx="250" cy="180" r="30" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="250" y="184" text-anchor="middle" font-size="11" fill="var(--ink)">C</text>
    <circle cx="450" cy="120" r="30" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="450" y="124" text-anchor="middle" font-size="11" fill="var(--ink)">D</text>
    <circle cx="570" cy="80" r="30" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="570" y="84" text-anchor="middle" font-size="11" fill="var(--ink)">E</text>

    <text x="350" y="228" text-anchor="middle" font-size="12" fill="var(--ink-soft)">variables = regions · domain = {red, green, blue} · a line means \"must differ\"</text>
  </svg>
  <div class="diagram-caption">The constraint graph: variables are nodes, constraints are the lines between them.</div>
</div>

<h3>The same three parts, three more times</h3>

<ol class="steps">
  <li><strong>Sudoku</strong><p><em>Variables:</em> the 81 squares. <em>Domains:</em> 1 to 9. <em>Constraints:</em> all different in each row, column, and 3×3 box.</p></li>
  <li><strong>University exam timetable</strong><p><em>Variables:</em> the exams. <em>Domains:</em> the available (room, time slot) pairs. <em>Constraints:</em> two exams sharing a student cannot share a slot; room capacity must be enough; some courses need a specific lab.</p></li>
  <li><strong>Staff shifts in a hospital</strong><p><em>Variables:</em> the shifts. <em>Domains:</em> the qualified staff. <em>Constraints:</em> nobody works two shifts in a row; each shift needs at least one senior nurse; weekly hour limits.</p></li>
</ol>

<div class="aha">
  <div class="aha-label">Why the path is irrelevant here</div>
  <p>Nobody cares in which order you filled the Sudoku grid or the timetable — only the final grid matters. That makes CSPs close cousins of Module 4's local search. The difference is that a CSP has explicit <em>rules</em>, and those rules let us <em>reason</em> — we can prove a value is impossible without ever trying it, which is something plain local search can never do.</p>
</div>

<div class="definition">
  <p>Constraints come in sizes. A <strong>unary</strong> constraint restricts one variable ("exam 12 cannot be on Sunday"). A <strong>binary</strong> constraint links two ("A and B must differ"). A <strong>global</strong> constraint links many at once — the most common being <em>all-different</em>, used in every row of a Sudoku.</p>
</div>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "Backtracking: guess, check, undo",
        body: `
<p>The basic algorithm for CSPs is simple enough to write in ten lines.</p>

<ol class="steps">
  <li><strong>Pick an unassigned variable</strong><p>Any one, for now. We will improve this choice in the next section.</p></li>
  <li><strong>Try a value from its domain</strong><p>Check it against the constraints with the variables already assigned.</p></li>
  <li><strong>If it is legal, go deeper</strong><p>Move to the next variable.</p></li>
  <li><strong>If nothing is legal, back up</strong><p>Undo the previous variable's value and try a different one. This is the <strong>backtrack</strong>.</p></li>
</ol>

<pre><code class="language-python">def backtracking_search(csp, assignment={}):
    if len(assignment) == len(csp.variables):
        return assignment                       # complete and consistent

    var = select_unassigned_variable(csp, assignment)
    for value in order_domain_values(csp, var, assignment):
        if csp.is_consistent(var, value, assignment):
            assignment[var] = value
            result = backtracking_search(csp, assignment)
            if result is not None:
                return result
            del assignment[var]                 # undo and try the next value
    return None                                 # no value worked: backtrack
</code></pre>

<div class="analogy">
  <span class="analogy-label">Filling a Sudoku with a pencil</span>
  <p>You write a 4 in a square, continue, and three squares later you find a square where nothing fits. You rub out your last choice and try 7 instead. That is backtracking, and you already know how to do it.</p>
</div>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Why the order of variables does not change the answer</div>
    <p>In a path problem, the order of actions is part of the answer. In a CSP it is not: assigning exam A then exam B gives the same final timetable as B then A. So the search tree only needs to consider <em>one</em> variable at each level, not every possible order. That single observation reduces the tree from n! leaves to d<sup>n</sup> — still large, but enormously smaller.</p>
  </div>
</div>

<p>Plain backtracking works, but it is slow, because it discovers failures late. The next two sections are the two ways to fix that: choose better, and reason earlier.</p>

<p class="reading-time">5 min read</p>
        `
      },

      {
        title: "Three heuristics that change everything",
        body: `
<p>Backtracking made two arbitrary choices: which variable to take next, and which value to try first. Choosing well can turn hours into milliseconds. The rules are counter-intuitive, so learn them as a pair.</p>

<h3>Choosing the variable: take the hardest one first</h3>

<div class="definition">
  <p><strong>MRV — Minimum Remaining Values.</strong> Choose the unassigned variable with the fewest legal values left.</p>
</div>

<div class="analogy">
  <span class="analogy-label">Seating guests at a wedding</span>
  <p>One guest can sit anywhere. Another can only sit at table 3 because of who he must avoid. Seat the difficult guest first. If you fill the easy places first, you may discover at the very end that there is nowhere left for him — and have to redo everything.</p>
</div>

<p>MRV finds failure early, which is exactly what you want: a branch that cannot work should be abandoned as soon as possible, not after twenty more assignments. When several variables tie, the <strong>degree heuristic</strong> breaks the tie: pick the one involved in the most constraints with variables that are still unassigned, because settling it simplifies the most of what remains.</p>

<h3>Choosing the value: try the most flexible one first</h3>

<div class="definition">
  <p><strong>LCV — Least Constraining Value.</strong> Try first the value that removes the fewest options from the neighbouring variables.</p>
</div>

<div class="aha">
  <div class="aha-label">Why the two rules point in opposite directions</div>
  <p>MRV picks the <em>most</em> constrained variable; LCV picks the <em>least</em> constraining value. That looks contradictory until you notice they answer different questions.</p>
  <p>You must assign every variable, so for variables you want to hit the wall as early as possible — fail fast. But you only need <em>one</em> value per variable to work, so for values you want to keep as many doors open as possible — succeed easily. Fail fast on variables, stay flexible on values.</p>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>In the map above, region A has 3 colours available, B has 2, C has 1, and D has 3. Which variable does MRV pick, and why is that better than picking A?</p>
  <details>
    <summary>Show answer</summary>
    <p>MRV picks <strong>C</strong>, with one value left. That choice is forced — there is nothing to guess — so taking it now either succeeds immediately or proves the branch is dead. Picking A first means guessing among three colours while a forced decision waits, and if C turns out to be impossible you will discover it only after wasting work on A.</p>
  </details>
</div>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "Constraint propagation: proving values impossible",
        body: `
<p>Heuristics choose better. Propagation does something stronger: it <em>removes</em> values that cannot possibly appear in any solution, before the search even tries them.</p>

<h3>Node consistency: the easy level</h3>

<p>A variable is <strong>node consistent</strong> when every value in its domain satisfies its own unary constraints. If exam 12 cannot be on Sunday, delete all Sunday slots from its domain once, at the start, and never think about them again.</p>

<h3>Arc consistency: the useful level</h3>

<div class="definition">
  <p>An arc X → Y is <strong>consistent</strong> when, for <em>every</em> value left in X's domain, there is <em>at least one</em> value in Y's domain that satisfies the constraint between them. If some value of X has no partner in Y, that value can never be part of a solution, so delete it.</p>
</div>

<div class="analogy">
  <span class="analogy-label">Sudoku, the way you already play it</span>
  <p>You look at a square and think: "this cannot be a 5, because there is already a 5 in the row." You did not try 5 and backtrack — you <em>proved</em> it impossible and crossed it out. That is arc consistency, and good Sudoku players spend more time doing this than guessing.</p>
</div>

<h3>AC-3: doing it everywhere, until nothing changes</h3>

<ol class="steps">
  <li><strong>Put every arc in a queue</strong><p>One arc for each direction of each binary constraint.</p></li>
  <li><strong>Take an arc X → Y and clean X's domain</strong><p>Remove any value of X that has no possible partner in Y.</p></li>
  <li><strong>If you removed something, wake the neighbours</strong><p>X's domain shrank, so every arc pointing <em>into</em> X must be checked again — a removal can cascade.</p></li>
  <li><strong>Stop when the queue is empty</strong><p>If any domain became empty, this CSP has no solution from here — backtrack immediately.</p></li>
</ol>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Easy Sudoku puzzles are solved by AC-3 alone</div>
    <p>Run arc consistency on an easy puzzle and the domains shrink to a single value each, with no searching at all. Harder puzzles need a guess, then propagation again, then perhaps another guess. That mixture — propagate, guess, propagate — is exactly how a modern CSP solver works.</p>
  </div>
</div>

<h3>Forward checking: propagation's cheap cousin</h3>

<p>Full AC-3 after every assignment is expensive. <strong>Forward checking</strong> does one step only: when you assign a value to X, delete that value from the domains of X's immediate neighbours. If any neighbour's domain becomes empty, stop and backtrack now instead of ten levels later.</p>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Forward checking</span>
    <h4>One step, cheap</h4>
    <ul>
      <li>Only checks the direct neighbours</li>
      <li>Very fast per assignment</li>
      <li>Misses failures that are two steps away</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Arc consistency (AC-3)</span>
    <h4>Full propagation, stronger</h4>
    <ul>
      <li>Cascades through the whole graph</li>
      <li>Detects failures much earlier</li>
      <li>Costs more per assignment — worth it on hard problems</li>
    </ul>
  </div>
</div>

<h3>And for very large problems: min-conflicts</h3>

<p>When there are thousands of variables, backtracking from an empty assignment is hopeless. Instead, start with a complete but broken assignment — everything placed, many rules violated — then repeat: pick a variable that is breaking a rule, and give it the value that breaks the fewest rules. This is local search from Module 4, applied to a CSP, and it solves problems like the million-queens arrangement in seconds.</p>

<p class="reading-time">8 min read</p>
        `
      },

      {
        title: "Putting it together: the exam timetable",
        body: `
<p>Take the problem you have met in every module of this course, and solve it properly this time.</p>

<div class="definition">
  <p><strong>Variables:</strong> the exams. <strong>Domains:</strong> the legal (room, day, slot) combinations. <strong>Constraints:</strong> no student has two exams at the same time; no room holds more students than it seats; large exams need large halls; some courses must be in a computer lab; no student has three exams on one day.</p>
</div>

<h3>How a solver would actually run</h3>

<ol class="steps">
  <li><strong>Clean the domains first</strong><p>Node consistency: remove from each exam every room too small for it, and every slot the department has blocked. This costs one pass and can remove most of the search space.</p></li>
  <li><strong>Run arc consistency</strong><p>Some exams will now be forced to a single option before any guessing starts.</p></li>
  <li><strong>Choose the hardest exam next (MRV)</strong><p>Usually the large exam that needs a big hall and clashes with many others. The degree heuristic breaks ties by picking the exam that shares students with the most unplaced exams.</p></li>
  <li><strong>Choose the most flexible slot (LCV)</strong><p>Among the legal slots for that exam, take the one that leaves the most room for everything else.</p></li>
  <li><strong>Forward check after each placement</strong><p>Delete that slot from every exam sharing a student, and backtrack the moment a domain empties.</p></li>
  <li><strong>If the problem is huge, switch to min-conflicts</strong><p>Start from a full rough timetable and repair the clashes one by one.</p></li>
</ol>

<div class="aha">
  <div class="aha-label">Why constraints are a gift, not an obstacle</div>
  <p>It feels natural to think more rules make a problem harder. In CSPs the opposite is often true. Every constraint lets the solver <em>delete</em> possibilities without trying them. A weakly constrained timetable has an enormous number of legal arrangements to wander through; a tightly constrained one collapses quickly to a few. The dangerous case is neither: it is the problem sitting exactly at the edge between "many solutions" and "none", which is where solvers work hardest.</p>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>A colleague says: "Our timetabling program is slow. Let us remove the rule about not giving a student three exams in one day — fewer rules should be faster." Is he right?</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>Probably not</strong>, on two counts. First, removing a constraint enlarges the space of legal arrangements the solver must consider, and takes away a tool it was using to prune. Second, the rule exists to protect students, so removing it changes the product, not just the runtime. The real fixes are better propagation (arc consistency), better ordering (MRV and LCV), or switching to min-conflicts for a problem of this size.</p>
  </details>
</div>

<p class="reading-time">6 min read</p>
        `
      }
    ],
    cheatsheet: [
      {
        group: "A CSP is three things",
        items: [
          "<strong>Variables</strong> — what needs a value",
          "<strong>Domains</strong> — the values each may take",
          "<strong>Constraints</strong> — which combinations are legal",
          "Solution = complete assignment, no constraint broken",
          "The <strong>path does not matter</strong>, only the final assignment"
        ]
      },
      {
        group: "Constraint types",
        items: [
          "<strong>Unary</strong> — one variable (\"not on Sunday\")",
          "<strong>Binary</strong> — two variables (\"A ≠ B\")",
          "<strong>Global</strong> — many at once (<em>all-different</em> in a Sudoku row)"
        ]
      },
      {
        group: "The three heuristics",
        items: [
          "<strong>MRV</strong> — pick the variable with the fewest values left (fail fast)",
          "<strong>Degree</strong> — tie-break: most constraints with unassigned variables",
          "<strong>LCV</strong> — try the value that rules out the least (stay flexible)",
          "Remember: <em>most</em> constrained variable, <em>least</em> constraining value"
        ]
      },
      {
        group: "Propagation levels",
        items: [
          "<strong>Node consistency</strong> — apply unary constraints once, at the start",
          "<strong>Forward checking</strong> — after assigning X, clean the neighbours' domains",
          "<strong>Arc consistency / AC-3</strong> — cascade through the whole graph until stable",
          "Empty domain at any point → backtrack immediately"
        ]
      },
      {
        group: "AC-3 in four lines",
        items: [
          "Queue holds every arc (both directions)",
          "For arc X→Y, remove values of X with no partner in Y",
          "If X changed, re-add every arc pointing into X",
          "Stop when the queue is empty; empty domain = no solution"
        ]
      },
      {
        group: "Mistakes that cost marks",
        items: [
          "Swapping MRV and LCV — the variable is <em>most</em> constrained, the value <em>least</em> constraining",
          "Saying arc consistency solves every CSP — it only prunes; hard problems still need search",
          "Forgetting to re-check arcs pointing into a domain you just shrank",
          "Treating a CSP as a path problem — the order of assignments is not part of the answer",
          "Assuming more constraints always means a harder problem"
        ]
      }
    ],
    resources: [
      { type: "video", title: "Optimization — Lecture 3, CS50's Introduction to AI with Python", author: "Brian Yu, Harvard — constraint satisfaction, node and arc consistency, backtracking (from 51:00)", url: "https://www.youtube.com/watch?v=qK46ET1xk2A" },
      { type: "docs", title: "Artificial Intelligence: A Modern Approach, 4th ed. — Chapter 6", author: "Russell & Norvig — this module is Chapter 6", url: "https://aima.cs.berkeley.edu/" },
      { type: "docs", title: "aima-python — CSP, AC-3, and min-conflicts code", author: "AIMA code repository, GitHub", url: "https://github.com/aimacode/aima-python" }
    ]
  },

  // ==================== MODULE 7 ====================
  {
    id: 7,
    title: "Logical Agents",
    subtitle: "Propositional Logic, First-Order Logic, Resolution",
    shortDesc: "Agents that hold what they know as sentences, and work out what must follow from it.",
    hours: 8,
    story: "Search finds a route. Logic derives a fact. A knowledge-based agent keeps what it believes in a knowledge base, and asks what necessarily follows from it. This is the foundation of expert systems, of formal safety checking, and of every system that must justify its answer instead of only producing one.",
    objectives: [
      "Describe how a knowledge-based agent is built, and what TELL and ASK do.",
      "Write sentences in propositional logic and evaluate them in a model.",
      "Explain entailment, and check it with a truth table.",
      "Convert sentences to CNF and prove a conclusion by resolution.",
      "Express relations in first-order logic and apply unification."
    ],
    terms: [
      { term: "Knowledge base (KB)", meaning: "The set of sentences an agent currently believes to be true about its world." },
      { term: "TELL", meaning: "The operation that adds a new sentence to the knowledge base." },
      { term: "ASK", meaning: "The operation that asks the knowledge base what follows from what it holds." },
      { term: "Proposition", say: "prop-oh-ZISH-un", meaning: "A statement that is either true or false, with no in-between: \"the tank is full\"." },
      { term: "Propositional logic", meaning: "A language built from propositions joined by not, and, or, implies, and if-and-only-if." },
      { term: "Model", meaning: "One complete assignment of true or false to every proposition — one possible world." },
      { term: "Entailment", say: "en-TAIL-ment", meaning: "KB ⊨ α means: in every model where the KB is true, α is also true. α follows necessarily." },
      { term: "Valid", meaning: "True in every model, e.g. \"P or not P\". Also called a tautology." },
      { term: "Satisfiable", say: "SAT-is-fy-able", meaning: "True in at least one model. Unsatisfiable means true in none." },
      { term: "Inference rule", meaning: "A pattern that lets you derive a new sentence from existing ones, e.g. modus ponens." },
      { term: "Modus ponens", say: "MOH-dus POH-nens", meaning: "From \"A implies B\" and \"A\", conclude \"B\"." },
      { term: "Sound", meaning: "An inference procedure is sound if everything it derives is actually entailed — it never invents falsehoods." },
      { term: "Complete", meaning: "An inference procedure is complete if it can derive everything that is entailed — it never misses a conclusion. This is a different sense from Module 3, where a complete search algorithm is one that finds a solution whenever one exists." },
      { term: "CNF", say: "Conjunctive Normal Form", meaning: "A sentence written as a set of clauses joined by AND, where each clause is a set of literals joined by OR." },
      { term: "Clause", meaning: "An OR of literals, e.g. (¬A ∨ B ∨ C). A literal is a proposition or its negation." },
      { term: "Resolution", meaning: "One inference rule that is complete for propositional logic: from two clauses containing P and ¬P, derive the clause made of everything else." },
      { term: "First-order logic (FOL)", meaning: "Adds objects, relations, and the quantifiers ∀ (for all) and ∃ (there exists), so one sentence can describe many things at once." },
      { term: "Unification", meaning: "Finding a substitution that makes two logical expressions identical, e.g. matching Teaches(x, AI4101) with Teaches(Ahmad, y)." }
    ],
    sections: [
      {
        title: "An agent that knows things",
        body: `
<p>Every agent so far reacted to what it sensed, or searched for a path. A <strong>knowledge-based agent</strong> does something different: it stores facts, and it reasons about what those facts imply.</p>

<div class="definition">
  <p>The agent keeps a <strong>knowledge base (KB)</strong>: a set of sentences it believes. Two operations run it. <strong>TELL</strong> adds a new sentence. <strong>ASK</strong> asks what follows from everything in the KB. The reasoning happens inside ASK.</p>
</div>

<div class="analogy">
  <span class="analogy-label">A safety monitor in a factory</span>
  <p>The system is TOLD the rules once: "if the pressure sensor is high and the valve is closed, there is a risk"; "if there is a risk and no operator has confirmed, sound the alarm".</p>
  <p>Then it is TOLD the readings as they arrive: "pressure is high", "valve is closed". Nobody programmed a rule for this exact combination. The agent ASKs whether the alarm should sound, and the answer is derived, not looked up.</p>
</div>

<div class="aha">
  <div class="aha-label">Why this design is worth the trouble</div>
  <p>Add one new rule to the knowledge base and every conclusion that depends on it updates automatically, with no code changes. And the agent can show its work: "alarm, because risk, because pressure high and valve closed." Try getting that from a neural network. This explainability is why logic still runs in medical protocols, aircraft checks, tax rules, and formal verification of hardware.</p>
</div>

<p class="reading-time">4 min read</p>
        `
      },

      {
        title: "Propositional logic: the smallest useful language",
        body: `
<p>Start with the simplest logic there is. A <strong>proposition</strong> is a statement that is either true or false: <em>PressureHigh</em>, <em>ValveClosed</em>, <em>AlarmOn</em>.</p>

<h3>The five connectives</h3>

<div class="diagram">
  <svg viewBox="0 0 700 210" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="20" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">THE FIVE CONNECTIVES</text>
    <line x1="40" y1="36" x2="660" y2="36" stroke="var(--rule)"/>

    <text x="50" y="64" font-size="14" fill="var(--accent)" font-weight="700">¬A</text>
    <text x="140" y="64" font-size="12" fill="var(--ink)" font-weight="600">not</text>
    <text x="260" y="64" font-size="12" fill="var(--ink-soft)">true exactly when A is false</text>

    <text x="50" y="96" font-size="14" fill="var(--accent)" font-weight="700">A ∧ B</text>
    <text x="140" y="96" font-size="12" fill="var(--ink)" font-weight="600">and</text>
    <text x="260" y="96" font-size="12" fill="var(--ink-soft)">true only when both are true</text>

    <text x="50" y="128" font-size="14" fill="var(--accent)" font-weight="700">A ∨ B</text>
    <text x="140" y="128" font-size="12" fill="var(--ink)" font-weight="600">or</text>
    <text x="260" y="128" font-size="12" fill="var(--ink-soft)">true when at least one is true (not exclusive)</text>

    <text x="50" y="160" font-size="14" fill="var(--accent)" font-weight="700">A ⇒ B</text>
    <text x="140" y="160" font-size="12" fill="var(--ink)" font-weight="600">implies</text>
    <text x="260" y="160" font-size="12" fill="var(--ink-soft)">false only when A is true and B is false</text>

    <text x="50" y="192" font-size="14" fill="var(--accent)" font-weight="700">A ⇔ B</text>
    <text x="140" y="192" font-size="12" fill="var(--ink)" font-weight="600">if and only if</text>
    <text x="260" y="192" font-size="12" fill="var(--ink-soft)">true when both have the same value</text>
  </svg>
  <div class="diagram-caption">Five symbols. Everything in propositional logic is built from them.</div>
</div>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">The one that confuses everyone: implies</div>
    <p>"A ⇒ B" is <strong>true</strong> whenever A is false, no matter what B is. "If the moon is made of cheese, then I am the king" is a true sentence in logic. This feels wrong because everyday "if" suggests a cause. In logic there is no cause — only a promise: <em>I only claim something when A holds</em>. If A never holds, the promise was never broken.</p>
  </div>
</div>

<h3>Models and entailment</h3>

<div class="definition">
  <p>A <strong>model</strong> is one complete assignment of true/false to every proposition — one possible world. With <em>n</em> propositions there are 2<sup>n</sup> models. <strong>KB ⊨ α</strong> ("the KB entails α") means: in every model where the KB is true, α is also true.</p>
</div>

<div class="analogy">
  <span class="analogy-label">Entailment is elimination, not calculation</span>
  <p>Imagine every possible world laid out in a row. Each sentence you add to the KB crosses out the worlds where it is false. If, after crossing out, every world still standing has α true, then α follows — even if nobody ever stated it.</p>
</div>

<p>This gives a first inference method: <strong>truth table enumeration</strong>. List all 2<sup>n</sup> models, keep the ones where the KB is true, and check whether α is true in all of them. It is sound and complete — and completely impractical, because 30 propositions already mean a billion rows. The rest of this module is about doing better.</p>

<p class="reading-time">7 min read</p>
        `
      },

      {
        title: "Inference: deriving new facts without listing worlds",
        body: `
<p>Instead of checking every possible world, apply <strong>inference rules</strong>: patterns that take sentences you have and produce a sentence that must also be true.</p>

<ol class="steps">
  <li><strong>Modus ponens</strong><p>From <code>A ⇒ B</code> and <code>A</code>, derive <code>B</code>. This is the workhorse of every rule-based system.</p></li>
  <li><strong>And-elimination</strong><p>From <code>A ∧ B</code>, derive <code>A</code>. Obvious, and used constantly.</p></li>
  <li><strong>Contraposition</strong><p><code>A ⇒ B</code> is the same sentence as <code>¬B ⇒ ¬A</code>. If the alarm implies a fault, then no fault implies no alarm.</p></li>
  <li><strong>De Morgan's laws</strong><p><code>¬(A ∧ B)</code> equals <code>¬A ∨ ¬B</code>, and <code>¬(A ∨ B)</code> equals <code>¬A ∧ ¬B</code>. You need these to convert sentences later.</p></li>
</ol>

<h3>Two words you must not mix up</h3>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Sound</span>
    <h4>Everything derived is true</h4>
    <ul>
      <li>The procedure never invents a false conclusion</li>
      <li>Without it, the agent's answers are worthless</li>
      <li>"It only says true things"</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Complete</span>
    <h4>Everything true can be derived</h4>
    <ul>
      <li>The procedure never misses a conclusion that follows</li>
      <li>Without it, the agent may answer "I do not know" wrongly</li>
      <li>"It says all the true things"</li>
    </ul>
  </div>
</div>

<div class="aha">
  <div class="aha-label">Sound matters more than complete</div>
  <p>An unsound system tells you the patient is fine when they are not. An incomplete system says "I cannot determine that" when in fact it could. The first is dangerous; the second is merely limited. In practice we insist on soundness and accept whatever completeness we can afford.</p>
</div>

<h3>A worked example</h3>

<p>Knowledge base:</p>
<ul class="steps">
  <li><strong>1.</strong><p><code>PressureHigh ∧ ValveClosed ⇒ Risk</code></p></li>
  <li><strong>2.</strong><p><code>Risk ∧ ¬OperatorConfirmed ⇒ Alarm</code></p></li>
  <li><strong>3.</strong><p><code>PressureHigh</code></p></li>
  <li><strong>4.</strong><p><code>ValveClosed</code></p></li>
  <li><strong>5.</strong><p><code>¬OperatorConfirmed</code></p></li>
</ul>

<p>From 3 and 4 we have <code>PressureHigh ∧ ValveClosed</code>. With rule 1 and modus ponens: <code>Risk</code>. Combine with 5: <code>Risk ∧ ¬OperatorConfirmed</code>. With rule 2 and modus ponens: <strong><code>Alarm</code></strong>. Nobody wrote a rule for this exact situation, and the chain above is also the explanation the agent can show a human.</p>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "CNF and resolution: one rule that does everything",
        body: `
<p>Applying rules by hand works for five sentences. For a real knowledge base we want a single mechanical procedure. That is <strong>resolution</strong> — and it needs the sentences in a standard shape first.</p>

<h3>Conjunctive Normal Form</h3>

<div class="definition">
  <p>A sentence is in <strong>CNF</strong> when it is a set of <strong>clauses</strong> joined by AND, where each clause is a set of <strong>literals</strong> joined by OR. A literal is a proposition or its negation. Every propositional sentence can be rewritten in CNF.</p>
</div>

<ol class="steps">
  <li><strong>Remove ⇔</strong><p><code>A ⇔ B</code> becomes <code>(A ⇒ B) ∧ (B ⇒ A)</code>.</p></li>
  <li><strong>Remove ⇒</strong><p><code>A ⇒ B</code> becomes <code>¬A ∨ B</code>. This single step is worth memorising.</p></li>
  <li><strong>Push ¬ inwards</strong><p>Use De Morgan's laws until every ¬ sits directly on a proposition.</p></li>
  <li><strong>Distribute ∨ over ∧</strong><p><code>A ∨ (B ∧ C)</code> becomes <code>(A ∨ B) ∧ (A ∨ C)</code>.</p></li>
</ol>

<h3>The resolution rule</h3>

<div class="definition">
  <p>Take two clauses. If one contains <code>P</code> and the other contains <code>¬P</code>, you may derive a new clause containing everything else from both. The pair cancels out.</p>
  <p>Example: from <code>(A ∨ B)</code> and <code>(¬B ∨ C)</code> derive <code>(A ∨ C)</code>.</p>
</div>

<div class="analogy">
  <span class="analogy-label">Two witnesses, one contradiction</span>
  <p>Witness one: "either Ahmad was there, or Badr was." Witness two: "if Badr was there, then the door was open." Put them together and something new follows: "either Ahmad was there, or the door was open." You have removed Badr from the picture — that is exactly what resolution does with P.</p>
</div>

<h3>Proof by contradiction</h3>

<p>Resolution is used in a particular way. To prove that the KB entails α:</p>

<ol class="steps">
  <li><strong>Add the opposite of what you want to prove</strong><p>Put <code>¬α</code> into the knowledge base.</p></li>
  <li><strong>Convert everything to CNF</strong><p>The whole KB plus <code>¬α</code>.</p></li>
  <li><strong>Resolve pairs repeatedly</strong><p>Each step produces a new clause; add it and continue.</p></li>
  <li><strong>Look for the empty clause</strong><p>If two clauses <code>P</code> and <code>¬P</code> resolve, the result contains nothing: a contradiction. That proves α must be true, because assuming it was false broke the world. If no new clauses can be produced and no contradiction appeared, α does not follow.</p></li>
</ol>

<p>That procedure has a name worth knowing. A set of sentences is <strong>satisfiable</strong> if there is at least one model in which all of them are true, and <strong>unsatisfiable</strong> if there is none. So proving <code>KB ⊨ α</code> by contradiction is exactly proving that <code>KB ∧ ¬α</code> is <strong>unsatisfiable</strong> — no possible world makes the knowledge base and the denial of α true together. The mirror idea is <strong>validity</strong>: a sentence is <strong>valid</strong> when it is true in <em>every</em> model, such as <code>P ∨ ¬P</code>.</p>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Resolution is complete for propositional logic</div>
    <p>One rule, applied mechanically, can prove anything that follows. That is a remarkable result, and it is why resolution — not a long list of rules — sits inside automated theorem provers and formal verification tools.</p>
    <p>And notice what finding the proof actually is: you start from a set of clauses, generate new ones, and look for the empty clause. That is the frontier-and-expand loop of Module 3, with clauses in place of cities. Which clauses to resolve first is a heuristic question, exactly as it was there.</p>
  </div>
</div>

<p class="reading-time">7 min read</p>
        `
      },

      {
        title: "First-order logic: talking about things, not just facts",
        body: `
<p>Propositional logic has a hard limit. To say "every student registered in AI4101 must sit the final exam", you would need one separate proposition for every student — and rewrite the knowledge base whenever someone registers.</p>

<div class="definition">
  <p><strong>First-order logic</strong> adds <strong>objects</strong> (Ahmad, AI4101, room 12), <strong>relations</strong> between them (<em>Registered(Ahmad, AI4101)</em>), <strong>functions</strong> (<em>Advisor(Ahmad)</em>), and two <strong>quantifiers</strong>: ∀ meaning "for all", and ∃ meaning "there exists".</p>
</div>

<h3>One sentence replaces thousands</h3>

<ul class="steps">
  <li><strong>For all</strong><p><code>∀x Registered(x, AI4101) ⇒ MustSitFinal(x)</code> — covers every student, including the ones who register tomorrow.</p></li>
  <li><strong>There exists</strong><p><code>∃x Teaches(x, AI4101)</code> — somebody teaches this course, without saying who.</p></li>
  <li><strong>Both together</strong><p><code>∀x ∃y Advises(y, x)</code> — every student has some advisor. Order matters: swap the quantifiers and you claim <em>one</em> advisor advises everybody.</p></li>
</ul>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">The two connectives that go with the two quantifiers</div>
    <p>∀ almost always pairs with ⇒, and ∃ almost always pairs with ∧. Writing <code>∀x Registered(x, AI4101) ∧ MustSitFinal(x)</code> claims that <em>everything in the universe</em> is registered in AI4101 — including this room and the moon. And <code>∃x Registered(x, AI4101) ⇒ MustSitFinal(x)</code> is almost meaningless, because it is satisfied by anything that is not registered. This is the single most common mistake in first-order logic exams.</p>
  </div>
</div>

<h3>Unification: matching patterns</h3>

<div class="definition">
  <p><strong>Unification</strong> finds a substitution that makes two expressions identical. Unifying <code>Teaches(x, AI4101)</code> with <code>Teaches(Ahmad, y)</code> gives <code>{x = Ahmad, y = AI4101}</code>. Unifying <code>Teaches(x, AI4101)</code> with <code>Teaches(Ahmad, CS2107)</code> fails — no substitution makes them equal.</p>
</div>

<p>Unification is what makes inference work in first-order logic. Resolution still applies, but now two clauses can be resolved when their literals <em>unify</em> rather than matching exactly. That extension is called <strong>lifted resolution</strong>, and it lets a single general rule fire on thousands of specific facts.</p>

<div class="aha">
  <div class="aha-label">Where this ends up</div>
  <p>Everything in this module runs today under different names. Database queries are first-order logic with a friendlier syntax. Prolog is resolution with unification as a programming language. Hospital protocol checkers, tax rule engines, aircraft configuration checks, and formal verification of chips are all knowledge bases plus an inference procedure. The vocabulary changes; the ideas are the ones on this page.</p>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>Write in first-order logic: "every student who passes AI4101 gets a certificate". Then say what goes wrong if you use ∧ instead of ⇒.</p>
  <details>
    <summary>Show answer</summary>
    <p><code>∀x Passes(x, AI4101) ⇒ GetsCertificate(x)</code>. With ∧ it becomes <code>∀x Passes(x, AI4101) ∧ GetsCertificate(x)</code>, which says that <em>everything that exists</em> passes AI4101 and receives a certificate — every person, every chair, every planet. The sentence is not just wrong, it is false in any sensible world.</p>
  </details>
</div>

<p class="reading-time">7 min read</p>
        `
      }
    ],
    cheatsheet: [
      {
        group: "Knowledge-based agent",
        items: [
          "<strong>KB</strong> = the sentences the agent believes",
          "<strong>TELL</strong> adds a sentence · <strong>ASK</strong> queries what follows",
          "New rules change every conclusion automatically — no code changes",
          "The proof chain is the explanation you can show a human"
        ]
      },
      {
        group: "Connectives",
        items: [
          "<code>¬A</code> not · <code>A ∧ B</code> and · <code>A ∨ B</code> or (inclusive)",
          "<code>A ⇒ B</code> false <em>only</em> when A true and B false",
          "<code>A ⇔ B</code> true when both sides match",
          "<code>A ⇒ B</code> ≡ <code>¬A ∨ B</code> — memorise this"
        ]
      },
      {
        group: "Key definitions",
        items: [
          "<strong>Model</strong> = one true/false assignment to all propositions (2ⁿ of them)",
          "<strong>KB ⊨ α</strong> = α is true in every model where the KB is true",
          "<strong>Valid</strong> = true in every model · <strong>satisfiable</strong> = true in at least one",
          "<strong>Sound</strong> = derives only true things · <strong>complete</strong> = derives all true things"
        ]
      },
      {
        group: "CNF in four steps",
        items: [
          "Remove <code>⇔</code> → two implications",
          "Remove <code>⇒</code> → <code>¬A ∨ B</code>",
          "Push <code>¬</code> inwards with De Morgan",
          "Distribute <code>∨</code> over <code>∧</code>"
        ]
      },
      {
        group: "Resolution",
        items: [
          "From <code>(A ∨ B)</code> and <code>(¬B ∨ C)</code> derive <code>(A ∨ C)</code>",
          "To prove α: add <strong>¬α</strong>, convert to CNF, resolve",
          "Find the <strong>empty clause</strong> → contradiction → α is proved",
          "Complete for propositional logic — one rule is enough"
        ]
      },
      {
        group: "First-order logic",
        items: [
          "Adds objects, relations, functions, and quantifiers",
          "<code>∀</code> goes with <code>⇒</code> · <code>∃</code> goes with <code>∧</code> — mixing them is the classic error",
          "Quantifier order matters: <code>∀x ∃y</code> ≠ <code>∃y ∀x</code>",
          "<strong>Unification</strong> matches patterns: <code>Teaches(x, AI4101)</code> + <code>Teaches(Ahmad, y)</code> → <code>{x=Ahmad, y=AI4101}</code>"
        ]
      }
    ],
    resources: [
      { type: "video", title: "Knowledge — Lecture 1, CS50's Introduction to AI with Python", author: "Brian Yu, Harvard — propositional logic, inference, and resolution", url: "https://www.youtube.com/watch?v=HWQLez87vqM" },
      { type: "docs", title: "Artificial Intelligence: A Modern Approach, 4th ed. — Chapters 7 to 9", author: "Russell & Norvig — logical agents, first-order logic, and inference", url: "https://aima.cs.berkeley.edu/" },
      { type: "docs", title: "aima-python — propositional logic, CNF conversion, and resolution code", author: "AIMA code repository, GitHub", url: "https://github.com/aimacode/aima-python" }
    ]
  }

];

// Expose globally for app.js
window.COURSE_CONTENT = COURSE_CONTENT;
