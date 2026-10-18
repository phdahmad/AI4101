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
      "Describe what makes a system \"artificially intelligent\", and recognize one when you see it.",
      "Distinguish an agent from an intelligent agent, and give an example of each.",
      "Explain, from the history of AI, why a system's abilities and limits should be described precisely.",
      "Name the main areas of AI and give a real application for each.",
      "Discuss the responsibilities that come with building systems whose predictions and decisions affect people."
    ],
    collapseTerms: true,
    terms: [
      { term: "Artificial Intelligence (AI)", meaning: "A branch of Computer Science concerned with building systems that perform tasks associated with intelligence. This course emphasizes the rational-agent view: systems that perceive their environment, make decisions, and act to achieve goals." },
      { term: "Agent", meaning: "A system that perceives its environment and acts upon that environment. A thermostat, an automatic door, a robot, or a program that acts on websites, files, or people can all be agents." },
      { term: "Environment", meaning: "What lies outside the agent and can affect it or be affected by its actions: a room or a road for a robot; websites, files, databases, other programs, or people for a software agent." },
      { term: "Computation", meaning: "Turning inputs into outputs without perceiving or acting on an outside environment, such as a formula that only recalculates its own sheet." },
      { term: "Intelligent agent", meaning: "An agent that perceives its environment, makes decisions, and takes actions to achieve goals." },
      { term: "Rational", meaning: "Choosing the action expected to give the best performance, given what the agent has perceived and knows. Module 2 makes this precise. Rational does not mean perfect, and it does not mean always successful." },
      { term: "Turing test", say: "TOO-ring", meaning: "A test proposed by Alan Turing in 1950: a judge exchanges written messages with a hidden human and a hidden machine. If the judge cannot reliably tell which is which, the machine passes." },
      { term: "Machine Learning (ML)", meaning: "A subfield of AI in which systems learn patterns from data to improve at a task, rather than relying only on explicitly programmed rules." },
      { term: "Deep Learning", meaning: "A subfield of machine learning based on neural networks with multiple layers that learn representations from data." },
      { term: "Generative AI", say: "GenAI", meaning: "An area of AI focused on generating new content — text, images, audio, video, or code — from patterns learned in data." },
      { term: "Expert system", meaning: "An AI system that uses knowledge and rules collected from human experts to reason about problems in one specific domain." },
      { term: "NLP", say: "Natural Language Processing", meaning: "A subfield of AI concerned with enabling computers to process, understand, and generate human language, in text and in speech — including Arabic." },
      { term: "AI winter", meaning: "A period of sharply reduced interest, investment, and funding in AI, following unmet expectations and limits in the technology of the time." },
      { term: "AGI", say: "Artificial General Intelligence", meaning: "Intelligence across tasks, comparable to a human's. No system today is agreed to have it." },
      { term: "LLM", say: "Large Language Model", meaning: "A model trained on very large amounts of text, able to read and generate language. Today's chat assistants are built around one." },
      { term: "Narrow AI", meaning: "AI built for one job or one limited domain, rather than having general-purpose intelligence comparable to a human." },
      { term: "Bias", meaning: "A systematic pattern in a system that can lead to unfair or unequal outcomes. It can arise from the data, the system design, the objective it was given, or the way it is used." },
      { term: "Data minimization", meaning: "Collecting only the personal data a system actually needs, and keeping it only as long as it is needed." }
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

<p>There is no single agreed definition. Russell and Norvig organize the main ones around two questions: does the system <em>think</em> or <em>act</em>? And does it do so <em>like a human</em> or <em>rationally</em>? (Section 1.7 lays the four out, for those who want them.)</p>

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
    <p>Some intelligent agents also <strong>learn</strong> — they improve their own decisions from experience. Learning is a powerful capability an agent may have; it is not part of what makes it an agent. The route planner of Module 3, the game player of Module 5, and the timetable solver of Module 6 all decide well and never learn anything. Module 2 shows exactly where learning fits: not as a separate way of choosing actions, but as an ability that can be added to any agent design.</p>
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
  <li><strong>1950 — the question</strong><p>Alan Turing asks whether machines can think, and proposes his test: a judge exchanges written messages with a hidden human and a hidden machine; if the judge cannot reliably tell which is which, the machine passes.</p></li>
  <li><strong>1956 — the field gets a name</strong><p>A summer workshop at Dartmouth College gives "artificial intelligence" its name. The mood is very optimistic.</p></li>
  <li><strong>1956&ndash;1974 — early success, then the first winter</strong><p>Programs prove theorems and play simple games. But they struggle with realistic problems: the number of possibilities explodes — the problem you will meet in Module 3 — and computers are slow. Funding collapses in the mid-1970s: the first AI winter.</p></li>
  <li><strong>1980s — expert systems</strong><p>Industry buys systems full of human expert rules. They work well in narrow areas, but they are expensive to update and cannot learn. A second winter follows in the late 1980s.</p></li>
  <li><strong>1990s&ndash;2000s — learning from data</strong><p>The field turns to statistics and machine learning. In 1997 Deep Blue beats the world chess champion — using search, with alpha-beta pruning, which is Module 5.</p></li>
  <li><strong>2012 onwards — deep learning</strong><p>Big data, powerful GPUs, and deep neural networks transform vision and speech.</p></li>
  <li><strong>2017 onwards — the Transformer and large language models</strong><p>A new architecture, the Transformer, leads to large language models (LLMs), which read and write language far better than earlier systems. Generating text, not only classifying it, becomes part of everyday tools.</p></li>
</ol>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">What this history teaches you</div>
    <p>AI winters had several causes: limited computing power, scarce data, problems that proved harder than expected, and expectations that exceeded what the systems could actually deliver. One pattern is worth noticing: success in a narrow domain can raise expectations of much broader intelligence.</p>
    <p>The lesson is simple: <strong>doing one task well is not general intelligence.</strong></p>
    <p>So be precise about what a system can do, what it cannot do, and the conditions it needs. Say "this model recognizes five diseases across three plant species from clear images", not "our AI diagnoses plant diseases" — good practice means being clear about capabilities <em>and</em> limitations.</p>

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
  <p>It is easy to think that deep learning replaced everything older. It did not. Your maps app still runs search. Airline and exam schedules still run constraint solving. Leading chess engines still use alpha-beta search. Modern systems can combine a learned part with a classical part — which is exactly why this course teaches you the classical half properly.</p>
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
      <p>Finding a sequence of actions that reaches a goal, or the best choice among many possibilities: routes, schedules, robot plans. Modules 3 to 6 of this course.</p>
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
      <p>Agents with a body: warehouse robots, inspection drones, self-driving vehicles.</p>
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
  <p>Each application above is an example of <strong>narrow AI</strong>: a system built for one job or one limited domain. A model that reads X-rays cannot book a flight. General intelligence across tasks — often called AGI — is a much stronger claim than doing many tasks well, and whether anything today is approaching it is still argued over.</p>
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
  <li><strong>Who could this system treat unfairly?</strong> <span class="q-tag">bias &amp; fairness</span><p>A learning system reflects the patterns in the data it was trained on — including the unfair ones. An Arabic speech model trained mostly on one dialect may perform poorly for speakers of other dialects. A hiring filter trained on past hiring repeats the past, including its mistakes. That is one form of <strong>bias</strong>. Bias can come from the data, from the way the system is designed — which features you use, how the examples are labelled, what you tell it to maximize — or from how it is later used.</p></li>
  <li><strong>Can I explain its decisions?</strong> <span class="q-tag">explainability &amp; transparency</span><p>If your system recommends denying someone a loan or a university place, that person deserves a reason — whoever signs off on the decision. "The model said so" is not a reason. Some methods are easier to <strong>interpret</strong> — logic rules and decision trees show you the path they took. Others are much harder, and then the explanation has to be designed in from the start, not added at the end.</p></li>
  <li><strong>What data am I collecting, and do I need it?</strong> <span class="q-tag">privacy &amp; data protection</span><p>Ask this before the first record is stored, not afterwards. Personal data should be collected only when it is needed, kept only as long as it is needed, and protected while you hold it. The principle has a name worth knowing: <strong>data minimization</strong> — collect only what you actually need. Collecting "everything, just in case" is a risk you create for your users and then carry yourself.</p></li>
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
  <p>A system pursues the objective it was actually given, not the one you had in mind. If the measure does not capture what you really want, the behaviour will not either. Ask a delivery system to minimize driving time and it may route drivers through school zones at closing time. Ask a content system to maximize watching time and it may learn that anger keeps people watching. This is one of the most important lessons in this course, and you will meet it again in Module 2 under the name <em>performance measure</em>.</p>
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
        group: "The mental model to memorize",
        items: [
          "An <strong>agent</strong> perceives and acts",
          "<strong>Environment</strong> — what lies outside the agent and can affect it or be affected by its actions",
          "An <strong>intelligent agent</strong> perceives, decides, and acts towards a <strong>goal</strong>",
          "<strong>AI</strong> is the branch of Computer Science that builds systems doing tasks associated with intelligence",
          "In this course's language: <strong>AI</strong> studies and designs <strong>intelligent agents</strong>",
          "Several definitions exist; this course emphasizes the <strong>rational-agent view</strong>",
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
          "Each application in section 1.5 is <strong>narrow AI</strong> — built for one job or one limited domain"
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
    story: "In this course, every problem is an agent inside an environment. Once you can say \"this is what the agent perceives, this is what it can do, and this is how we measure success\", you can choose the right technique for the job. This module gives you that vocabulary, and you will use it in every module after it.",
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
      { term: "Sensor", meaning: "The channel through which the agent perceives its environment: a camera, a thermometer, a microphone — or, for a software agent, the chat input that receives messages or the interface that reads a database. The sensor is the channel, not the information it brings in: the camera is the sensor, the image is the percept." },
      { term: "Action", meaning: "What the agent does to its environment through its actuators: opening a valve, turning a wheel, sending a message, booking a room." },
      { term: "Actuator", say: "AK-choo-ay-tor", meaning: "The channel that carries out an action: a motor, a valve, a screen — or, for a software agent, the chat window that sends a reply or the interface that writes to a database or calls an API. The actuator is the channel, not the action itself." },
      { term: "Rational agent", meaning: "An agent that chooses, for each percept sequence, the action expected to maximize its performance measure, given what it has perceived and what it knows. Rational does not mean perfect or always successful." },
      { term: "Autonomy", meaning: "How far an agent relies on its own percepts and experience, rather than only on the knowledge its designer built in. Learning is what makes it possible." },
      { term: "Performance measure", meaning: "How the agent's success is evaluated. It is rarely a single number: some parts are hard requirements, some are things to improve, and some pull against each other. An agent built to maximize it will optimize exactly what you write." },
      { term: "Hard requirement", meaning: "A rule that must always be true. A solution that breaks it is not accepted, however good it is in other ways. Example: no student has two exams at the same time. Compare with a thing to improve: the fewer rooms, the better. Module 6 calls these hard constraints." },
      { term: "Thing to improve", meaning: "A part of P where more (or less) is better, but no exact value is required. Example: exams spread as evenly as possible." },
      { term: "Environment", meaning: "The same idea as in Module 1 — what lies outside the agent and can affect it or be affected by its actions." },
      { term: "PEAS", meaning: "The four-part checklist for describing an agent's task environment: Performance measure, Environment, Actuators, Sensors." },
      { term: "Task environment", meaning: "The whole PEAS description of a task — the performance measure, the environment, the actuators and the sensors taken together. The environment alone is one of its four parts." },
      { term: "Fully observable", meaning: "The agent can perceive, at each step, everything it needs to make a decision. Otherwise the environment is partially observable." },
      { term: "Deterministic", say: "de-TER-min-istic", meaning: "The next state is decided completely by the current state and the action. Otherwise it is stochastic (has randomness)." },
      { term: "Episodic", say: "eppi-SOD-ic", meaning: "Each decision stands alone and does not affect the next one. Otherwise the task is sequential." },
      { term: "Static", meaning: "The environment does not change while the agent is deciding. Otherwise it is dynamic. If the world waits but your score does not — as in chess with a clock — it is semi-dynamic." },
      { term: "Discrete", meaning: "States and actions come in countable steps, as in chess. Otherwise the environment is continuous, as with steering angle and speed." },
      { term: "Single-agent", meaning: "No other agent's actions affect what happens. Otherwise it is multi-agent, and the other agents may cooperate, compete, or both — as other drivers do in traffic." },
      { term: "Condition–action rule", meaning: "A rule that links a situation to an action: if the soil is dry, then open the valve." },
      { term: "Simple reflex agent", meaning: "Chooses an action from the current percept only, using condition–action rules." },
      { term: "Model-based reflex agent", meaning: "Keeps an internal state — a picture of the parts of the world it cannot perceive right now — and uses it with condition–action rules." },
      { term: "Goal-based agent", meaning: "Chooses actions by asking which ones lead towards a goal. This is where search and planning become useful." },
      { term: "Utility-based agent", say: "yoo-TIL-ity", meaning: "Uses a utility function to compare outcomes, so it can weigh goals against each other and trade them off." },
      { term: "Utility function", meaning: "A function that assigns values to outcomes so the agent can compare them. It should agree with the performance measure, but it is not the same thing. Under uncertainty, the agent chooses the action with the best expected utility." },
      { term: "Learning agent", meaning: "Improves its own behaviour over time from experience and feedback. Learning is not a separate way of choosing actions: it can be added to any of the other designs." },
      { term: "Agentic AI", meaning: "A commonly used modern term, not a sixth agent design: AI systems that pursue goals with little step-by-step human direction — deciding steps, using tools, observing results, and deciding again. The LLM-based agent of Module 1 is one example." }
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
  <p><em>Sensors:</em> soil moisture probes, a temperature sensor, a weather-forecast feed. <em>Actuators:</em> the valves that open and close each irrigation line. <em>Percept:</em> "soil at line 3 is at 18% moisture, air is 41 degrees." <em>Action:</em> "open valve 3 for twelve minutes."</p>
  <p>The farmer is also an agent in the same environment, with eyes as sensors and hands as actuators.</p>
</div>

<div class="diagram">
  <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">THE AGENT LOOP</text>

    <rect x="60" y="55" width="240" height="160" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
    <text x="180" y="85" text-anchor="middle" font-size="14" fill="var(--accent)" font-weight="700">AGENT</text>
    <rect x="95" y="105" width="170" height="38" rx="6" fill="var(--bg-elev)" stroke="var(--rule)"/>
    <text x="180" y="129" text-anchor="middle" font-size="12" fill="var(--ink)">agent program</text>
    <text x="180" y="170" text-anchor="middle" font-size="11" fill="var(--ink-soft)">turns what it has perceived</text>
    <text x="180" y="188" text-anchor="middle" font-size="11" fill="var(--ink-soft)">into the next action</text>

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
  <div class="diagram-caption">Perceive, then act &mdash; again and again. An intelligent agent also decides in between.</div>
</div>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Decide or act?</div>
    <p><strong>Deciding</strong> is choosing one option from several: which driver gets the order, which road to take. <strong>Acting</strong> is doing what was chosen: sending the order, turning the wheel.</p>
    <p>Every agent acts. Only an intelligent agent decides.</p>
    <p>Quick test: &ldquo;decide&rdquo; answers <em>which one?</em> &mdash; &ldquo;act&rdquo; answers <em>what did it do?</em></p>
  </div>
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
  <p>A <strong>rational agent</strong> chooses, for each percept sequence, the action that is <em>expected</em> to maximize its <strong>performance measure</strong>, given what it has perceived and what it knows.</p>
</div>

<div class="analogy">
  <span class="analogy-label">Crossing the street</span>
  <p>You look both ways, see nothing coming, and cross. A piece of metal falls from a passing plane and hits you. Were you irrational?</p>
  <p>No. You made the best decision available from what you could perceive. Rationality is judged on the <em>decision</em>, not on the <em>luck</em>. Expecting an agent to be right every time is expecting it to be all-knowing, which no agent is.</p>
</div>

<h3>The performance measure is a design decision — yours</h3>

<p>The performance measure is set by the designer, not by the agent. Judge the agent by what counts as success for the people who will use it.</p>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">The classic trap</div>
    <p>Reward a cleaning robot for the amount of dust collected, and a clever agent learns to dump the dust back on the floor and collect it again. It scores brilliantly and cleans nothing. The agent did not cheat: it optimized exactly what you wrote. Measure the <em>clean floor</em>, not the <em>dust collected</em>. This is the lesson of section 1.6: a system pursues the objective it was given, not the one you had in mind.</p>
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
  <li><strong>An exam timetabling agent at the university</strong><p><em>P:</em> zero student clashes and no room over capacity &mdash; these are hard requirements, not preferences; then exams spread as evenly as possible across the period. <em>E:</em> the courses, the students, the rooms, the exam period, the registration database, and the exam timetable system. <em>A:</em> timetable system &mdash; writes each exam into a room and a time slot. <em>S:</em> database interface &mdash; reads student enrolments from the registration database.</p></li>
  <li><strong>An Arabic customer-service assistant</strong><p><em>P:</em> questions answered correctly from the knowledge base, in as few turns as possible. Escalating to a human when unsure counts as a correct answer, not a failure &mdash; and a confident wrong answer is the most expensive outcome of all. <em>E:</em> the customer, the company's knowledge base, the account system, and the ticket system. <em>A:</em> chat window &mdash; sends replies; ticket system &mdash; opens a ticket; transfer &mdash; passes the chat to a human staff member. <em>S:</em> chat input &mdash; reads the customer's messages; account interface &mdash; reads the account history; knowledge-base search &mdash; reads the matching answers.</p></li>
</ol>

<p>Notice that the parts of a <strong>P</strong> are not all the same kind. Some are <strong>hard requirements</strong> (rules that must always be true) &mdash; no student sitting two exams at once. Others are <strong>things to improve</strong> as far as possible &mdash; the fewest rooms, the shortest trip. And some <strong>pull against each other</strong>: a faster trip is a less comfortable one. Section 2.5 shows how a utility-based agent weighs the ones that pull against each other.</p>

<p>One more rule &mdash; easy to state, and easy to break. Write <strong>P</strong> in terms of <em>what counts as success</em> &mdash; the outcome you want &mdash; not in terms of how you imagine the agent should behave. &ldquo;The floor is clean&rdquo; is an outcome. &ldquo;The robot moves in a spiral pattern&rdquo; is a guess at a method &mdash; and if you write it into the measure, a spiral is exactly what you will get, clean floor or not.</p>

<h3>Robot or software: where do things go?</h3>

<p>Ask one question for each letter. The answer tells you where an item goes.</p>

<div class="table-figure">
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">PEAS</th><th scope="col">Ask</th><th scope="col">Write it as</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">P</th><td>How do we measure success?</td><td>something you can count: hard requirements first, then things to improve</td></tr>
        <tr><th scope="row">E</th><td>What is outside the agent, affecting it or affected by it?</td><td>things: the customer, the road, the database</td></tr>
        <tr><th scope="row">A</th><td>How does the agent act on its environment?</td><td>channel &mdash; what it does</td></tr>
        <tr><th scope="row">S</th><td>How does the agent get information?</td><td>channel &mdash; what it reads</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>Information comes <strong>in</strong> through S. Action goes <strong>out</strong> through A. A sensor is the channel, not the information: the camera is the sensor, and the image is the percept. In the same way, an actuator is the channel, not the action.</p>

<div class="table-figure">
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col"></th><th scope="col">Self-driving taxi (robot)</th><th scope="col">Customer-service assistant (software)</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">S</th><td>cameras, radar, GPS</td><td>chat input &mdash; reads the customer's messages; account interface &mdash; reads the account history</td></tr>
        <tr><th scope="row">A</th><td>steering, brakes, screen</td><td>chat window &mdash; sends replies; ticket system &mdash; opens a ticket</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>For a robot, S and A are physical parts. For a software agent, they are channels: S reads (messages, files, database records) and A writes or sends (a reply, a database row, an API call).</p>

<p>The same system can appear in three places. In E it is a thing: <em>the exam timetable system</em>. In S it is read: <em>timetable system &mdash; reads change requests</em>. In A it is changed: <em>timetable system &mdash; writes each exam into a slot</em>. That is correct, not a mistake.</p>

<p>Some agents are software but use physical parts, such as a smart car-park guide that reads fixed cameras and lights up signs. Place each part by what it does, not by what kind of agent it is.</p>

<div class="aha">
  <div class="aha-label">PEAS is where projects are won or lost</div>
  <p>A perfect algorithm cannot rescue a wrong PEAS. A performance measure that rewards the wrong thing, or sensors that cannot perceive what the decision actually needs, will defeat any algorithm you put behind them. Write the PEAS before you write any code — and show it to the person who asked for the system, because they will correct the P immediately.</p>
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
  <p>When the task environment is fully observable, deterministic, static, discrete and single-agent, the agent can perceive what matters and predict the result of each action, so it can plan a whole solution before it acts. That is the setting of Module 3. Change a property and the problem changes with it. Some problems involve continuous variables; when the goal is to optimize a differentiable objective (one whose slope we can compute), methods such as gradient descent (Module 4) may be useful. An opponent calls for the adversarial search of Module 5. Chance in a game, such as dice, returns in Module 5. Missing information needs tools that go beyond this course.</p>
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
    <text x="431" y="162" text-anchor="middle" font-size="10" fill="var(--accent)">✗ cannot weigh</text>
    <text x="431" y="178" text-anchor="middle" font-size="10" fill="var(--accent)">trade-offs</text>
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
    <p>In Module 1, we used a simple introductory distinction: an agent perceives and acts, while an intelligent agent perceives, decides, and acts towards a goal. The five designs here answer a different question: <strong>how is the action selected?</strong> Simple and model-based reflex agents mainly follow condition–action rules. Goal-based and utility-based agents explicitly evaluate actions in relation to goals or preferences. A learning agent can improve the way any of these designs behaves.</p>
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
  <p>A robot vacuum in a flat in Jeddah. What is the simplest design each behaviour needs? (a) "If I hit a wall, turn." (b) "Do not clean the kitchen twice before cleaning the bedroom." (c) "Finish before the family comes home, but stay quiet during nap time."</p>
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
          "<strong>Rational action</strong> = the action expected to maximize the performance measure, given what the agent has perceived and knows",
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
          "<strong>S</strong> = information IN · <strong>A</strong> = action OUT · write each as <em>channel — what it does</em>; the sensor is the channel, not the information",
          "P usually has several parts: hard requirements (they must always be true), things to improve, and parts that pull against each other (e.g. safety, time, cost)",
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
          "<strong>Static / dynamic</strong> — does the world change while the agent decides? (<strong>semi-dynamic</strong>: the world waits, but your score does not — as in chess with a clock)",
          "<strong>Discrete / continuous</strong> — countable choices, or a continuous range?",
          "<strong>Single-agent / multi-agent</strong> — do other agents' actions matter? cooperating, competing, or both",
          "Module 3 search assumes: fully observable, deterministic, static, discrete, single-agent — and sequential, because a plan is a sequence of actions",
          "Continuous variables + a differentiable objective → e.g. gradient descent (Module 4) · an opponent → Module 5"
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
      { type: "docs", title: "Artificial Intelligence: A Modern Approach, 4th ed. — Chapter 2", author: "Russell & Norvig — PEAS, rationality, task-environment properties, and agent designs", url: "https://aima.cs.berkeley.edu/" },
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
    story: "This is the longest module in the course. Search is the first place where a computer does something that really looks like thinking. We start with a problem the agent cannot solve, and we end with A* (said out loud as A-star) — the idea behind route planning in maps apps, game characters, and warehouse robots. We study a few algorithms deeply rather than many on the surface. Take your time here. Every module after this one is search in a different costume.",
    objectives: [
      "Explain why a goal-based agent needs search, and turn a real problem into a search problem: initial state, actions, transition model, goal test, and action cost.",
      "Explain the difference between a state and a node, and between the state space and the search tree.",
      "Judge a search algorithm on completeness, optimality, time, and memory — without confusing search time with path cost.",
      "Trace BFS, DFS, and UCS by hand, showing the frontier after each step, and explain how DLS and IDS limit the depth.",
      "Trace A* on a small map: compute g, h, and f, keep the frontier in order, and explain why it returns a cheapest path.",
      "Decide whether a heuristic is admissible, compare two heuristics, and design one by relaxing the problem.",
      "Choose a search algorithm from the step costs, the memory available, and whether a good heuristic exists."
    ],
    terms: [
      { term: "Search problem", meaning: "A problem described by five parts: initial state, actions, transition model, goal test, and action cost." },
      { term: "State space", meaning: "Every state that can be reached from the initial state, joined by the actions that move between them. It is produced by the five parts; think of it as the map." },
      { term: "Solution", meaning: "Any path from the initial state to a goal. An optimal solution is a cheapest one." },
      { term: "Abstraction", meaning: "Keeping only the details of a problem that change the answer, and removing the rest." },
      { term: "Search tree", meaning: "The record of the search: a root node for the initial state, and a child node for each action tried. One state can appear in many nodes." },
      { term: "Node", meaning: "One record in the search tree: a state, the node it came from, the action taken, and the cost so far. Two nodes can hold the same state." },
      { term: "Frontier", meaning: "The nodes you have created but not expanded yet — the edge of what the search knows. A queue in BFS, a stack in DFS, a priority queue in UCS and A*." },
      { term: "Reached table", meaning: "The states the search has reached so far, each with the best node found for it. BFS skips a state already in the table; UCS and A* replace the entry when they find a cheaper path." },
      { term: "Expand", meaning: "To apply every legal action to a node's state and create its child nodes." },
      { term: "Graph search", meaning: "Search that keeps a reached table, so it does not explore the same state again unless it finds a cheaper path to it. Tree-like search keeps no such table." },
      { term: "Branching factor, b", meaning: "How many actions are available at a typical state. With d, the depth of the shallowest goal, and m, the deepest level, it measures the time and memory of a search." },
      { term: "Path cost, g(n)", meaning: "The total cost of the steps taken from the start up to node n. It is a property of the answer, not of the work the algorithm did." },
      { term: "Time complexity, space complexity", meaning: "How much work a search algorithm does (counted as nodes created or expanded) and how much it must store at once (nodes in memory). Not the same as the path cost of its answer." },
      { term: "Complete", meaning: "The algorithm finds a solution whenever one exists — under stated conditions, such as a finite branching factor." },
      { term: "Optimal", meaning: "The algorithm finds a cheapest solution, not just any solution. Also called cost-optimal." },
      { term: "Uninformed search", meaning: "Also called blind search. It uses only the five parts of the problem, so it cannot tell which state is closer to the goal." },
      { term: "BFS", say: "Breadth-First Search", meaning: "Expands the shallowest node first, using a queue. Finds the path with the fewest steps." },
      { term: "UCS", say: "Uniform-Cost Search", meaning: "Expands the node with the lowest path cost g(n) first, using a priority queue. The same idea as Dijkstra's algorithm, stopped when the goal is taken out." },
      { term: "DFS", say: "Depth-First Search", meaning: "Expands the deepest node first, using a stack. Tree-like DFS needs very little memory, but it guarantees neither a solution nor the cheapest one." },
      { term: "DLS", say: "Depth-Limited Search", meaning: "DFS that refuses to go deeper than a fixed limit." },
      { term: "IDS", say: "Iterative Deepening Search", meaning: "Runs DLS again and again with a limit of 0, 1, 2, 3... until the goal is found. Not the same as IDA*, which this course does not cover." },
      { term: "Informed search", meaning: "Search that uses a heuristic h(n) to decide which node to expand next." },
      { term: "Heuristic, h(n)", say: "hyoo-RIS-tik", meaning: "A cheap guess at the cost still remaining from node n to the goal. A hint, not a fact — and not one of the five parts of the problem." },
      { term: "Straight-line distance", meaning: "The distance between two places in a straight line. On a road map it is never longer than the real road, so it is an admissible heuristic when the cost is distance." },
      { term: "Greedy best-first search", meaning: "Expands the node with the smallest h(n) and ignores the cost already paid. It can be fast, but it is not optimal." },
      { term: "A*", say: "A-star", meaning: "The main algorithm of this module. It expands the node with the smallest f(n) = g(n) + h(n): what you already paid, plus what you still expect to pay. The star is part of the name, not a multiplication sign — see section 3.5." },
      { term: "Admissible", meaning: "A heuristic that never guesses higher than the real remaining cost. It is the condition that makes A* return a cheapest path." },
      { term: "Consistent", meaning: "A stronger condition: one step can never improve the guess by more than that step costs, h(n) ≤ c + h(n'). Every consistent heuristic is also admissible." },
      { term: "Misplaced tiles, h₁", meaning: "An 8-puzzle heuristic: the number of tiles that are not in their correct square." },
      { term: "Manhattan distance, h₂", meaning: "An 8-puzzle heuristic: for every tile, its horizontal plus vertical distance from its correct square, added up." },
      { term: "Dominance", meaning: "h₂ dominates h₁ if both are admissible and h₂(n) ≥ h₁(n) for every node. With consistent heuristics, A* with h₂ expands no more nodes than A* with h₁, apart from ties." },
      { term: "Relaxed problem", meaning: "The same problem with some rules removed, so it is easier to solve exactly. Its exact cost is an admissible heuristic for the real problem." }
    ],
    sections: [
      {
        title: "Why AI Needs Search and Problem Formulation",
        body: `
<p>You already do this every day. You just do not call it search.</p>

<div class="analogy">
  <span class="analogy-label">Driving from Makkah to Jeddah without a maps app</span>
  <p>You reach a junction. Three roads leave it. You do not know which one is best, so you pick one. You drive to the next junction, and now you have new choices.</p>
  <p>That is search. The <em>junctions</em> are states. The <em>roads</em> are actions. Jeddah is the goal. The kilometres you drive are the cost.</p>
</div>

<h3>Why does artificial intelligence need search?</h3>

<p>In Module 2 we met the <strong>goal-based agent</strong>: it knows what it wants. Knowing the goal is not the same as knowing how to reach it. A delivery app knows the customer's address, but it does not know in advance which sequence of roads reaches that address at the lowest cost &mdash; and with a new order every few minutes, nobody can write those sequences for it beforehand. A simple reflex agent would need a condition&ndash;action rule for every situation it could meet.</p>

<p>Search solves this differently. The agent tries possible action sequences <em>in a model of the world</em>, before it takes any of them in the real world. It is not learning, and it is not guessing. It is trying possibilities in a smart order, and remembering what it already tried.</p>

<div class="diagram compact">
  <svg viewBox="0 0 320 372" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;" role="img" aria-label="From a goal to an action sequence: goal, problem formulation, search, action sequence">
    <rect x="6" y="6" width="308" height="68" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
    <text x="160" y="35" text-anchor="middle" font-size="18" font-weight="700" fill="var(--accent)">1. Goal</text>
    <text x="160" y="59" text-anchor="middle" font-size="15" fill="var(--ink-soft)">deliver the order to the customer</text>
    <path d="M160 74 V 94" stroke="var(--ink-mute)" stroke-width="2"/><path d="M153 90 L160 100 L167 90 z" fill="var(--ink-mute)"/>
    <rect x="6" y="98" width="308" height="68" rx="8" fill="var(--bg-elev)" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="160" y="127" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink)">2. Problem formulation</text>
    <text x="160" y="151" text-anchor="middle" font-size="15" fill="var(--ink-soft)">write the five parts of the problem</text>
    <path d="M160 166 V 186" stroke="var(--ink-mute)" stroke-width="2"/><path d="M153 182 L160 192 L167 182 z" fill="var(--ink-mute)"/>
    <rect x="6" y="190" width="308" height="68" rx="8" fill="var(--bg-elev)" stroke="var(--gold)" stroke-width="2"/>
    <text x="160" y="219" text-anchor="middle" font-size="18" font-weight="700" fill="var(--gold)">3. Search</text>
    <text x="160" y="243" text-anchor="middle" font-size="15" fill="var(--ink-soft)">try action sequences in the model</text>
    <path d="M160 258 V 278" stroke="var(--ink-mute)" stroke-width="2"/><path d="M153 274 L160 284 L167 274 z" fill="var(--ink-mute)"/>
    <rect x="6" y="282" width="308" height="68" rx="8" fill="var(--bg-elev)" stroke="var(--teal)" stroke-width="2"/>
    <text x="160" y="311" text-anchor="middle" font-size="18" font-weight="700" fill="var(--teal)">4. Action sequence</text>
    <text x="160" y="335" text-anchor="middle" font-size="15" fill="var(--ink-soft)">only now does the agent act</text>
  </svg>
  <div class="diagram-caption">Steps 2 and 3 happen inside the agent, before it moves. Only the sequence found in step 4 is carried out in the world.</div>
</div>

<p>This module works in the setting described in section 2.4 &mdash; fully observable, deterministic, static, discrete, single-agent &mdash; and sequential, because a plan is a sequence of actions. So the agent can plan the whole route before it takes the first step.</p>

<h3>Five things define any search problem</h3>

<p>We will use one small example for the rest of this module. A restaurant, <strong>S</strong>, must send an order to a customer, <strong>G</strong>. The driver can pass through four other places, A, B, C and D. The numbers on the roads are kilometres, and every road can be driven in both directions.</p>

<div class="tracer tracer-static" data-tracer='{"viewBox":"0 0 480 310","label":"Delivery map: restaurant S, customer G, places A, B, C, D, roads in km","weighted":true,"start":"S","goal":"G","nodes":{"S":{"x":60,"y":150,"h":5,"hAt":[-30,36]},"A":{"x":185,"y":62,"h":4,"hAt":[0,-32]},"B":{"x":200,"y":178,"h":3,"hAt":[-36,34]},"C":{"x":330,"y":80,"h":3,"hAt":[0,-32]},"D":{"x":100,"y":262,"h":6,"hAt":[44,6]},"G":{"x":420,"y":170,"h":0,"hAt":[0,40]}},"edges":[["S","A",3,0,-12,-6],["S","B",2,0,0,-12],["S","D",3,0,-14,0],["A","C",2,0,0,-12],["B","C",4,0,12,4],["B","G",7,60,0,14],["C","G",3,0,12,-6]],"static":true,"showH":false}' data-caption="The delivery map. S is the restaurant and G is the customer. Six places, seven two-way roads, distances in km. Not drawn to scale."></div>

<ol class="steps">
  <li><strong>Initial state</strong><p>Where the agent starts: <em>In(S)</em>, the driver is at the restaurant.</p></li>
  <li><strong>Actions</strong><p>What the agent can do in a state. In <em>In(S)</em>: drive to A, drive to B, or drive to D. The actions depend on the state: from D, the only road leads back to S.</p></li>
  <li><strong>Transition model</strong><p>Where each action leads: RESULT(<em>In(S)</em>, <em>Go(A)</em>) = <em>In(A)</em>.</p></li>
  <li><strong>Goal test</strong><p>A check that answers "am I done?" Here it is one state, <em>In(G)</em>. Sometimes it is a condition instead, such as "no student has two exams at the same time".</p></li>
  <li><strong>Action cost</strong><p>What one step costs: here, the kilometres of the road. Add the costs along a path and you get the <strong>path cost</strong>. A <strong>solution</strong> is any path from the initial state to a goal; an <strong>optimal solution</strong> is a cheapest one. The action cost is where the performance measure from Module 2 enters a search problem.</p></li>
</ol>

<div class="definition">
  <p>The five parts are a <strong>description</strong> that you write. The <strong>state space</strong> is what that description produces: every state that can be reached from the initial state, joined by the actions that move between them. The delivery map is small enough to draw its state space: six places and seven roads. The 8-puzzle below has 181,440 reachable states, and nobody draws them &mdash; a search algorithm discovers them one at a time.</p>
</div>

<p>Notice what is <em>not</em> on the list: a heuristic. A guess about how far the goal is (section 3.5) is extra knowledge that some algorithms bring to the problem. The problem itself is complete without it.</p>

<h3>Writing the problem down is the hard part</h3>

<p>Take the <strong>8-puzzle</strong>: a 3×3 frame with eight numbered tiles and one empty square. You slide tiles until the numbers are in order.</p>

<div class="definition">
  <p><strong>States:</strong> which tile is in which square. <strong>Initial state:</strong> any arrangement. <strong>Actions:</strong> move the <em>empty square</em> left, right, up, or down. (Nice trick: describing the empty square is much easier than describing eight tiles.) <strong>Transition model:</strong> the empty square swaps with its neighbour. <strong>Goal test:</strong> tiles in order 1&ndash;8. <strong>Action cost:</strong> 1 per move.</p>
</div>

<p>Look at what we removed: the colour of the tiles, how long a move takes, whether your hand shakes. This is called <strong>abstraction</strong> — keeping only the details that change the answer. You will use it in every module of this course.</p>

<div class="aha">
  <div class="aha-label">Formulation is the hard part</div>
  <p>The algorithms in this module are short. You can memorise them in one evening. The hard part is turning a messy real situation into those five parts, and that is the part the exams test. Later in this course, when you get stuck, check your formulation before you check your algorithm.</p>
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

<p class="reading-time">8 min read</p>
        `
      },

      {
        title: "State Spaces, Search Trees, and Frontiers",
        body: `
<p>The state space is the map of the world. The <strong>search tree</strong> is the record of your walk through it. They are not the same thing, and the difference matters in every algorithm that follows.</p>

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
  <li><strong>Start with a frontier</strong><p>The <strong>frontier</strong> holds nodes we have created but not expanded yet. It is the edge of what we know. At the start it holds only the first node.</p></li>
  <li><strong>Take one node out of the frontier</strong><p><em>This is the only line that changes between algorithms.</em> Which node you take — the oldest, the newest, the cheapest, the most promising — decides whether you are running BFS, DFS, UCS, or A*.</p></li>
  <li><strong>Test it</strong><p>If it is a goal, follow the parent links back to the start and return the path. (BFS can safely test earlier, when a node is created &mdash; section 3.3.)</p></li>
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
  <div class="diagram-caption">One state can live in many nodes. The state space has 4 states; this search tree already has 5 nodes, and it can keep growing.</div>
</div>

<div class="table-figure">
  <p class="table-hint">Swipe sideways to see the whole table &rarr;</p>
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Word</th><th scope="col">What it is</th><th scope="col">On the delivery map</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">State</th><td>a situation in the world</td><td><em>In(C)</em>: the driver is at C</td></tr>
        <tr><th scope="row">Node</th><td>one record in the search tree: a state, its parent node, the action, the path cost</td><td>"C, reached from A, cost so far 5"</td></tr>
        <tr><th scope="row">State space</th><td>every reachable state and the actions between them; fixed before the search starts</td><td>6 places, 7 roads</td></tr>
        <tr><th scope="row">Search tree</th><td>the record of the paths the algorithm has tried; it grows during the search</td><td>C can appear twice: through A (cost 5) and through B (cost 6)</td></tr>
        <tr><th scope="row">Frontier</th><td>nodes created but not expanded yet</td><td>the places waiting to be explored</td></tr>
        <tr><th scope="row">Reached table</th><td>the states reached so far, with the best node found for each</td><td>C &rarr; the node with cost 5</td></tr>
      </tbody>
    </table>
  </div>
  <div class="diagram-caption">Six words that are easy to mix up. The first two are about one situation; the next four are about the whole search.</div>
</div>

<h3>The repeated-state problem</h3>

<p>If the map has a cycle, the search tree can be <em>infinite</em> even when the map has only four places: A → B → A → B → ... forever. Two common ways to handle it:</p>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Tree-like search</span>
    <h4>Remember nothing</h4>
    <ul>
      <li>Needs no table of visited states</li>
      <li>Can loop forever: a two-way road is already a cycle, A &rarr; B &rarr; A &rarr; B ...</li>
      <li>Repeats the same work many times</li>
      <li>Fine only when no state can be reached in two ways</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Graph search</span>
    <h4>Keep a <em>reached table</em></h4>
    <ul>
      <li>Records every state reached, with the best node found for it</li>
      <li>Always stops, if the state space is finite</li>
      <li>Costs memory: one entry per state reached</li>
      <li>The default choice in this course</li>
    </ul>
  </div>
</div>

<p>What happens when graph search reaches a state that is already in the reached table? It depends on the algorithm. <strong>BFS</strong> simply skips it: the first path BFS finds to a state has the fewest steps. <strong>UCS</strong> and <strong>A*</strong> compare costs: if the new path is cheaper, they replace the entry in the table and put the new node in the frontier (sections 3.4 and 3.5).</p>

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
    <p><strong>No, this is normal.</strong> Without a reached table, the same place is created again on every path that leads to it, so nodes are many more than states. It wastes work, but the answer is still correct. Graph search would expand at most 6 nodes, one per state.</p>
  </details>
</div>

<p class="reading-time">8 min read</p>
        `
      },

      {
        title: "Evaluating Search Algorithms",
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
      <strong>Time complexity</strong>
      <p>How much work does it do? We count the nodes it creates (or expands) before it finishes.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">💾</span>
      <strong>Space complexity</strong>
      <p>How much memory does it need? We count the nodes it must hold at the same time.</p>
    </div>
  </div>
</div>

<div class="analogy">
  <span class="analogy-label">The dispatcher and the driver</span>
  <p>At a delivery company, a dispatcher plans each route on a whiteboard, and then a driver drives it. The algorithm is the dispatcher, not the driver. <em>Complete</em>: whenever a route exists, the dispatcher finds one. <em>Optimal</em>: the route found is a shortest one. <em>Time</em>: how many partial routes the dispatcher writes down and checks before answering. <em>Memory</em>: how many partial routes must stay on the whiteboard at the same time.</p>
  <p>A dispatcher who always finds the shortest route is still useless if the whiteboard is full before the answer comes.</p>
</div>

<div class="table-figure">
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Do not mix</th><th scope="col">What it measures</th><th scope="col">Delivery example</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">Path cost</th><td>the answer: the cost of the solution path</td><td>the 8 km the driver will drive</td></tr>
        <tr><th scope="row">Search time</th><td>the algorithm's work: nodes created or expanded</td><td>the partial routes the dispatcher checked</td></tr>
        <tr><th scope="row">Search memory</th><td>what the algorithm stores while it works: the frontier and the reached table</td><td>the partial routes on the whiteboard at once</td></tr>
      </tbody>
    </table>
  </div>
  <div class="diagram-caption">The driving distance says nothing about how long the dispatcher took to find it.</div>
</div>

<h3>Three letters you need</h3>

<div class="definition">
  <p><strong>b</strong> — the <em>branching factor</em>: how many actions are available at a typical state. <strong>d</strong> — the <em>depth of the nearest goal</em>. <strong>m</strong> — the <em>deepest</em> the tree can go, which may be infinite. We write costs using these letters: $O(b^d)$, $O(b^m)$, $O(bd)$.</p>
</div>

<p>Why exponential growth is so painful, in real numbers. Take $b = 10$, one microsecond to make a node, and 100 bytes to store it:</p>

<div class="diagram">
  <svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="20" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">THE DEEPEST LEVEL ALONE: b<tspan dy="-5" font-size="10">d</tspan><tspan dy="5"> NODES, b = 10</tspan></text>
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
    <text x="400" y="125" font-size="12" fill="var(--gold)">100 seconds</text>
    <text x="540" y="125" font-size="12" fill="var(--gold)">10 gigabytes</text>

    <text x="90" y="155" font-size="12" fill="var(--ink)">12</text>
    <text x="230" y="155" font-size="12" fill="var(--ink)">1 trillion</text>
    <text x="400" y="155" font-size="12" fill="var(--accent)">about 12 days</text>
    <text x="540" y="155" font-size="12" fill="var(--accent)">100 terabytes</text>

    <text x="90" y="185" font-size="12" fill="var(--ink)">16</text>
    <text x="230" y="185" font-size="12" fill="var(--ink)">10 quadrillion</text>
    <text x="400" y="185" font-size="12" fill="var(--accent)">about 300 years</text>
    <text x="540" y="185" font-size="12" fill="var(--accent)">1 exabyte</text>

    <line x1="60" y1="200" x2="640" y2="200" stroke="var(--rule)"/>
    <text x="350" y="228" text-anchor="middle" font-size="12" fill="var(--ink-soft)">Four more levels of depth = ten thousand times more work.</text>
  </svg>
  <div class="diagram-caption">One microsecond and 100 bytes per node, counting only the b<sup>d</sup> nodes of the deepest level. Rounded numbers: the shape is the lesson, not the digits.</div>
</div>

<div class="aha">
  <div class="aha-label">Memory fails first</div>
  <p>Look at depth 12 again. Waiting 12 days is painful but possible. Finding 100 terabytes of RAM is not. With these numbers, an algorithm that needs exponential <em>memory</em> fails long before one that needs exponential <em>time</em>. This one fact explains why iterative deepening (section 3.4) exists, and why repeating work can be a smart trade.</p>
</div>

<div class="callout note">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">When do we test for the goal?</div>
    <p>Some books test a node when it is <em>created</em>. Others test it when it is <em>taken out</em> of the frontier. Testing on creation is faster, but it can return a path that is not the cheapest, because a cheaper path to the same goal may still be waiting in the frontier. Safe rule for UCS and A*: <strong>test when you take the node out, not when you put it in.</strong></p>
  </div>
</div>

<p class="reading-time">6 min read</p>
        `
      },

      {
        title: "Uninformed Search Algorithms",
        body: `
<p><strong>Uninformed</strong> (also called blind) means the algorithm knows nothing except the five parts of the problem. It cannot tell which state looks closer to the goal. The only thing it chooses is <em>the order of exploring</em> — and that one choice gives us five different algorithms.</p>

<div class="analogy">
  <span class="analogy-label">Looking for one office inside a large building</span>
  <p><strong>Breadth-first</strong>: check every office on floor 1, then every office on floor 2, then floor 3. You will find the nearest office first, but you must remember every door you have not opened yet.</p>
  <p><strong>Depth-first</strong>: walk down one corridor, take every turn you meet, until you reach a dead end. Then step back and try the next door. You need almost no memory, but you may wander into the basement while your office is next to the entrance.</p>
</div>

<h3>1. Breadth-First Search (BFS)</h3>

<p><strong>Rule:</strong> take out the <strong>shallowest</strong> node — the one created earliest. <strong>Frontier:</strong> a queue, first in, first out.</p>

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

<p>On the delivery map, BFS returns S &rarr; B &rarr; G: two roads, the fewest possible, but 9 km.</p>

<p><strong>Result:</strong> complete when the branching factor $b$ is finite. Optimal <em>only when every step costs the same</em> &mdash; on the delivery map S &rarr; A &rarr; C &rarr; G is only 8 km. Time and memory are both $O(b^d)$. The memory is what hurts most: BFS must hold a whole level of the tree at once.</p>

<h3>2. Uniform-Cost Search (UCS)</h3>

<p><strong>Rule:</strong> take out the node with the <strong>lowest path cost so far, g(n)</strong>. <strong>Frontier:</strong> a priority queue ordered by $g$. It is the same idea as Dijkstra's algorithm, stopped as soon as the goal is taken out.</p>

<p>BFS counts steps. UCS counts cost. As soon as your steps have different costs — 8 km of open highway against 3 km of heavy city traffic — the BFS answer stops being the best one, and UCS becomes the right tool.</p>

<p>On the delivery map, UCS takes out S (0), then B (2), then A (3) and D (3), then C (5), and finally G (8). Along the way it creates G with $g = 9$ when it expands B &mdash; but it does not stop there. It returns S &rarr; A &rarr; C &rarr; G, 8 km.</p>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Why UCS must test the goal when it takes the node out</div>
    <p>Finding a goal node inside the frontier only proves that <em>a</em> path exists. It does not prove it is the cheapest. Only when that node reaches the front of the queue do you know that nothing cheaper is left.</p>
  </div>
</div>

<p><strong>Result:</strong> complete and optimal, provided $b$ is finite and every step costs at least some fixed amount $\\varepsilon > 0$. (If step costs can shrink towards zero, UCS can spend forever on ever-cheaper steps.) Its time and memory depend on $C^*/\\varepsilon$ &mdash; the cost of the best solution divided by the smallest step cost &mdash; and are written $O(b^{1+\\lfloor C^*/\\varepsilon \\rfloor})$. With many tiny steps it can be much slower than BFS.</p>

<h3>3. Depth-First Search (DFS)</h3>

<p><strong>Rule:</strong> take out the <strong>deepest</strong> node — the one created most recently. <strong>Frontier:</strong> a stack, last in, first out.</p>

<p>The strong point of DFS is memory. In its tree-like form it remembers only the current path and the unexpanded siblings along it: $O(bm)$ instead of $O(b^d)$. If the deepest path has 12 steps ($m = 12$) and $b = 10$, that is about 120 nodes, where BFS at the same depth may need a trillion. The saving disappears if DFS keeps a reached table of every state it has seen: the table can grow to the size of the whole state space.</p>

<p><strong>Result:</strong> not optimal. Tree-like DFS is not even complete: it can go around a cycle forever. If it checks the current path for repeated states, it is complete in a finite state space &mdash; but in an infinite one it can still follow an endless branch. Time $O(b^m)$; memory $O(bm)$ for tree-like DFS.</p>

<h3>BFS and DFS on the same tree</h3>

<p>The two rules give very different orders. Choose an algorithm and press <em>Next step</em>; watch the frontier.</p>

<div class="tracer" data-tracer='{"viewBox":"0 0 400 240","label":"A tree with root A; B and C below it; D, E under B; F, G under C. The goal is F.","directed":true,"weighted":false,"start":"A","goal":"F","algos":["bfs","dfs"],"nodes":{"A":{"x":200,"y":40},"B":{"x":110,"y":120},"C":{"x":290,"y":120},"D":{"x":60,"y":200},"E":{"x":160,"y":200},"F":{"x":240,"y":200},"G":{"x":340,"y":200}},"edges":[["A","B",1],["A","C",1],["B","D",1],["B","E",1],["C","F",1],["C","G",1]]}' data-caption="Same tree, same goal F. Only the rule for taking a node out changes. Switch between BFS and DFS, then step through each."></div>

<h3>4. Depth-Limited Search (DLS)</h3>

<p><strong>Rule:</strong> DFS with a hard limit: never go deeper than $\\ell$ levels. <strong>Frontier:</strong> a stack. This stops the endless branch, but creates a new problem — if the goal is deeper than the limit, you will never find it. Time $O(b^{\\ell})$, memory $O(b\\ell)$.</p>

<p>Sometimes the problem gives you a good limit for free. On a map with 20 cities, no sensible route uses more than 19 roads.</p>

<h3>5. Iterative Deepening Search (IDS)</h3>

<p>The clever one. Run DLS with limit 0. Fail. Run it again with limit 1. Fail. Limit 2. Limit 3. Keep going until you find the goal.</p>

<p>A natural objection: <em>"but you throw away all the work every time!"</em> Here are the real numbers, for $b = 10$ and a goal at depth 5, not counting the start node:</p>

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
  <p>In a tree with branching factor 10, the deepest level holds about 90% of all nodes. Levels 1 to 4 are generated again and again, and all that repetition costs about one eighth of a single pass over level 5. You pay about 11% more time and save about 99.9% of the memory. That is why IDS — not BFS — is the standard blind search when you do not know how deep the goal is.</p>
</div>

<p><strong>Result:</strong> complete when $b$ is finite. Optimal when all steps cost the same. Time $O(b^d)$, memory $O(bd)$. It has the memory of DFS and the guarantees of BFS.</p>

<h3>The table to memorise</h3>

<div class="table-figure">
  <p class="table-hint">Swipe sideways to see the whole table &rarr;</p>
  <div class="table-scroll">
    <table class="env-table">
      <thead>
        <tr><th scope="col">Algorithm</th><th scope="col">Takes out</th><th scope="col">Frontier</th><th scope="col">Complete?</th><th scope="col">Optimal?</th><th scope="col">Time</th><th scope="col">Memory</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">BFS</th><td>shallowest</td><td>queue</td><td>Yes¹</td><td>If equal costs</td><td>O(b<sup>d</sup>)</td><td>O(b<sup>d</sup>)</td></tr>
        <tr><th scope="row">UCS</th><td>lowest g(n)</td><td>priority queue</td><td>Yes²</td><td>Yes²</td><td>O(b<sup>1+⌊C*/ε⌋</sup>)</td><td>O(b<sup>1+⌊C*/ε⌋</sup>)</td></tr>
        <tr><th scope="row">DFS, tree-like</th><td>deepest</td><td>stack</td><td>No³</td><td>No</td><td>O(b<sup>m</sup>)</td><td>O(bm)</td></tr>
        <tr><th scope="row">DLS</th><td>deepest, down to ℓ</td><td>stack</td><td>If ℓ ≥ d</td><td>No</td><td>O(b<sup>ℓ</sup>)</td><td>O(bℓ)</td></tr>
        <tr><th scope="row">IDS</th><td>DLS with ℓ = 0, 1, 2, …</td><td>stack</td><td>Yes¹</td><td>If equal costs</td><td>O(b<sup>d</sup>)</td><td>O(bd)</td></tr>
      </tbody>
    </table>
  </div>
  <div class="diagram-caption">¹ when b is finite · ² when b is finite and every step costs at least ε &gt; 0 · ³ yes in a finite state space if it checks the current path for repeated states. b = branching factor · d = depth of the shallowest goal · m = deepest level · ℓ = depth limit · C* = cost of the best solution.</div>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>A robot moves around a warehouse in Riyadh. Moving to the next cell takes 1 second, but passing through a narrow aisle takes 4 seconds. You want the <em>fastest</em> route. Is BFS good enough?</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>No.</strong> BFS returns the route with the fewest moves, and here that is not the fastest. A 5-step route through two narrow aisles takes 11 seconds, while an 8-step route around them takes 8 seconds. When steps have different costs you need UCS — or A*, once you add a heuristic.</p>
  </details>
</div>

<p class="reading-time">12 min read</p>
        `
      },

      {
        title: "Informed Search and A*",
        body: `
<p>Every algorithm so far has been blind. Now we give the agent a hint.</p>

<div class="analogy">
  <span class="analogy-label">The children's game: "hot and cold"</span>
  <p>Looking for a hidden object by opening every drawer in order is uninformed search. Having a friend say "warmer... warmer... cold!" is <strong>informed</strong> search. Your friend does not tell you where the object is. He only ranks your choices. That ranking is a heuristic.</p>
</div>

<div class="definition">
  <p>A <strong>heuristic function</strong> $h(n)$ is a guess at the cost of the cheapest path from the state at node $n$ to a goal. At the goal itself, $h = 0$. It is only a guess: cheap to compute, allowed to be wrong, and useful as long as it is close to the truth.</p>
</div>

<p>The heuristic used in this section is the <strong>straight-line distance</strong>: for maps, the distance in a straight line to the destination. Roads curve, so the real drive is never shorter than this.</p>

<p>How do we use the hint? There are two ways. The first is quick, but it can return an expensive path. The second is A*.</p>


<h3>Greedy best-first search: follow your nose</h3>

<p><strong>Rule:</strong> take out the node with the smallest $h(n)$ &mdash; the one that <em>looks</em> closest to the goal &mdash; and ignore what you already spent. <strong>Frontier:</strong> a priority queue ordered by $h$.</p>

<div class="analogy">
  <span class="analogy-label">Walking towards a mountain you can see</span>
  <p>You always take the path that points most directly at the peak. It works well — until your path meets a deep valley, while the path that curved away had a bridge. Greedy search never looks back at what it spent. It only looks forward at what it hopes is left.</p>
</div>

<p>On the delivery map, B looks closest to the customer: its straight-line distance is only 3 km. Greedy search drives to B, finds G there with $h = 0$, and returns S &rarr; B &rarr; G: 9 km. The road from B to G winds for 7 km, and greedy search never checked.</p>

<p><strong>Result:</strong> can be fast with a good heuristic, but <em>not optimal</em>. In its tree-like form it is not even complete, because it can bounce between two states that both look good; with a reached table it is complete in a finite state space. Worst case $O(b^m)$.</p>

<h3>A*: the algorithm you will remember from this course</h3>

<div class="callout note">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">First, the name</div>
    <p>A* is written with a star and said out loud as <strong>"A-star"</strong>. The star is part of the name — it is not multiplication and not a footnote mark. It comes from the 1968 paper by Hart, Nilsson and Raphael: they called their family of algorithms "A", and marked with a star the version they proved always returns the cheapest path.</p>
  </div>
</div>

<div class="definition">
  <p>A* expands the node with the smallest $f(n) = g(n) + h(n)$, where $g(n)$ is the cost <em>already paid</em> to reach $n$, and $h(n)$ is the guess for the cost <em>still to pay</em>. So $f(n)$ is a guess at the total cost of the best solution passing through $n$. <strong>Frontier:</strong> a priority queue ordered by $f$.</p>
</div>

<p>Before the formula, one number. In the delivery map, the node for B has $g = 2$: the driver has already driven 2 km. Its $h = 3$: the customer is 3 km away in a straight line. So $f = 2 + 3 = 5$: "a route through B will cost at least about 5 km." Both numbers are kilometres, so adding them makes sense. If $g$ were in kilometres and $h$ in minutes, the sum would mean nothing.</p>

<div class="aha">
  <div class="aha-label">A* is not really a new algorithm</div>
  <p>Set $h(n) = 0$ and A* becomes uniform-cost search. Ignore $g(n)$ and it becomes greedy search. A* is just UCS that was given a hint. The whole idea is adding one guess to one running total — and the famous guarantee comes straight from that: if the guess is never too high, then $f$ is never too high either, so A* cannot settle for an expensive goal while a cheaper one is still reachable.</p>
</div>

<h3>Worked example: A* on the delivery map</h3>

<p>Each circle now also shows $h$: the straight-line distance in kilometres from that place to the customer. The table follows A* one step at a time. In every step A* takes out the node with the smallest $f$, tests it, and, if it is not the goal, expands it.</p>

<div class="table-figure">
  <p class="table-hint">Swipe sideways to see the whole table &rarr;</p>
  <div class="table-scroll">
    <table class="env-table trace-table">
      <thead>
        <tr><th scope="col">Step</th><th scope="col">Taken out</th><th scope="col">What A* does</th><th scope="col">Frontier after the step, smallest f first</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">0</th><td>&mdash;</td><td>Start.</td><td>S (0 + 5 = 5)</td></tr>
        <tr><th scope="row">1</th><td>S, f = 5</td><td>Creates A, B and D.</td><td>B (2 + 3 = 5) · A (3 + 4 = 7) · D (3 + 6 = 9)</td></tr>
        <tr><th scope="row">2</th><td>B, f = 5</td><td>Creates C with g = 6, and G with g = 9. G is the goal, but A* tests only the nodes it takes out.</td><td>A (3 + 4 = 7) · D (3 + 6 = 9) · C (6 + 3 = 9) · G (9 + 0 = 9)</td></tr>
        <tr><th scope="row">3</th><td>A, f = 7</td><td>Reaches C again, now with g = 3 + 2 = 5, less than 6. Updates the reached table and adds the cheaper C.</td><td>C (5 + 3 = 8) · D (9) · C (9, old) · G (9)</td></tr>
        <tr><th scope="row">4</th><td>C, f = 8</td><td>Reaches G again, now with g = 5 + 3 = 8, less than 9. Updates G.</td><td>G (8 + 0 = 8) · D (9) · C (9, old) · G (9, old)</td></tr>
        <tr><th scope="row">5</th><td>G, f = 8</td><td>G is the goal. Return S &rarr; A &rarr; C &rarr; G, cost 8 km.</td><td>D (9) · C (9, old) · G (9, old) &mdash; never taken out</td></tr>
      </tbody>
    </table>
  </div>
  <div class="diagram-caption">When two nodes have the same f, the one that entered the frontier first comes out first. "Old" marks an entry whose state was later reached more cheaply.</div>
</div>

<p>Three things to notice:</p>

<ol class="steps">
  <li><strong>The goal appeared early</strong><p>G entered the frontier at step 2 with $g = 9$. Had A* tested nodes when it created them, it would have returned the 9 km route. Testing when a node is taken out gave the cheaper path through C time to arrive.</p></li>
  <li><strong>Cheaper paths replace dearer ones</strong><p>At steps 3 and 4, A* reached C and G again more cheaply. It updated the reached table and added the new nodes. The old entries stay in the frontier; if one ever reaches the front, A* skips it.</p></li>
  <li><strong>The hint saved work</strong><p>A* never expanded D: $f(D) = 3 + 6 = 9$ is larger than the cost of the solution, 8. Uniform-cost search, which ignores $h$, expands D before C (section 3.4).</p></li>
</ol>

<p>Now step through the same search yourself. The table above is the full record; the tracer shows one step at a time on the map.</p>

<div class="tracer" data-tracer='{"viewBox":"0 0 480 310","label":"Delivery map: restaurant S, customer G, places A, B, C, D, roads in km","weighted":true,"start":"S","goal":"G","nodes":{"S":{"x":60,"y":150,"h":5,"hAt":[-30,36]},"A":{"x":185,"y":62,"h":4,"hAt":[0,-32]},"B":{"x":200,"y":178,"h":3,"hAt":[-36,34]},"C":{"x":330,"y":80,"h":3,"hAt":[0,-32]},"D":{"x":100,"y":262,"h":6,"hAt":[44,6]},"G":{"x":420,"y":170,"h":0,"hAt":[0,40]}},"edges":[["S","A",3,0,-12,-6],["S","B",2,0,0,-12],["S","D",3,0,-14,0],["A","C",2,0,0,-12],["B","C",4,0,12,4],["B","G",7,60,0,14],["C","G",3,0,12,-6]],"showH":true,"algos":["astar"]}' data-caption="Same map, now with h: the straight-line distance in km from each place to the customer, G. Press Next step to follow A*; the steps match the table above."></div>

<h3>Admissible: when A* returns the cheapest path</h3>

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
      <li>You may still get an answer, but not always the cheapest one</li>
      <li>It can expand fewer nodes, and some systems accept that trade on purpose</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Admissible (optimistic)</span>
    <h4>What you gain</h4>
    <ul>
      <li>Never guesses higher than the real cost</li>
      <li>A* is guaranteed to return a cheapest path</li>
      <li>The closer the guess, the fewer nodes expanded</li>
      <li>h(n) = 0 is admissible but gives no help — A* becomes UCS</li>
    </ul>
  </div>
</div>

<h3>Consistent: the stronger version</h3>

<div class="definition">
  <p>$h$ is <strong>consistent</strong> if, for every node $n$ and every child $n'$ reached by a step of cost $c$: $h(n) \\le c + h(n')$. In words: taking one step should never improve your guess by more than that step actually cost.</p>
</div>

<p>Every consistent heuristic is also admissible. The opposite is not always true. With a consistent $h$, the first time A* takes a state out of the frontier it has already found the cheapest way there, so it never has to expand that state again. With an $h$ that is admissible but not consistent, the code below still returns a cheapest path, but it may have to expand some states a second time.</p>

<p>Straight-line distance is consistent: no road from $n$ to $n'$ is shorter than the straight line between them, so $h(n) \\le c + h(n')$ always holds. Measured in kilometres, it is also admissible &mdash; which is why A* returned the cheapest route on the delivery map.</p>

<h3>A* in Python</h3>

<pre><code class="language-python">import heapq

def a_star(problem, h):
    """A* = best-first search using f(n) = g(n) + h(n)."""
    start = Node(problem.initial)
    frontier = [(h(start.state), 0, start)]   # (f, tie-breaker, node)
    reached = {problem.initial: start}        # best node found for each state
    counter = 0

    while frontier:
        _, _, node = heapq.heappop(frontier)
        if node.path_cost &gt; reached[node.state].path_cost:
            continue                          # old entry: a cheaper path was found later

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
    return None                               # frontier empty: no solution
</code></pre>

<p>Four details make this code correct. The <code>counter</code> breaks ties in $f$: the node pushed first comes out first, which is the rule used in the table. The first check skips old entries, so a state is never expanded through a path that is already known to be too expensive. The goal test comes after the node is taken out, not when it is created. And the returned node carries its parent links, so <code>path(node)</code> from section 3.2 rebuilds the route. Run on the delivery map with the straight-line $h$, it returns the node for G with <code>path_cost</code> 8, and <code>path</code> gives the actions to A, to C, to G.</p>

<h3>What A* guarantees</h3>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">✅</span>
      <strong>Complete</strong>
      <p>When the branching factor is finite and every step costs at least some fixed amount ε &gt; 0.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🏆</span>
      <strong>Optimal</strong>
      <p>Under the same conditions, with an admissible h. With a consistent h, it also never has to expand a state twice.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">💾</span>
      <strong>Hungry for memory</strong>
      <p>A* keeps every node it creates. On hard problems it fills the memory before it runs out of time.</p>
    </div>
  </div>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>A real map. Road numbers are driving distances in kilometres; the number in each circle is $h$, the straight-line distance to Riyadh. Which route does greedy best-first search return, and which does A* return? For A*, compute $f$ for the first two choices out of Makkah.</p>
<div class="diagram">
  <svg viewBox="0 0 700 305" role="img" aria-label="Road map from Makkah to Riyadh with distances and straight-line values" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;">
    <text x="350" y="20" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">MAKKAH → RIYADH</text>

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

  </svg>
  <div class="diagram-caption">Road distances are approximate. Straight-line values were computed from city coordinates.</div>

  <details>
    <summary>Show answer</summary>
    <p><strong>Greedy</strong> looks only at $h$. Madinah (714) really is closer to Riyadh in a straight line than Taif (746), so greedy goes north: Makkah &rarr; Madinah &rarr; Buraydah &rarr; Riyadh, <strong>1460 km</strong>.</p>
    <p><strong>A*</strong> adds what it already paid. Through Taif: $g = 90$, $h = 746$, so $f = 836$. Through Madinah: $g = 450$, $h = 714$, so $f = 1164$. A* expands Taif first, then Afif ($g = 510$, $f = 510 + 391 = 901$), and creates Riyadh with $g = f = 940$. Riyadh comes out before Madinah (1164), so A* returns Makkah &rarr; Taif &rarr; Afif &rarr; Riyadh, <strong>940 km</strong>, without ever expanding Madinah.</p>
  </details>
</div>

<p class="reading-time">14 min read</p>
        `
      },

      {
        title: "Designing and Evaluating Heuristics",
        body: `
<p>A* is only as good as its hint. This section is about the hints themselves: how to check one, how to compare two of them, and how to invent one for a new problem.</p>

<h3>Is this h too high? Check it against the real cost</h3>

<p>Admissibility is a promise about every node: $h(n)$ is never larger than the real cost of the cheapest path from $n$ to a goal. On a small map you can check the promise by hand. Here are the straight-line values from the delivery map, next to the real remaining cost of the cheapest road route:</p>

<div class="table-figure">
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Place</th><th scope="col">h(n)</th><th scope="col">Real remaining cost</th><th scope="col">Too high?</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">S</th><td>5</td><td>8 (S &rarr; A &rarr; C &rarr; G)</td><td>No</td></tr>
        <tr><th scope="row">A</th><td>4</td><td>5 (A &rarr; C &rarr; G)</td><td>No</td></tr>
        <tr><th scope="row">B</th><td>3</td><td>7 (B &rarr; G, or B &rarr; C &rarr; G)</td><td>No</td></tr>
        <tr><th scope="row">C</th><td>3</td><td>3 (C &rarr; G)</td><td>No &mdash; equal is allowed</td></tr>
        <tr><th scope="row">D</th><td>6</td><td>11 (D &rarr; S, then 8 more)</td><td>No</td></tr>
      </tbody>
    </table>
  </div>
  <div class="diagram-caption">Every value is at or below the real cost, so this h is admissible.</div>
</div>

<p>Now suppose someone sets $h(B) = 8$, because "B's road to the customer is long". The real remaining cost from B is 7, and 8 is larger: this $h$ is <strong>not admissible</strong>. On this map the damage happens to be invisible, because the best route avoids B anyway. But the guarantee is gone: on another map, a guess that is too high can hide the best route.</p>

<h3>Two heuristics for the 8-puzzle</h3>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">🔢</span>
      <strong>h₁ — misplaced tiles</strong>
      <p>Count the tiles that are not in their correct square. Each one needs at least one move.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🗺️</span>
      <strong>h₂ — Manhattan distance</strong>
      <p>For every tile, add its horizontal and vertical distance from its correct square. Each tile needs at least that many moves.</p>
    </div>
  </div>
</div>

<h3>Dominance: comparing two admissible heuristics</h3>

<p>If both are admissible and $h_2(n) \\ge h_1(n)$ for every node, we say $h_2$ <strong>dominates</strong> $h_1$. That is a precise statement about the two functions: $h_2$ is never smaller, and never too high.</p>

<p>What does it mean for the search? With consistent heuristics, such as these two, every node that A* expands with $h_2$ is also expanded with $h_1$ &mdash; except possibly some nodes whose $f$ equals the cost of the best solution, where the order of ties decides. So A* with $h_2$ expands no more nodes than A* with $h_1$, apart from ties. It is a guarantee about the number of nodes, not about seconds: $h_2$ may cost more to compute at each node.</p>

<p>How large is the difference in practice? Russell &amp; Norvig (3rd edition) report averages over 100 random 8-puzzle problems that need 12 moves: iterative deepening, with no hint, created about 3.6 million nodes; A* with $h_1$ about 230; A* with $h_2$ about 70. Your own counts will differ with the implementation and the tie-breaking rule.</p>

<h3>Where do heuristics come from?</h3>

<ol class="steps">
  <li><strong>Relax the problem: remove a rule</strong><p>A <strong>relaxed problem</strong> is the same problem with fewer rules, so it is easier to solve exactly. If a tile could jump anywhere, the exact cost is the number of misplaced tiles — that is $h_1$. If a tile could slide onto any neighbouring square, even a full one, the exact cost is the Manhattan distance — that is $h_2$. The exact cost of a relaxed problem is always an admissible heuristic for the real one, because every real solution is also a solution of the relaxed problem.</p></li>
  <li><strong>Solve part of the problem exactly</strong><p>Compute in advance the exact cost of putting tiles 1 to 4 in place, ignoring the others, and save it in a table. Then just look it up during the search.</p></li>
  <li><strong>Take the largest of several</strong><p>If $h_a$ and $h_b$ are both admissible, then $\\max(h_a, h_b)$ is admissible too, and it dominates both. You pay to compute both, so do this only when each one is cheap.</p></li>
</ol>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">Accuracy against computation cost</div>
    <p>A perfect heuristic would walk you straight to the goal — but computing it exactly means solving the problem first, so you gained nothing. The real engineering question is the balance: is this guess accurate enough to be worth its cost at every node?</p>
  </div>
</div>

<div class="callout note">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Further exploration: learned heuristics (not in the quiz)</div>
    <p>Some modern systems learn $h$ from data: a model is trained on problems that were already solved, and it predicts the remaining cost of new states. A learned guess can be sharp, but nothing forces it to stay at or below the real cost. It is not automatically admissible, so A*'s guarantee of a cheapest path does not come with it.</p>
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

<p class="reading-time">7 min read</p>
        `
      },

      {
        title: "Applications of Search",
        body: `
<p>Search is not only a classroom exercise. It is part of services you use every week.</p>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">🧭</span>
      <strong>Route planning</strong>
      <p>Maps apps find routes over road graphs with millions of edges, using improved versions of Dijkstra's algorithm and A*, and plan again when traffic changes.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🚚</span>
      <strong>Delivery services</strong>
      <p>Delivery apps in Saudi cities decide which driver takes which order, and in which order to visit the stops: a search over possible routes and orders.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">📅</span>
      <strong>Scheduling</strong>
      <p>Assigning exams to rooms and time slots at a university is a search through a huge space of possible timetables.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🤖</span>
      <strong>Warehouse robots</strong>
      <p>Robots in large warehouses search for a path to the shelf they need that avoids collisions with shelves and with other robots.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🕋</span>
      <strong>Crowd routing in Hajj and Umrah</strong>
      <p>Planning safe walking routes and gate assignments for very large crowds is a search over paths with capacity limits.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🧠</span>
      <strong>Assistants that plan their own steps</strong>
      <p>What industry calls <em>agentic AI</em> (Module 2) are systems that pursue a goal with little step-by-step human direction — and choosing their sequence of steps is a search problem.</p>
    </div>
  </div>
</div>

<h3>Choosing a search algorithm</h3>

<p>Three questions decide most choices in this module: do all steps cost the same, is memory tight, and do you have a good heuristic?</p>

<div class="table-figure">
  <p class="table-hint">Swipe sideways to see the whole table &rarr;</p>
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Your situation</th><th scope="col">Choose</th><th scope="col">Why</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">All steps cost the same, enough memory</th><td>BFS</td><td>Fewest steps is then the cheapest path.</td></tr>
        <tr><th scope="row">All steps cost the same, memory is tight, depth unknown</th><td>IDS</td><td>The guarantees of BFS with the memory of DFS.</td></tr>
        <tr><th scope="row">A safe depth limit is known in advance</th><td>DLS</td><td>The limit stops endless branches.</td></tr>
        <tr><th scope="row">Steps have different costs, no heuristic</th><td>UCS</td><td>Takes out the lowest path cost first.</td></tr>
        <tr><th scope="row">Steps have different costs, an admissible heuristic exists</th><td>A*</td><td>Still a cheapest path; with a consistent h it never expands more nodes than UCS, apart from ties.</td></tr>
        <tr><th scope="row">Any path will do, quickly, and a heuristic exists</th><td>Greedy best-first</td><td>Follows h only: fast, but with no guarantee of a cheapest path.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="diagram-caption">There is no "best" search algorithm. There is only the best fit for the costs, the memory, and the knowledge you have.</div>
</div>

<h3>The whole module in one paragraph</h3>

<p>Describe your problem with five parts. Explore it with a frontier, and remember the states you reached. Judge every algorithm on completeness, optimality, time, and memory — and expect memory to be the limit that stops you. With no hint, use BFS when all steps cost the same, UCS when they do not, and IDS when memory is tight. With a hint, add it to the cost you already paid, and you have A*, which returns a cheapest path whenever the hint is never too high.</p>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>You are assigning 400 exams to rooms and time slots at the university. No student may have two exams at the same time, and you would like as few students as possible to have two exams on the same day. Write the five parts if you build the timetable one exam at a time. Then ask: does the order in which you placed the exams matter to anyone?</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>As a path search.</strong> <strong>States:</strong> partial timetables (some exams placed, some not). <strong>Actions:</strong> place the next exam in a legal room and slot. <strong>Transition model:</strong> the timetable with that exam added. <strong>Goal test:</strong> all exams placed and no hard requirement broken. <strong>Action cost:</strong> what each placement adds to the thing to improve (Module 2) — for example, one point for each student who now has two exams on the same day.</p>
    <p>With that cost, the path cost is the score of the finished timetable, and UCS or A* would find a cheapest sequence of placements. That is already optimization: path search can aim at the best answer too.</p>
    <p><strong>But the order does not matter to anyone.</strong> Students see only the final timetable. When only the final result counts, we can stop building paths and work directly with complete timetables, improving them one change at a time.</p>
  </details>
</div>

<div class="callout note">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Further exploration: AI search and search engines (not in the quiz)</div>
    <p>The word <em>search</em> has a second meaning in computing. This module searches for a <em>sequence of actions</em> that reaches a goal. A search engine performs <em>information retrieval</em>: it looks for <em>documents</em> that are relevant to a query.</p>
    <ul>
      <li><strong>Input.</strong> AI search: a problem &mdash; initial state, actions, goal. Information retrieval: a query &mdash; words or a question.</li>
      <li><strong>Output.</strong> AI search: a path, that is, a sequence of actions. Information retrieval: a ranked list of documents.</li>
      <li><strong>Judged by.</strong> AI search: reaching the goal, and the path cost. Information retrieval: how relevant the top results are.</li>
      <li><strong>Example.</strong> AI search: S &rarr; A &rarr; C &rarr; G, 8 km. Information retrieval: the university pages about exam rules.</li>
    </ul>
    <p><em>Semantic search</em> ranks documents by meaning rather than by exact words, by comparing number vectors (embeddings) of the query and of each document. <em>Retrieval-augmented generation</em> (RAG) joins retrieval and text generation: a retrieval step finds relevant passages, and a large language model writes an answer from them. Neither plans a sequence of actions, so neither is the search of this module.</p>
  </div>
</div>

<div class="aha">
  <div class="aha-label">Where this takes you next</div>
  <p>What if we only care about the quality of the final solution, not the path used to construct it? That question opens Module 4, local search and optimization. Local search improves candidate solutions instead of finding paths to a goal, so it usually does not keep the path that led to an answer.</p>
  <p>The later modules reuse this module too. Adversarial search (Module 5) searches a tree where an opponent chooses every second move, and constraint satisfaction (Module 6) searches partial assignments, like the timetable above.</p>
</div>

<p class="reading-time">7 min read</p>
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
          "<strong>Action cost</strong> — the price of one step; add them for the path cost",
          "<strong>Solution</strong> = any path from start to goal · <strong>optimal solution</strong> = a cheapest one",
          "A <strong>heuristic</strong> is not one of the five parts: it is extra knowledge for the solver"
        ]
      },
      {
        group: "Three numbers not to mix",
        items: [
          "<strong>Path cost</strong> — the cost of the answer (the 8 km the driver drives)",
          "<strong>Search time</strong> — the algorithm's work: nodes created or expanded",
          "<strong>Search memory</strong> — what it stores at once: frontier and reached table"
        ]
      },
      {
        group: "Formulas to memorise",
        items: [
          "<code>g(n)</code> = cost already paid from the start to n",
          "<code>h(n)</code> = guessed cost from n to the goal, in the same unit as g",
          "<code>f(n) = g(n) + h(n)</code> — this is A*",
          "<code>h(n) = 0</code> → A* becomes UCS",
          "ignore <code>g(n)</code> → A* becomes greedy search",
          "Admissible: <code>h(n) ≤ real remaining cost</code>",
          "Consistent: <code>h(n) ≤ c + h(n')</code>",
          "Dominance: both admissible and <code>h₂(n) ≥ h₁(n)</code> → A* with h₂ expands no more nodes, apart from ties"
        ]
      },
      {
        group: "Which algorithm, when",
        items: [
          "Equal step costs, enough memory → <strong>BFS</strong>",
          "Equal step costs, memory is tight, depth unknown → <strong>IDS</strong>",
          "Different step costs, no hint → <strong>UCS</strong>",
          "Admissible hint, need a cheapest path → <strong>A*</strong>",
          "Any path, quickly, with a hint → <strong>greedy best-first</strong> (no guarantee)"
        ]
      },
      {
        group: "Complexity table",
        items: [
          "BFS — queue; complete if b is finite; optimal if equal costs; time and memory <code>O(b^d)</code>",
          "UCS — priority queue by g; complete and optimal if b is finite and every step costs at least ε &gt; 0",
          "DFS — stack; tree-like: not complete, not optimal; time <code>O(b^m)</code>, memory <code>O(bm)</code>",
          "DLS — complete only if ℓ ≥ d; time <code>O(b^ℓ)</code>, memory <code>O(bℓ)</code>",
          "IDS — complete if b is finite; optimal if equal costs; time <code>O(b^d)</code>, memory <code>O(bd)</code>"
        ]
      },
      {
        group: "A* on the delivery map",
        items: [
          "Takes out S (f 5), B (f 5), A (f 7), C (f 8), then G (f 8)",
          "G is created at step 2 with g = 9, but is not returned: the goal is tested when taken out",
          "C and G are reached again more cheaply; the old entries are skipped",
          "D is never expanded: f(D) = 9 is more than the solution cost, 8",
          "<strong>Answer: S → A → C → G, 8 km.</strong> Greedy and BFS both return S → B → G, 9 km"
        ]
      },
      {
        group: "Mistakes that cost marks",
        items: [
          "Saying BFS is always optimal — it is not, unless all steps cost the same",
          "Calling the driving distance the search time — path cost belongs to the answer, search time to the algorithm",
          "Testing the goal when a node is <em>created</em> in UCS or A* instead of when it is <em>taken out</em>",
          "Confusing a state with a node: one state can appear in many nodes",
          "Giving O(bm) memory to a DFS that keeps a reached table of every state",
          "Adding g in kilometres to h in minutes — g and h must use the same unit",
          "Forgetting the reached table and then wondering why the search never stops"
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
    subtitle: "Optimization Problems, Hill Climbing, Genetic Algorithms, Gradient Descent",
    shortDesc: "When nobody cares how you got there — only how good the final answer is.",
    hours: 8,
    story: "In Module 3 the answer was a path. Here the answer is one complete solution — a timetable, a choice of projects, a number — and we want the best one we can find. This module first teaches you to describe such a problem: what you choose, what must hold, and how to score an answer. Then it shows three ways to improve an answer: one candidate at a time, a whole population at once, and by following the slope.",
    objectives: [
      "Describe an optimization problem: decision variables, candidate solutions, search space, objective function, constraints, feasible region and neighbourhood.",
      "Classify an optimization problem as discrete or continuous, and as minimization or maximization.",
      "Trace hill climbing on a small example, and explain local optimum, plateau and ridge, and how sideways moves and random restarts help.",
      "Trace one generation of a genetic algorithm — fitness, selection, crossover, mutation — and handle a child that breaks a constraint.",
      "Apply gradient descent to a function of one variable and explain the effect of the learning rate."
    ],
    collapseTerms: true,
    terms: [
      { term: "Optimization", meaning: "Finding the best possible solution according to a defined objective, while satisfying any constraints that apply." },
      { term: "Decision variable", meaning: "Something whose value we choose, such as the time slot of each exam. A solution gives a value to every decision variable." },
      { term: "Candidate solution", meaning: "One complete choice of values for all the decision variables, such as one full timetable, good or bad. In Module 3 a solution was a path; here it is one complete answer." },
      { term: "Search space (solution space)", meaning: "All the candidate solutions the representation allows, including bad ones and ones that break constraints." },
      { term: "Objective function", meaning: "A function that gives each candidate solution a number that measures its quality. We minimize it (cost, error, penalty) or maximize it (profit, benefit, fitness). It plays the role of Module 2's utility function: a value for each candidate. In machine learning it is called a loss function." },
      { term: "Minimization / maximization", meaning: "The direction of the search: minimize a cost, an error or a penalty; maximize a profit, a benefit or a fitness. Maximizing f is the same as minimizing −f." },
      { term: "Constraint", meaning: "A requirement that a feasible solution must satisfy, such as: no student has two exams at the same time. Section 2.3 calls it a hard requirement; Module 6 calls it a hard constraint." },
      { term: "Soft preference", meaning: "A desirable condition that is not required, such as few students with two exams on one day. It enters the objective function as a penalty or a reward." },
      { term: "Penalty", meaning: "An amount added to the objective each time a soft preference is not met, when the objective is minimized." },
      { term: "Feasible solution", meaning: "A candidate solution that satisfies every constraint. All feasible solutions together form the feasible region, which is part of the search space." },
      { term: "Neighbourhood", meaning: "The candidate solutions reachable from the current one by one small, defined change, such as moving one exam to another slot. Each of them is a neighbour." },
      { term: "Discrete optimization", meaning: "Optimization where the decision variables take separate values: whole numbers, yes/no choices or orderings. Example: the exam timetable." },
      { term: "Continuous optimization", meaning: "Optimization where the decision variables take real values anywhere in a range. Example: choosing x to minimize (x − 3)²." },
      { term: "Local search", meaning: "A family of methods that move between candidate solutions, using a neighbourhood or other small changes, to improve the objective. They usually do not keep the path that led to the answer." },
      { term: "Single-solution optimization", meaning: "Methods that hold and improve one candidate solution at a time, such as hill climbing." },
      { term: "Population-based optimization", meaning: "Methods that hold and improve a group of candidate solutions at a time, such as genetic algorithms. The members are candidate solutions, not agents." },
      { term: "Landscape", meaning: "A picture of a problem: each position is a candidate solution, and the height is its objective value." },
      { term: "Global optimum", meaning: "The best feasible solution in the whole problem: the global maximum when maximizing, the global minimum when minimizing." },
      { term: "Local optimum", meaning: "A solution that no neighbour improves. It may also be the global optimum, or a better solution may exist elsewhere. It is a local maximum or a local minimum, depending on the direction." },
      { term: "Plateau", say: "pla-TOH", meaning: "A flat area where all neighbours have the same value, so the search has no direction to follow." },
      { term: "Ridge", meaning: "A narrow line along which the objective improves, but every single move the neighbourhood allows makes it worse, so the search stops early." },
      { term: "Hill climbing", meaning: "Single-solution local search: move to the best neighbour, and stop when no neighbour is better. Better means higher when maximizing, lower when minimizing." },
      { term: "Sideways move", meaning: "A move to a neighbour with the same objective value. A limited number of them lets hill climbing cross a plateau." },
      { term: "Random-restart hill climbing", meaning: "Running hill climbing many times from new random starting solutions and keeping the best result. With success probability p per run, about 1/p runs are needed on average." },
      { term: "Stopping criterion", meaning: "The rule that ends a search loop: no neighbour is better (hill climbing), the step is tiny or a step limit is reached (gradient descent), or the best fitness stops improving (genetic algorithm)." },
      { term: "Simulated annealing", say: "a-NEE-ling", meaning: "Optional reading. A variant of hill climbing that sometimes accepts a worse neighbour on purpose, often at first and rarely later, to escape a local optimum." },
      { term: "Nature-inspired optimization", meaning: "Optimization methods that take their main idea from a process in nature: biological evolution (genetic algorithms), swarms (particle swarm and ant colony optimization) or physical annealing (simulated annealing). Some keep a population and some keep one solution at a time; a natural origin does not make a method better." },
      { term: "Genetic algorithm", meaning: "Population-based optimization: score the population with a fitness function, select parents, apply crossover and mutation, and repeat with the new generation." },
      { term: "Population", meaning: "The group of candidate solutions a genetic algorithm holds at one time. Each round of the cycle produces a new generation." },
      { term: "Chromosome (individual)", meaning: "How one candidate solution is written in a genetic algorithm, often as a string such as 1010. One member of the population is called an individual." },
      { term: "Fitness function", meaning: "The score a genetic algorithm gives each chromosome, where higher is better. If the objective is a cost, the fitness must reverse it." },
      { term: "Selection", meaning: "Choosing parents at random, with fitter chromosomes more likely to be chosen." },
      { term: "Crossover", meaning: "Making children by cutting two parent chromosomes at the same point and swapping the tails. It does not guarantee a better child." },
      { term: "Mutation", meaning: "A small random change to a chromosome, such as flipping one bit. It keeps variety in the population, and can make a child better or worse." },
      { term: "Derivative (gradient)", meaning: "The slope of the objective at the current point: which way is uphill and how steep. With one variable it is f′(x); with many it is the gradient ∇f(x)." },
      { term: "Gradient descent", meaning: "Continuous optimization that repeats x ← x − α·f′(x): a step against the slope. With a suitable learning rate the objective goes down; with one that is too large it can go up." },
      { term: "Learning rate", meaning: "α, the size of each step in gradient descent. Too small is slow; too large jumps over the minimum and may never settle." }
    ],
    sections: [
      {
        title: "Introduction to Optimization and Local Search",
        body: `
<p>Every module so far asked an agent to reach a goal. This module asks a different question: of all the answers we could give, which one is the <em>best</em>? That question is called optimization. We first learn to describe it carefully. The algorithms come after.</p>

<h3>What is optimization?</h3>

<div class="definition">
  <p><strong>Optimization</strong> is the process of finding the best possible solution according to a defined objective, while satisfying any constraints that apply.</p>
</div>

<p>Three levels of success are easy to mix up. Take the timetable of your college's final exams:</p>

<ol class="steps">
  <li><strong>An acceptable solution</strong><p>Every exam has a time slot and a room, and no student has two exams at the same time. The timetable can be used.</p></li>
  <li><strong>A better solution</strong><p>It is acceptable, and fewer students have two exams on the same day.</p></li>
  <li><strong>An optimal solution</strong><p>No acceptable timetable is better. To be sure of this, you would have to rule out every other acceptable timetable.</p></li>
</ol>

<p>The methods in this module move from level 1 towards level 3. In general they cannot promise to reach level 3: they aim for a <em>good</em> solution, and they often cannot tell you whether it is the best one.</p>

<div class="callout note">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">You have already met optimization</div>
    <p>In Module 3, uniform-cost search and A* return the cheapest path. That is optimization over paths. So optimization is wider than local search: local search is one family of methods for it, used when the answer is one complete solution rather than a path.</p>
  </div>
</div>

<h3>The parts of an optimization problem</h3>

<p>Before you choose an algorithm, describe the problem. Eight ideas do the job. We use one running example for all of them: the exam timetable.</p>

<ol class="steps">
  <li><strong>Decision variables</strong><p>The things whose values we choose. Timetable: the time slot and the room of each exam.</p></li>
  <li><strong>Candidate solution</strong><p>One complete choice of values for all the decision variables: one full timetable, good or bad. In Module 3 a solution was a path. Here a solution is one complete answer.</p></li>
  <li><strong>Search space</strong><p>All the candidate solutions that the representation allows. Timetable: every way of giving each exam a slot and a room, including terrible ones. It is also called the solution space.</p></li>
  <li><strong>Objective function</strong><p>A function that gives each candidate solution a number that measures its quality. Timetable: how many times a student has two exams on the same day.</p></li>
  <li><strong>Minimize or maximize</strong><p>The direction of the search. We minimize a cost, an error, a distance or a penalty. We maximize a profit, a benefit or a fitness. Timetable: minimize.</p></li>
  <li><strong>Constraint</strong><p>A requirement that a solution must satisfy to be accepted at all. Timetable: no student has two exams at the same time, and no room holds more students than it has seats.</p></li>
  <li><strong>Feasible solution and feasible region</strong><p>A feasible solution satisfies every constraint. The feasible region is the set of all feasible solutions. It is part of the search space, not all of it.</p></li>
  <li><strong>Neighbourhood</strong><p>The candidate solutions you can reach from the current one by one small, defined change. Timetable: move one exam to another slot, or swap the slots of two exams. Each of these is a neighbour.</p></li>
</ol>

<div class="diagram">
  <svg viewBox="0 0 700 310" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;" role="img" aria-label="The feasible region is part of the search space; the objective function scores a feasible candidate solution.">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">ANATOMY OF AN OPTIMIZATION PROBLEM</text>
    <rect x="20" y="40" width="400" height="255" rx="14" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="2"/>
    <text x="38" y="64" font-size="12" fill="var(--ink)" font-weight="700">Search space</text>
    <text x="38" y="81" font-size="11" fill="var(--ink-soft)">every candidate solution</text>
    <rect x="165" y="95" width="235" height="180" rx="12" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
    <text x="180" y="117" font-size="12" fill="var(--accent)" font-weight="700">Feasible region</text>
    <text x="180" y="134" font-size="11" fill="var(--ink-soft)">all constraints hold</text>
    <path d="M55 125 L65 135 M65 125 L55 135" stroke="var(--ink-mute)" stroke-width="2"/><path d="M100 170 L110 180 M110 170 L100 180" stroke="var(--ink-mute)" stroke-width="2"/><path d="M65 225 L75 235 M75 225 L65 235" stroke="var(--ink-mute)" stroke-width="2"/><path d="M120 257 L130 267 M130 257 L120 267" stroke="var(--ink-mute)" stroke-width="2"/>
    <text x="92" y="292" text-anchor="middle" font-size="11" fill="var(--ink-mute)">× breaks a constraint</text>
    <circle cx="205" cy="170" r="6" fill="var(--accent)"/><circle cx="250" cy="225" r="6" fill="var(--accent)"/><circle cx="290" cy="160" r="6" fill="var(--accent)"/><circle cx="215" cy="250" r="6" fill="var(--accent)"/><circle cx="345" cy="240" r="6" fill="var(--accent)"/>
    <circle cx="335" cy="185" r="8" fill="var(--gold)"/>
    <path d="M345 182 C 400 170, 430 140, 462 128" fill="none" stroke="var(--gold)" stroke-width="2" marker-end="url(#an1)"/>
    <rect x="468" y="95" width="210" height="62" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="573" y="120" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="700">Objective function</text>
    <text x="573" y="140" text-anchor="middle" font-size="11" fill="var(--ink-soft)">gives the candidate a number</text>
    <path d="M573 160 V 190" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#an2)"/>
    <rect x="468" y="195" width="210" height="44" rx="8" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <text x="573" y="222" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="700">penalty = 5</text>
    <path d="M573 242 V 262" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#an2)"/>
    <text x="573" y="282" text-anchor="middle" font-size="11" fill="var(--teal)" font-weight="700">compare numbers: keep the better one</text>
    <defs><marker id="an1" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--gold)"/></marker><marker id="an2" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--ink-mute)"/></marker></defs>
  </svg>
  <div class="diagram-caption">The feasible region sits inside the search space. The objective function scores one candidate at a time.</div>
</div>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Do not mix up</span>
    <h4>Search space and feasible region</h4>
    <ul>
      <li>The search space holds every candidate the representation allows</li>
      <li>The feasible region keeps only the candidates that satisfy all constraints</li>
      <li>The final answer must be in the feasible region</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Do not mix up</span>
    <h4>Constraint and objective</h4>
    <ul>
      <li>A constraint is yes or no: a solution either satisfies it or is not accepted</li>
      <li>The objective is a number: lower (or higher) is better</li>
      <li>A constraint is never traded for a better objective value</li>
    </ul>
  </div>
</div>

<h3>Constraints and soft preferences</h3>

<p>Not every wish is a constraint. A <strong>soft preference</strong> is a desirable condition that is not required. "Few students with two exams on one day" is a soft preference: a timetable that ignores it can still be used. It is just worse.</p>

<p>A soft preference enters the objective function. When we minimize, each time the preference is not met adds a <strong>penalty</strong>. When we maximize, meeting it can add a reward instead. Section 2.3 drew the same line with different words: hard requirements and things to improve. Module 6 calls the first kind hard constraints.</p>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">A constraint is not just a large penalty</div>
    <p>"No student has two exams at the same time" must always hold. If you write it only as a small penalty, the search may accept a clash to save a few points somewhere else. Keep what must hold as a constraint, and put only the preferences into the objective.</p>
  </div>
</div>

<h3>Discrete or continuous?</h3>

<p>The type of an optimization problem depends on its decision variables, not on the algorithm you use.</p>

<div class="definition">
  <p><strong>Discrete optimization</strong>: the decision variables take separate values, such as whole numbers, yes/no choices, or orderings.</p>
  <p><strong>Continuous optimization</strong>: the decision variables take real values anywhere in a range.</p>
</div>

<p>Section 2.4 used the words <em>discrete</em> and <em>continuous</em> for the states and actions of an environment. Here they describe the decision variables of an optimization problem.</p>

<div class="table-figure">
  <p class="table-hint">Swipe sideways to see all columns &rarr;</p>
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Problem</th><th scope="col">Decision variables</th><th scope="col">Search space</th><th scope="col">Type</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">Order of visiting 5 customers</th><td>the visiting order</td><td>all 120 orders</td><td>Discrete</td></tr>
        <tr><th scope="row">Exam timetable</th><td>slot and room of each exam</td><td>all ways to give each exam a slot and a room</td><td>Discrete</td></tr>
        <tr><th scope="row">Projects within a budget</th><td>fund each project: yes or no</td><td>all yes/no choices (16 for 4 projects)</td><td>Discrete</td></tr>
        <tr><th scope="row">Tuning one number in a machine learning model</th><td>a real number w</td><td>all real values in a range</td><td>Continuous</td></tr>
        <tr><th scope="row">Placing a warehouse on a simple map</th><td>its coordinates (x, y)</td><td>all points in an area</td><td>Continuous</td></tr>
        <tr><th scope="row">Minimize f(x) = (x − 3)²</th><td>a real number x</td><td>all real numbers</td><td>Continuous</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="diagram">
  <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;" role="img" aria-label="Discrete: separate points. Continuous: a smooth curve over a range.">
    <text x="180" y="24" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">DISCRETE</text><text x="530" y="24" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">CONTINUOUS</text>
    <text x="180" y="44" text-anchor="middle" font-size="11" fill="var(--ink-soft)">separate choices, e.g. timetables</text>
    <text x="530" y="44" text-anchor="middle" font-size="11" fill="var(--ink-soft)">any real value in a range, e.g. x</text>
    <line x1="50" y1="210" x2="310" y2="210" stroke="var(--rule)" stroke-width="2"/><line x1="50" y1="60" x2="50" y2="210" stroke="var(--rule)" stroke-width="2"/><line x1="400" y1="210" x2="660" y2="210" stroke="var(--rule)" stroke-width="2"/><line x1="400" y1="60" x2="400" y2="210" stroke="var(--rule)" stroke-width="2"/>
    <circle cx="63" cy="116.3" r="6" fill="var(--accent)"/><circle cx="89" cy="153.8" r="6" fill="var(--accent)"/><circle cx="115" cy="97.5" r="6" fill="var(--accent)"/><circle cx="141" cy="172.5" r="6" fill="var(--accent)"/><circle cx="167" cy="135" r="6" fill="var(--accent)"/><circle cx="193" cy="78.8" r="6" fill="var(--accent)"/><circle cx="219" cy="153.8" r="6" fill="var(--accent)"/><circle cx="245" cy="116.3" r="6" fill="var(--accent)"/><circle cx="271" cy="191.3" r="6" fill="var(--accent)"/><circle cx="297" cy="135" r="6" fill="var(--accent)"/>
    <path d="M400 60 L403.3 67.4 L406.5 74.6 L409.8 81.7 L413 88.5 L416.3 95.2 L419.5 101.6 L422.8 107.9 L426 114 L429.3 119.9 L432.5 125.6 L435.8 131.2 L439 136.5 L442.3 141.7 L445.5 146.6 L448.8 151.4 L452 156 L455.3 160.4 L458.5 164.6 L461.8 168.7 L465 172.5 L468.3 176.2 L471.5 179.6 L474.8 182.9 L478 186 L481.3 188.9 L484.5 191.6 L487.8 194.2 L491 196.5 L494.3 198.7 L497.5 200.6 L500.8 202.4 L504 204 L507.3 205.4 L510.5 206.6 L513.8 207.7 L517 208.5 L520.3 209.2 L523.5 209.6 L526.8 209.9 L530 210 L533.3 209.9 L536.5 209.6 L539.8 209.2 L543 208.5 L546.3 207.7 L549.5 206.6 L552.8 205.4 L556 204 L559.3 202.4 L562.5 200.6 L565.8 198.7 L569 196.5 L572.3 194.2 L575.5 191.6 L578.8 188.9 L582 186 L585.3 182.9 L588.5 179.6 L591.8 176.2 L595 172.5 L598.3 168.7 L601.5 164.6 L604.8 160.4 L608 156 L611.3 151.4 L614.5 146.6 L617.8 141.7 L621 136.5 L624.3 131.2 L627.5 125.6 L630.8 119.9 L634 114 L637.3 107.9 L640.5 101.6 L643.8 95.2 L647 88.5 L650.3 81.7 L653.5 74.6 L656.8 67.4 L660 60" fill="none" stroke="var(--teal)" stroke-width="3"/>
    <text x="38" y="135" font-size="11" fill="var(--ink-mute)" text-anchor="middle" transform="rotate(-90 38 135)">objective</text>
    <text x="388" y="135" font-size="11" fill="var(--ink-mute)" text-anchor="middle" transform="rotate(-90 388 135)">objective</text>
    <text x="180" y="232" text-anchor="middle" font-size="11" fill="var(--ink-mute)">one dot = one candidate; nothing in between</text>
    <text x="530" y="232" text-anchor="middle" font-size="11" fill="var(--ink-mute)">every point on the line is a candidate</text>
  </svg>
  <div class="diagram-caption">Discrete: separate candidates with nothing in between. Continuous: a smooth range of candidates.</div>
</div>

<div class="callout note">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Four facts to keep straight</div>
    <p><strong>Discrete does not mean finite.</strong> A variable that can be any whole number is discrete, yet it has infinitely many values.</p>
    <p><strong>Continuous is not the same as easy.</strong> A continuous objective can have many valleys, and its slope cannot always be computed.</p>
    <p><strong>The type does not fix the method.</strong> Hill climbing works on both types once you define the neighbours. A genetic algorithm can use discrete or continuous chromosomes. Gradient descent usually needs continuous variables and an objective whose slope we can compute.</p>
    <p><strong>Some problems mix both.</strong> When some variables are discrete and others continuous, the problem is a mixed problem. You do not need it in this course.</p>
  </div>
</div>

<h3>Minimize or maximize?</h3>

<div class="formula">
  <p><span>Minimize</span> f(x), subject to x in the feasible region</p>
  <p><span>Maximize</span> f(x), subject to x in the feasible region</p>
</div>

<div class="diagram">
  <svg viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;" role="img" aria-label="Minimizing a cost looks for the lowest point; maximizing a fitness looks for the highest point.">
    <text x="180" y="24" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">MINIMIZE A COST</text><text x="530" y="24" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">MAXIMIZE A FITNESS</text>
    <line x1="50" y1="195" x2="310" y2="195" stroke="var(--rule)" stroke-width="2"/><line x1="50" y1="55" x2="50" y2="195" stroke="var(--rule)" stroke-width="2"/><text x="38" y="125" font-size="11" fill="var(--ink-mute)" text-anchor="middle" transform="rotate(-90 38 125)">cost (lower is better)</text><text x="180" y="215" font-size="11" fill="var(--ink-mute)" text-anchor="middle">candidate solution</text><line x1="400" y1="195" x2="660" y2="195" stroke="var(--rule)" stroke-width="2"/><line x1="400" y1="55" x2="400" y2="195" stroke="var(--rule)" stroke-width="2"/><text x="388" y="125" font-size="11" fill="var(--ink-mute)" text-anchor="middle" transform="rotate(-90 388 125)">fitness (higher is better)</text><text x="530" y="215" font-size="11" fill="var(--ink-mute)" text-anchor="middle">candidate solution</text>
    <path d="M50 67.7 L53.3 73.4 L56.5 78.9 L59.8 84.3 L63 89.5 L66.3 94.6 L69.5 99.5 L72.8 104.3 L76 109 L79.3 113.5 L82.5 117.8 L85.8 122.1 L89 126.1 L92.3 130.1 L95.5 133.9 L98.8 137.5 L102 141 L105.3 144.4 L108.5 147.6 L111.8 150.7 L115 153.6 L118.3 156.4 L121.5 159.1 L124.8 161.6 L128 163.9 L131.3 166.2 L134.5 168.2 L137.8 170.2 L141 172 L144.3 173.6 L147.5 175.1 L150.8 176.5 L154 177.7 L157.3 178.8 L160.5 179.7 L163.8 180.5 L167 181.1 L170.3 181.6 L173.5 182 L176.8 182.2 L180 182.3 L183.3 182.2 L186.5 182 L189.8 181.6 L193 181.1 L196.3 180.5 L199.5 179.7 L202.8 178.8 L206 177.7 L209.2 176.5 L212.5 175.1 L215.8 173.6 L219 172 L222.3 170.2 L225.5 168.2 L228.8 166.2 L232 163.9 L235.3 161.6 L238.5 159.1 L241.7 156.4 L245 153.6 L248.3 150.7 L251.5 147.6 L254.8 144.4 L258 141 L261.3 137.5 L264.5 133.9 L267.8 130.1 L271 126.1 L274.3 122.1 L277.5 117.8 L280.8 113.5 L284 109 L287.3 104.3 L290.5 99.5 L293.8 94.6 L297 89.5 L300.3 84.3 L303.5 78.9 L306.8 73.4 L310 67.7" fill="none" stroke="var(--accent)" stroke-width="3"/>
    <path d="M400 182.3 L403.3 176.6 L406.5 171.1 L409.8 165.7 L413 160.5 L416.3 155.4 L419.5 150.5 L422.8 145.7 L426 141 L429.3 136.5 L432.5 132.2 L435.8 127.9 L439 123.9 L442.3 119.9 L445.5 116.1 L448.8 112.5 L452 109 L455.3 105.6 L458.5 102.4 L461.8 99.3 L465 96.4 L468.3 93.6 L471.5 90.9 L474.8 88.4 L478 86.1 L481.3 83.8 L484.5 81.8 L487.8 79.8 L491 78 L494.3 76.4 L497.5 74.9 L500.8 73.5 L504 72.3 L507.3 71.2 L510.5 70.3 L513.8 69.5 L517 68.9 L520.3 68.4 L523.5 68 L526.8 67.8 L530 67.7 L533.3 67.8 L536.5 68 L539.8 68.4 L543 68.9 L546.3 69.5 L549.5 70.3 L552.8 71.2 L556 72.3 L559.3 73.5 L562.5 74.9 L565.8 76.4 L569 78 L572.3 79.8 L575.5 81.8 L578.8 83.8 L582 86.1 L585.3 88.4 L588.5 90.9 L591.8 93.6 L595 96.4 L598.3 99.3 L601.5 102.4 L604.8 105.6 L608 109 L611.3 112.5 L614.5 116.1 L617.8 119.9 L621 123.9 L624.3 127.9 L627.5 132.2 L630.8 136.5 L634 141 L637.3 145.7 L640.5 150.5 L643.8 155.4 L647 160.5 L650.3 165.7 L653.5 171.1 L656.8 176.6 L660 182.3" fill="none" stroke="var(--teal)" stroke-width="3"/>
    <circle cx="180" cy="182.3" r="7" fill="var(--gold)"/>
    <text x="180" y="168.3" text-anchor="middle" font-size="12" fill="var(--gold)" font-weight="700">minimum</text>
    <circle cx="530" cy="67.7" r="7" fill="var(--gold)"/>
    <text x="530" y="55.7" text-anchor="middle" font-size="12" fill="var(--gold)" font-weight="700">maximum</text>
  </svg>
  <div class="diagram-caption">The same shape of question, seen from two sides. Which side you are on depends on how you defined f.</div>
</div>

<p>The direction comes from the way you define the objective function. Maximizing f is the same as minimizing −f, so every method in this module works in either direction once you flip the sign. In this module, the landscape picture in section 4.2 is drawn for maximization (higher is better). The exam timetable and gradient descent use minimization (lower is better). They do not contradict each other: they look at the same kind of problem from opposite sides.</p>

<h3>Worked example: the exam timetable</h3>

<div class="table-figure">
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Part</th><th scope="col">For the exam timetable</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">Decision variables</th><td>the time slot and the room of each exam</td></tr>
        <tr><th scope="row">Candidate solution</th><td>one complete timetable</td></tr>
        <tr><th scope="row">Search space</th><td>all ways to give every exam a slot and a room</td></tr>
        <tr><th scope="row">Constraints</th><td>no student has two exams at the same time; no room is over its capacity</td></tr>
        <tr><th scope="row">Soft preference</th><td>few students with two exams on the same day</td></tr>
        <tr><th scope="row">Objective function</th><td>penalty = number of times a student has two exams on the same day</td></tr>
        <tr><th scope="row">Direction</th><td>minimize the penalty</td></tr>
        <tr><th scope="row">Neighbourhood</th><td>move one exam to another slot, or swap the slots of two exams, without breaking a constraint</td></tr>
        <tr><th scope="row">Type</th><td>discrete optimization</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>Here are four candidate timetables. The numbers are made up for the example.</p>

<div class="table-figure">
  <p class="table-hint">Swipe sideways to see all columns &rarr;</p>
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Timetable</th><th scope="col">Students with two exams at the same time</th><th scope="col">Feasible?</th><th scope="col">Penalty</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">T1</th><td>0</td><td>yes</td><td>8</td></tr>
        <tr><th scope="row">T2</th><td>0</td><td>yes</td><td>5</td></tr>
        <tr><th scope="row">T3</th><td>0</td><td>yes</td><td>2</td></tr>
        <tr><th scope="row">T4</th><td>3</td><td>no</td><td>1</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>T3 is the best of the three feasible timetables. That does not make it the global optimum: a timetable with penalty 1 or 0 may exist that nobody has tried yet. T4 has the lowest penalty of all, but it breaks a constraint, so we cannot use it. A low objective value never makes up for a broken constraint.</p>

<h3>From optimization to local search</h3>

<p>We can now describe a problem and score any candidate solution. The next question is: <em>how can we improve a solution?</em></p>

<div class="definition">
  <p><strong>Local search</strong> is a family of methods that move between candidate solutions, using a neighbourhood or other small changes, to improve the objective. They care about the quality of the final solution, so they usually do not keep the path that led to it.</p>
</div>

<p>Methods for this kind of problem come in two kinds:</p>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">One candidate</span>
    <h4>Single-solution optimization</h4>
    <ul>
      <li>Holds one candidate solution at a time</li>
      <li>Moves it to a better neighbour, step by step</li>
      <li>Example: hill climbing (section 4.2)</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">A group of candidates</span>
    <h4>Population-based optimization</h4>
    <ul>
      <li>Holds a group of candidate solutions at a time</li>
      <li>Builds a new group from the best of the old one</li>
      <li>Example: genetic algorithms (section 4.3)</li>
    </ul>
  </div>
</div>

<div class="diagram">
  <svg viewBox="0 0 700 262" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;" role="img" aria-label="Single-solution: one candidate improves step by step. Population-based: a group of candidates becomes a new group.">
    <text x="175" y="24" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">SINGLE-SOLUTION</text><text x="525" y="24" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">POPULATION-BASED</text>
    <text x="175" y="44" text-anchor="middle" font-size="11" fill="var(--ink-soft)">e.g. hill climbing (4.2)</text>
    <text x="525" y="44" text-anchor="middle" font-size="11" fill="var(--ink-soft)">e.g. genetic algorithm (4.3)</text>
    <circle cx="50" cy="180" r="7" fill="var(--ink-mute)"/><circle cx="130" cy="145" r="7" fill="var(--ink-mute)"/><circle cx="210" cy="115" r="7" fill="var(--ink-mute)"/><circle cx="290" cy="90" r="9" fill="var(--accent)"/>
    <path d="M58 175 L120 150" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#sp1)"/>
    <path d="M138 140 L200 120" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#sp1)"/>
    <path d="M218 111 L278 94" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#sp1)"/>
    <text x="50" y="205" text-anchor="middle" font-size="11" fill="var(--ink-mute)">start</text>
    <text x="290" y="72" text-anchor="middle" font-size="11" fill="var(--accent)" font-weight="700">current</text>
    <text x="175" y="252" text-anchor="middle" font-size="11" fill="var(--ink-mute)">one candidate at a time</text>
    <rect x="390" y="95" width="105" height="105" rx="10" fill="var(--bg-soft)" stroke="var(--rule)"/>
    <circle cx="415" cy="125" r="7" fill="var(--accent)"/><circle cx="468" cy="120" r="7" fill="var(--accent)"/><circle cx="425" cy="172" r="7" fill="var(--accent)"/><circle cx="472" cy="178" r="7" fill="var(--accent)"/>
    <text x="442" y="218" text-anchor="middle" font-size="11" fill="var(--ink-mute)">generation 0</text>
    <path d="M500 147 H 548" stroke="var(--gold)" stroke-width="2" marker-end="url(#sp2)"/>
    <rect x="555" y="80" width="105" height="105" rx="10" fill="var(--accent-soft)" stroke="var(--accent)"/>
    <circle cx="580" cy="108" r="7" fill="var(--accent)"/><circle cx="633" cy="103" r="7" fill="var(--accent)"/><circle cx="588" cy="155" r="7" fill="var(--accent)"/><circle cx="637" cy="150" r="7" fill="var(--accent)"/>
    <text x="607" y="203" text-anchor="middle" font-size="11" fill="var(--accent)" font-weight="700">generation 1</text>
    <text x="525" y="252" text-anchor="middle" font-size="11" fill="var(--ink-mute)">a group of candidates at a time</text>
    <defs><marker id="sp1" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--ink-mute)"/></marker><marker id="sp2" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--gold)"/></marker></defs>
  </svg>
  <div class="diagram-caption">Single-solution methods improve one candidate. Population-based methods improve a group.</div>
</div>

<p>A population needs more memory than a single candidate, so not every method in this module keeps just one solution in memory. Strictly speaking, genetic algorithms belong to evolutionary, population-based optimization, rather than to local search itself. This course places them here because they solve the same kind of problem.</p>

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
      <p>Choosing the numbers inside a machine learning model is continuous optimization. Section 4.4 shows the basic method, gradient descent.</p>
    </div>
  </div>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>The Red Crescent in Jeddah has 10 possible sites for new ambulance stations. At least one station must be built, and the budget allows at most 3. They want the average time to reach a caller to be as small as possible. Name the decision variables, the search space, the constraint, the objective function and its direction, and the type of problem. Then: what changes if a station may be placed at any point on the map?</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>Decision variables:</strong> for each of the 10 sites, build a station there: yes or no. <strong>Search space:</strong> all yes/no choices for the 10 sites, 2<sup>10</sup> = 1024 candidates. <strong>Constraint:</strong> at least 1 and at most 3 stations, so the feasible region holds only 175 of the 1024 candidates (10 with one station, 45 with two, 120 with three). <strong>Objective function:</strong> the average time to reach a caller; <strong>direction:</strong> minimize. <strong>Type:</strong> discrete optimization.</p>
    <p>Now suppose you will build exactly 3 stations, and each may be placed anywhere on the map. Each station needs its own pair of coordinates (x, y), so you choose three pairs: six real numbers. The problem becomes continuous optimization.</p>
  </details>
</div>

<p class="reading-time">16 min read</p>
        `
      },
      {
        title: "Hill Climbing and Local Search",
        body: `
<p>Hill climbing is the simplest single-solution method. It uses the parts you met in section 4.1: a current solution, its neighbourhood, and the objective function.</p>

<ol class="steps">
  <li><strong>Current solution</strong><p>The candidate solution you hold now. It starts as a random or simple feasible solution.</p></li>
  <li><strong>Neighbours</strong><p>Every candidate in the neighbourhood of the current solution.</p></li>
  <li><strong>Objective value</strong><p>Compute the objective function for each neighbour.</p></li>
  <li><strong>Improving move</strong><p>If the best neighbour is better than the current solution, move to it.</p></li>
  <li><strong>Stopping criterion</strong><p>If no neighbour is better, stop. The current solution is the answer.</p></li>
</ol>

<div class="analogy">
  <span class="analogy-label">Climbing sand dunes in thick fog</span>
  <p>You want the highest point in the dunes, but you can only feel the ground one metre around you. So you always step upward. Eventually every direction goes down, and you stop.</p>
  <p>You are standing on <em>a</em> top. Whether it is <em>the</em> top, you have no way of knowing: the fog never lifts.</p>
</div>

<pre><code class="language-python">def hill_climbing(problem):
    current = problem.initial_solution()
    while True:
        neighbours = problem.neighbours(current)
        if not neighbours:
            return current          # no neighbours at all: stop
        best = min(neighbours, key=problem.cost)
        if problem.cost(best) &gt;= problem.cost(current):
            return current          # no neighbour is better: stop
        current = best
</code></pre>

<p>This version minimizes, because the exam timetable has a penalty to make small. To maximize a fitness instead, use <code>max</code> and <code>&lt;=</code>. The name "hill climbing" comes from the maximization picture, where better means higher.</p>

<h3>Tracing it on the exam timetable</h3>

<p>Start from a feasible timetable with penalty 8, the neighbourhood from section 4.1, and these values, made up for the example:</p>

<div class="table-figure">
  <p class="table-hint">Swipe sideways to see all columns &rarr;</p>
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Step</th><th scope="col">Current penalty</th><th scope="col">Best neighbour</th><th scope="col">Decision</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">1</th><td>8</td><td>5 (move one exam to another slot)</td><td>5 &lt; 8: move</td></tr>
        <tr><th scope="row">2</th><td>5</td><td>3 (swap the slots of two exams)</td><td>3 &lt; 5: move</td></tr>
        <tr><th scope="row">3</th><td>3</td><td>4 (no neighbour is below 4)</td><td>no neighbour is better: stop</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>Hill climbing returns a timetable with penalty 3. But in section 4.1 we already met timetable T3 with penalty 2. So penalty 3 is a <strong>local optimum</strong>: no single move improves it, yet a better timetable exists. Hill climbing stopped because of the neighbourhood it was given, not because it found the best answer.</p>

<h3>Where hill climbing gets stuck</h3>

<div class="diagram">
  <svg viewBox="0 0 700 285" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;" role="img" aria-label="A landscape drawn for maximization: a local optimum, a plateau and the global optimum.">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">MAXIMIZATION VIEW: HIGHER IS BETTER</text>
    <path d="M40 225 C 110 225, 120 160, 170 160 C 220 160, 230 212, 300 212 C 360 212, 370 80, 440 80 C 510 80, 520 198, 590 198 C 640 198, 650 220, 660 225"
          fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <line x1="40" y1="245" x2="660" y2="245" stroke="var(--rule)"/>
    <text x="350" y="268" text-anchor="middle" font-size="11" fill="var(--ink-mute)">candidate solutions, neighbours side by side</text>
    <text x="22" y="150" font-size="11" fill="var(--ink-mute)" text-anchor="middle" transform="rotate(-90 22 150)">objective value</text>
    <circle cx="170" cy="160" r="6" fill="var(--gold)"/>
    <text x="170" y="134" text-anchor="middle" font-size="11" fill="var(--gold)" font-weight="700">local optimum</text>
    <text x="170" y="148" text-anchor="middle" font-size="10" fill="var(--gold)">(local maximum)</text>
    <circle cx="440" cy="80" r="7" fill="var(--teal)"/>
    <text x="440" y="54" text-anchor="middle" font-size="11" fill="var(--teal)" font-weight="700">global optimum</text>
    <text x="440" y="68" text-anchor="middle" font-size="10" fill="var(--teal)">(global maximum)</text>
    <line x1="230" y1="209" x2="295" y2="211" stroke="var(--ink-mute)" stroke-width="4" stroke-linecap="round"/>
    <text x="262" y="232" text-anchor="middle" font-size="11" fill="var(--ink-soft)">plateau</text>
    <path d="M82 214 L 126 182" stroke="var(--teal)" stroke-width="2" marker-end="url(#ls1)"/>
    <text x="72" y="196" text-anchor="middle" font-size="10" fill="var(--teal)">improving</text>
    <text x="72" y="208" text-anchor="middle" font-size="10" fill="var(--teal)">moves</text>
    <defs><marker id="ls1" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--teal)"/></marker></defs>
  </svg>
  <div class="diagram-caption">Drawn for maximization. For a penalty, turn the picture upside down: the good places are the valleys.</div>
</div>

<p>A picture like this is called a <strong>landscape</strong>: each position is a candidate solution, and the height is its objective value. Hill climbing only knows the ground under its feet, never the whole map. It stops in three typical places:</p>

<ol class="steps">
  <li><strong>Local optimum</strong><p>No neighbour is better. It may also be the best solution of all, but a better solution may exist elsewhere, like the penalty-3 timetable above. The best of all is the <strong>global optimum</strong>, and it is always a local optimum too. When maximizing, they are called a local maximum and a global maximum; when minimizing, a local minimum and a global minimum.</p></li>
  <li><strong>Plateau</strong><p>A flat area: all neighbours have the same value, so there is no direction to follow. The search stops, or wanders if it accepts equal moves.</p></li>
  <li><strong>Ridge</strong><p>The objective improves along a narrow line, but every single move the neighbourhood allows makes it slightly worse. The search stops, although better solutions lie further along the ridge.</p></li>
</ol>

<h3>Simple fixes</h3>

<div class="applications">
  <div class="app-grid">
    <div class="app-card">
      <span class="app-icon">↔️</span>
      <strong>Sideways moves</strong>
      <p>Also accept a neighbour with the same value, so the search can cross a plateau. Set a limit on how many in a row, or it may walk in circles forever.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🎲</span>
      <strong>Random-restart hill climbing</strong>
      <p>Run hill climbing many times, each time from a new random start, and keep the best result. Each run is cheap, and different starts reach different tops.</p>
    </div>
    <div class="app-card">
      <span class="app-icon">🎯</span>
      <strong>Stochastic hill climbing</strong>
      <p>Pick randomly among the improving moves instead of always the best one. It may need more steps to reach a top, but it explores more of the landscape. Here <em>stochastic</em> describes the algorithm's own random choices, not the environment (section 2.4).</p>
    </div>
  </div>
</div>

<div class="aha">
  <div class="aha-label">How many restarts do you need?</div>
  <p>Suppose one run finds the best solution with probability p, and the runs are independent. Then you need <strong>1/p runs on average</strong> until the first success. That is an average, not a promise. With p&nbsp;=&nbsp;0.1 you expect 10 runs, yet 10 runs succeed only about 65% of the time.</p>
  <p>Optional: the chance of at least one success in k runs is 1 − (1 − p)<sup>k</sup>. For p&nbsp;=&nbsp;0.1, k&nbsp;=&nbsp;10 gives 0.65 and k&nbsp;=&nbsp;22 gives 0.90.</p>
</div>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>Your timetable solver, which uses hill climbing, returns a different answer every time you run it, and the quality varies a lot. Is this a bug?</p>
  <details>
    <summary>Show answer</summary>
    <p><strong>No.</strong> It starts from a random solution, so it climbs a different hill each time and stops on a different local optimum. The fix is not to remove the randomness but to use it: run the solver many times and keep the best result. That is random-restart hill climbing.</p>
  </details>
</div>

<div class="callout intuition">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Further exploration (optional): simulated annealing</div>
    <p>Hill climbing never accepts a worse neighbour, and that is why it stops at a local optimum. <strong>Simulated annealing</strong> sometimes accepts a worse neighbour on purpose: often at the start, rarely near the end. These temporary steps down let it leave a small hill and find a higher one. The name comes from metalwork, where metal is heated and then cooled slowly so that it settles well. This box is extra reading and is not tested.</p>
  </div>
</div>

<p class="reading-time">9 min read</p>
        `
      },
      {
        title: "Population-Based Optimization: Genetic Algorithms",
        body: `
<p><em>What if we explore several candidate solutions at once, instead of improving only one?</em> This is the population-based side of the comparison in section 4.1.</p>

<div class="analogy">
  <span class="analogy-label">Breeding date palms</span>
  <p>A farmer crosses a palm with excellent fruit and a palm that survives any heat, hoping for offspring with the good traits of both. Most offspring are ordinary. A few are better than either parent, and those become the parents of the next generation.</p>
</div>

<div class="callout note">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">Nature-Inspired Optimization: Learning from Nature</div>
    <p>The farmer's idea is not only an analogy. Some optimization methods take their main idea from a process in nature; this is called <strong>nature-inspired optimization</strong>. Three families, each from a different source:</p>
    <ul>
      <li><em>Evolutionary algorithms</em> copy biological evolution: fitter individuals pass on their parts more often. Example: the genetic algorithm (GA).</li>
      <li><em>Swarm intelligence</em> copies simple members that share what they find, like birds in a flock or ants leaving trails. Examples: particle swarm optimization (PSO) and ant colony optimization (ACO).</li>
      <li><em>Physics-inspired methods</em> copy physical processes. Example: simulated annealing (SA), from metal that settles well when cooled slowly (the optional box in 4.2).</li>
    </ul>
    <p>Nature-inspired does not mean population-based. GA, PSO and ACO keep a population of candidate solutions; simulated annealing improves one solution at a time. So two separate questions describe a method: <em>how many candidates does it hold</em> (section 4.1), and <em>where did its idea come from</em>? A natural origin does not make a method better or guarantee the global optimum; like any method, it is judged by how well it fits the problem.</p>
  </div>
</div>

<div class="diagram">
  <svg viewBox="0 0 700 232" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;" role="img" aria-label="Three sources of inspiration: evolutionary (genetic algorithms, population-based, studied in this section), swarm (particle swarm and ant colony optimization, population-based), and physics-inspired (simulated annealing, single-solution).">
    <text x="350" y="24" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">NATURE-INSPIRED OPTIMIZATION: THREE SOURCES</text>
    <rect x="16" y="48" width="208" height="150" rx="10" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2.5"/>
    <text x="120" y="74" text-anchor="middle" font-size="12" fill="var(--ink-mute)" font-weight="700" letter-spacing="0.06em">EVOLUTIONARY</text>
    <text x="120" y="96" text-anchor="middle" font-size="11" fill="var(--ink-soft)">inspired by biological evolution</text>
    <text x="120" y="126" text-anchor="middle" font-size="13" fill="var(--accent)" font-weight="700">Genetic algorithm (GA)</text>
    <rect x="60" y="164" width="120" height="22" rx="11" fill="none" stroke="var(--teal)" stroke-width="1.5"/>
    <text x="120" y="179" text-anchor="middle" font-size="11" fill="var(--teal)" font-weight="700">population-based</text>
    <text x="120" y="218" text-anchor="middle" font-size="11" fill="var(--accent)" font-weight="700">studied in this section</text>
    <rect x="246" y="48" width="208" height="150" rx="10" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/>
    <text x="350" y="74" text-anchor="middle" font-size="12" fill="var(--ink-mute)" font-weight="700" letter-spacing="0.06em">SWARM</text>
    <text x="350" y="96" text-anchor="middle" font-size="11" fill="var(--ink-soft)">inspired by flocks and ant colonies</text>
    <text x="350" y="126" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="700">Particle swarm (PSO)</text><text x="350" y="146" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="700">Ant colony (ACO)</text>
    <rect x="290" y="164" width="120" height="22" rx="11" fill="none" stroke="var(--teal)" stroke-width="1.5"/>
    <text x="350" y="179" text-anchor="middle" font-size="11" fill="var(--teal)" font-weight="700">population-based</text>
    <text x="350" y="218" text-anchor="middle" font-size="11" fill="var(--ink-mute)" font-weight="400">not studied in detail</text>
    <rect x="476" y="48" width="208" height="150" rx="10" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/>
    <text x="580" y="74" text-anchor="middle" font-size="12" fill="var(--ink-mute)" font-weight="700" letter-spacing="0.06em">PHYSICS-INSPIRED</text>
    <text x="580" y="96" text-anchor="middle" font-size="11" fill="var(--ink-soft)">inspired by metal cooling slowly</text>
    <text x="580" y="126" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="700">Simulated annealing (SA)</text>
    <rect x="520" y="164" width="120" height="22" rx="11" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
    <text x="580" y="179" text-anchor="middle" font-size="11" fill="var(--gold)" font-weight="700">single-solution</text>
    <text x="580" y="218" text-anchor="middle" font-size="11" fill="var(--ink-mute)" font-weight="400">optional box in 4.2</text>
  </svg>
  <div class="diagram-caption">Each family takes its idea from a different part of nature. The label under each one answers the other question: how many candidates it holds.</div>
</div>

<p>This section studies one of these methods in detail: the genetic algorithm.</p>

<div class="definition">
  <p>A <strong>genetic algorithm</strong> keeps a <strong>population</strong> of candidate solutions. Each candidate is written as a <strong>chromosome</strong>, often a string such as <code>1010</code>; one member of the population is called an individual. A <strong>fitness function</strong> scores each chromosome, and higher fitness means better.</p>
</div>

<p>The members of the population are candidate solutions, not agents. Nothing in the population perceives or acts, so this is not the multi-agent setting of section 2.4.</p>

<h3>The cycle</h3>

<div class="diagram">
  <svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;" role="img" aria-label="Initial population, fitness evaluation, selection, crossover, mutation, then the next generation repeats from fitness evaluation.">
    <text x="350" y="24" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">THE GENETIC ALGORITHM CYCLE</text>
    <rect x="12" y="62" width="112" height="78" rx="8" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/>
    <text x="68" y="94" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="700">Initial</text>
    <text x="68" y="109" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="700">population</text>
    <text x="68" y="128" text-anchor="middle" font-size="10" fill="var(--ink-soft)">only at the start</text>
    <rect x="150" y="62" width="112" height="78" rx="8" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/>
    <text x="206" y="94" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="700">Fitness</text>
    <text x="206" y="109" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="700">evaluation</text>
    <text x="206" y="128" text-anchor="middle" font-size="10" fill="var(--ink-soft)">score each one</text>
    <rect x="288" y="62" width="112" height="78" rx="8" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/>
    <text x="344" y="94" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="700">Selection</text>
    
    <text x="344" y="128" text-anchor="middle" font-size="10" fill="var(--ink-soft)">fitter = more likely</text>
    <rect x="426" y="62" width="112" height="78" rx="8" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/>
    <text x="482" y="94" text-anchor="middle" font-size="12" fill="var(--ink)" font-weight="700">Crossover</text>
    
    <text x="482" y="128" text-anchor="middle" font-size="10" fill="var(--ink-soft)">mix two parents</text>
    <rect x="564" y="62" width="112" height="78" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
    <text x="620" y="94" text-anchor="middle" font-size="12" fill="var(--accent)" font-weight="700">Mutation</text>
    
    <text x="620" y="128" text-anchor="middle" font-size="10" fill="var(--ink-soft)">small random change</text>
    <path d="M126 101 H 146" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#ga1)"/><path d="M264 101 H 284" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#ga1)"/><path d="M402 101 H 422" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#ga1)"/><path d="M540 101 H 560" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#ga1)"/>
    <path d="M620 144 V 178 H 206 V 146" fill="none" stroke="var(--gold)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ga2)"/>
    <text x="413" y="200" text-anchor="middle" font-size="11" fill="var(--gold)" font-weight="700">next generation: the children are scored again — repeat</text>
    <defs><marker id="ga1" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--ink-mute)"/></marker><marker id="ga2" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--gold)"/></marker></defs>
  </svg>
  <div class="diagram-caption">Selection keeps what works, crossover combines it, mutation keeps new options alive.</div>
</div>

<ol class="steps">
  <li><strong>Initial population</strong><p>Start with a group of candidate solutions, often chosen at random.</p></li>
  <li><strong>Fitness evaluation</strong><p>Score every chromosome with the fitness function.</p></li>
  <li><strong>Selection</strong><p>Choose parents at random, but fitter chromosomes are more likely to be chosen.</p></li>
  <li><strong>Crossover</strong><p>Cut two parent chromosomes at the same point and swap the tails. This makes two children.</p></li>
  <li><strong>Mutation</strong><p>Now and then, change one position of a child at random, for example flip one bit. How often this happens is the mutation rate.</p></li>
  <li><strong>Next generation</strong><p>The children form the new population. Repeat from fitness evaluation until a fixed number of generations, or until the best fitness stops improving.</p></li>
</ol>

<h3>Worked example: choosing projects within a budget</h3>

<p>Your college has 90 thousand riyals and four project proposals. Each project is either funded (1) or not (0), so a chromosome has four bits. For example, <code>1010</code> means projects P1 and P3 are funded.</p>

<div class="table-figure">
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Project</th><th scope="col">Cost (thousand riyals)</th><th scope="col">Benefit (points)</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">P1</th><td>40</td><td>30</td></tr>
        <tr><th scope="row">P2</th><td>30</td><td>25</td></tr>
        <tr><th scope="row">P3</th><td>50</td><td>45</td></tr>
        <tr><th scope="row">P4</th><td>20</td><td>10</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="formula">
  <p><span>Objective:</span> maximize the total benefit</p>
  <p><span>Constraint:</span> total cost ≤ 90</p>
  <p><span>Fitness:</span> total benefit if the cost is within budget; 0 if it is over budget</p>
</div>

<p>Here the objective is already something to maximize, so the fitness can use it directly. If the objective were a cost to minimize, the fitness would have to reverse it, for example 1000 − cost, so that a cheaper solution gets a higher fitness. Fitness is defined for the algorithm; it is not always the same number as the objective.</p>

<h4>Generation 0</h4>

<div class="table-figure">
  <p class="table-hint">Swipe sideways to see all columns &rarr;</p>
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Chromosome</th><th scope="col">Projects</th><th scope="col">Cost</th><th scope="col">Fitness</th><th scope="col">Chance of selection</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">A = 0110</th><td>P2, P3</td><td>80</td><td>70</td><td>70 / 175 = 40%</td></tr>
        <tr><th scope="row">B = 1100</th><td>P1, P2</td><td>70</td><td>55</td><td>55 / 175 = 31%</td></tr>
        <tr><th scope="row">C = 1001</th><td>P1, P4</td><td>60</td><td>40</td><td>40 / 175 = 23%</td></tr>
        <tr><th scope="row">D = 0001</th><td>P4</td><td>20</td><td>10</td><td>10 / 175 = 6%</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>All four are within budget. The total fitness is 175, and each chromosome's chance of selection is its fitness divided by 175. Selection is random, so in this run it picked the pairs <strong>A + C</strong> and <strong>A + B</strong>. A was picked twice, and D, the weakest, was not picked.</p>

<h4>Crossover and mutation</h4>

<div class="diagram">
  <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;" role="img" aria-label="Crossover after bit 2: 0110 and 1001 give 0101 and 1010; 0110 and 1100 give 0100 and 1110. Mutation flips bit 3 of 0100 to give 0110.">
    <text x="350" y="22" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">CROSSOVER AFTER BIT 2, THEN ONE MUTATION</text>
    <text x="40" y="46" font-size="11" fill="var(--ink-mute)" font-weight="600">PARENTS</text>
    <text x="40" y="78" font-size="12" fill="var(--ink)" font-weight="700">A</text><rect x="60" y="60" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="74" y="79" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><rect x="90" y="60" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="104" y="79" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="120" y="60" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="134" y="79" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="150" y="60" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="164" y="79" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><line x1="119" y1="57" x2="119" y2="91" stroke="var(--gold)" stroke-width="2.5" stroke-dasharray="4 3"/>
    <text x="40" y="118" font-size="12" fill="var(--ink)" font-weight="700">C</text><rect x="60" y="100" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="74" y="119" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="90" y="100" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="104" y="119" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><rect x="120" y="100" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="134" y="119" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><rect x="150" y="100" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="164" y="119" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><line x1="119" y1="97" x2="119" y2="131" stroke="var(--gold)" stroke-width="2.5" stroke-dasharray="4 3"/>
    <path d="M190 95 H 235" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#co1)"/>
    <text x="250" y="46" font-size="11" fill="var(--ink-mute)" font-weight="600">CHILDREN</text>
    <rect x="250" y="60" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="264" y="79" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><rect x="280" y="60" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="294" y="79" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="310" y="60" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="324" y="79" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><rect x="340" y="60" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="354" y="79" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><text x="380" y="79" font-size="12" fill="var(--ink-soft)">benefit 35</text>
    <rect x="250" y="100" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="264" y="119" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="280" y="100" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="294" y="119" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><rect x="310" y="100" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="324" y="119" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="340" y="100" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="354" y="119" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><text x="380" y="119" font-size="12" fill="var(--teal)" font-weight="700">benefit 75</text>

    <text x="40" y="178" font-size="12" fill="var(--ink)" font-weight="700">A</text><rect x="60" y="160" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="74" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><rect x="90" y="160" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="104" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="120" y="160" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="134" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="150" y="160" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="164" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><line x1="119" y1="157" x2="119" y2="191" stroke="var(--gold)" stroke-width="2.5" stroke-dasharray="4 3"/>
    <text x="40" y="218" font-size="12" fill="var(--ink)" font-weight="700">B</text><rect x="60" y="200" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="74" y="219" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="90" y="200" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="104" y="219" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="120" y="200" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="134" y="219" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><rect x="150" y="200" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="164" y="219" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><line x1="119" y1="197" x2="119" y2="231" stroke="var(--gold)" stroke-width="2.5" stroke-dasharray="4 3"/>
    <path d="M190 195 H 235" stroke="var(--ink-mute)" stroke-width="2" marker-end="url(#co1)"/>
    <rect x="250" y="160" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="264" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><rect x="280" y="160" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="294" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="310" y="160" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="324" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><rect x="340" y="160" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="354" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text>
    <rect x="250" y="200" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="264" y="219" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="280" y="200" width="28" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="294" y="219" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="310" y="200" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="324" y="219" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="340" y="200" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="354" y="219" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><text x="380" y="219" font-size="12" fill="var(--gold)" font-weight="700">cost 120: over budget</text>
    <path d="M375 174 H 430" stroke="var(--gold)" stroke-width="2" marker-end="url(#co2)"/>
    <text x="402" y="166" text-anchor="middle" font-size="10" fill="var(--gold)" font-weight="700">mutation</text>
    <rect x="440" y="160" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="454" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><rect x="470" y="160" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="484" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">1</text><rect x="500" y="160" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--gold)" stroke-width="3"/><text x="514" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--gold)" font-weight="700">1</text><rect x="530" y="160" width="28" height="28" rx="4" fill="var(--bg-soft)" stroke="var(--rule)" stroke-width="1"/><text x="544" y="179" text-anchor="middle" font-size="13" font-family="'JetBrains Mono', monospace" fill="var(--ink)" font-weight="700">0</text><text x="570" y="179" font-size="12" fill="var(--teal)" font-weight="700">benefit 70</text>
    <rect x="60" y="252" width="16" height="16" rx="3" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/>
    <text x="84" y="265" font-size="11" fill="var(--ink-soft)">came from the second parent</text>
    <rect x="300" y="252" width="16" height="16" rx="3" fill="var(--bg-soft)" stroke="var(--gold)" stroke-width="3"/>
    <text x="324" y="265" font-size="11" fill="var(--ink-soft)">bit changed by mutation</text>
    <text x="350" y="292" text-anchor="middle" font-size="11" fill="var(--ink-mute)">the dashed line is the cut point</text>
    <defs><marker id="co1" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--ink-mute)"/></marker><marker id="co2" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--gold)"/></marker></defs>
  </svg>
  <div class="diagram-caption">Each child takes the first two bits from one parent and the last two from the other.</div>
</div>

<h4>Generation 1</h4>

<div class="table-figure">
  <p class="table-hint">Swipe sideways to see all columns &rarr;</p>
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Child</th><th scope="col">How it was made</th><th scope="col">Cost</th><th scope="col">Fitness</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">0101</th><td>A + C crossover</td><td>50</td><td>35</td></tr>
        <tr><th scope="row">1010</th><td>C + A crossover</td><td>90</td><td>75</td></tr>
        <tr><th scope="row">0110</th><td>A + B crossover gave 0100; mutation flipped bit 3</td><td>80</td><td>70</td></tr>
        <tr><th scope="row">1110</th><td>B + A crossover</td><td>120: over budget</td><td>0 (penalized)</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>The best fitness rose from 70 to 75. With only four projects we can check all 16 chromosomes by hand, and <code>1010</code> is in fact the best choice within budget. With hundreds of projects we could not check them all, and the genetic algorithm would give no such guarantee: it can stop improving long before it reaches the global optimum.</p>

<div class="callout warning">
  <div class="callout-icon">!</div>
  <div class="callout-body">
    <div class="callout-title">Crossover and mutation do not guarantee a better child</div>
    <p>Child <code>0101</code> (fitness 35) is worse than both of its parents. Mutation can hurt too: flipping bit 2 of <code>1010</code> gives <code>1110</code>, which breaks the budget. Good children survive because selection favours them, not because the operators are clever.</p>
  </div>
</div>

<h3>When a child breaks a constraint</h3>

<p>Child <code>1110</code> costs 120 thousand riyals, more than the budget. A genetic algorithm needs a rule for such children. Three common rules:</p>

<ol class="steps">
  <li><strong>Penalize it</strong><p>Keep it in the population, but give it a low fitness. We gave it fitness 0, so with selection in proportion to fitness it has no chance of becoming a parent. It still takes one place in the population.</p></li>
  <li><strong>Reject it</strong><p>Throw it away before it joins the population, and make a new child in its place. Then every member of the population is feasible.</p></li>
  <li><strong>Repair it</strong><p>Change it until it is feasible. For example, drop the funded project with the lowest benefit until the cost fits: <code>1110</code> drops P2 and becomes <code>1010</code>, cost 90.</p></li>
</ol>

<p>The choice of representation matters as much as the rule. Crossover helps most when parts of the chromosome are meaningful building blocks on their own, such as the funding decision for one project. If the positions have no independent meaning, cutting and swapping mostly breaks good solutions.</p>

<h3>Hill climbing or a genetic algorithm?</h3>

<div class="before-after">
  <div class="ba-col before">
    <span class="ba-label">Single-solution</span>
    <h4>Hill climbing</h4>
    <ul>
      <li>Improves one candidate solution</li>
      <li>Few objective evaluations per step</li>
      <li>Simple to build: you only need a neighbourhood</li>
      <li>Stops at the first local optimum it reaches</li>
    </ul>
  </div>
  <div class="ba-col after">
    <span class="ba-label">Population-based</span>
    <h4>Genetic algorithm</h4>
    <ul>
      <li>Improves a population of candidate solutions</li>
      <li>Many fitness evaluations per generation</li>
      <li>More settings to choose: population size, mutation rate</li>
      <li>Variety can help it leave a local optimum, with no guarantee</li>
    </ul>
  </div>
</div>

<p>Neither method is better in general. The right choice depends on the problem, the representation, and how much computing time you have.</p>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>Using the project table, parents <code>1100</code> and <code>0011</code> are cut after bit 2. Write both children, their cost and their fitness (budget 90). Did crossover help?</p>
  <details>
    <summary>Show answer</summary>
    <p>The children are <code>1111</code> (cost 140, over budget, fitness 0) and <code>0000</code> (cost 0, fitness 0). Both parents had fitness 55, so both children are worse. Crossover mixes material; it does not guarantee improvement.</p>
  </details>
</div>

<p class="reading-time">10 min read</p>
        `
      },
      {
        title: "Gradient Descent: Continuous Optimization",
        body: `
<p>Section 4.1 introduced continuous optimization. Now the decision variable can take any real value, so there are infinitely many neighbours and we cannot list them. Instead of comparing neighbours, we use the slope of the objective function.</p>

<p>Take a simple problem whose answer we already know, so we can watch the method find it:</p>

<div class="formula">
  <p><span>Minimize</span> f(x) = (x − 3)²</p>
  <p><span>Slope:</span> f′(x) = 2(x − 3)</p>
</div>

<p>The lowest value is at x = 3, where f(3) = 0.</p>

<ol class="steps">
  <li><strong>Continuous decision variable</strong><p>x, any real number.</p></li>
  <li><strong>Objective function</strong><p>f(x), the number to minimize. In machine learning it is called the loss function: how wrong a model's answers are.</p></li>
  <li><strong>Derivative (gradient)</strong><p>f′(x), the slope at the current point. It tells you which way is uphill and how steep it is. With many variables it becomes the gradient ∇f(x), one slope for each variable.</p></li>
  <li><strong>Learning rate</strong><p>α (alpha), a small positive number that sets the size of each step.</p></li>
  <li><strong>Iterative update</strong><p>Take one step against the slope, then repeat from the new point.</p></li>
  <li><strong>Stopping criterion</strong><p>Stop when the step becomes tiny, or after a fixed number of steps.</p></li>
</ol>

<div class="definition">
  <p><strong>Gradient descent</strong> repeats one update: $x_{\\text{new}} = x - \\alpha\\, f'(x)$. The slope f′(x) points uphill, the minus sign turns the step downhill, and α is the <strong>learning rate</strong>.</p>
</div>

<div class="analogy">
  <span class="analogy-label">Walking downhill in fog, but the ground is smooth</span>
  <p>You cannot see the valley. But you can feel which way the ground slopes under your feet, so you take a step downhill and feel again. Steep ground means a big step; flat ground means a small one.</p>
</div>

<h3>Two steps by hand</h3>

<p>Start at x = 0 with learning rate α = 0.1.</p>

<div class="table-figure">
  <p class="table-hint">Swipe sideways to see all columns &rarr;</p>
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Step</th><th scope="col">x</th><th scope="col">f(x)</th><th scope="col">f′(x) = 2(x − 3)</th><th scope="col">α · f′(x)</th><th scope="col">new x</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">1</th><td>0</td><td>9</td><td>−6</td><td>−0.6</td><td>0 − (−0.6) = 0.6</td></tr>
        <tr><th scope="row">2</th><td>0.6</td><td>5.76</td><td>−4.8</td><td>−0.48</td><td>0.6 − (−0.48) = 1.08</td></tr>
        <tr><th scope="row">3</th><td>1.08</td><td>3.69</td><td>−3.84</td><td>−0.384</td><td>1.464</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>At x = 0 the slope is −6: the function goes <em>down</em> as x grows. The minus sign in the update turns that into a step to the right, towards 3. The distance to 3 shrinks from 3 to 2.4, then 1.92, then 1.536: each step closes 20% of the remaining gap. The steps get smaller on their own, because the slope gets flatter near the bottom.</p>

<pre><code class="language-python">def gradient_descent(slope, x, learning_rate=0.1, max_steps=1000, tiny=0.001):
    """Step against the slope until the steps become tiny."""
    for _ in range(max_steps):
        step = learning_rate * slope(x)
        x = x - step
        if abs(step) &lt; tiny:        # stopping criterion
            break
    return x

gradient_descent(lambda x: 2 * (x - 3), x=0)   # about 2.996
</code></pre>

<h3>The learning rate</h3>

<div class="diagram">
  <svg viewBox="0 0 700 255" xmlns="http://www.w3.org/2000/svg" style="font-family:'Inter', sans-serif;" role="img" aria-label="Gradient descent on (x minus 3) squared from x = 0: with rate 0.01 it barely moves, with 0.1 it approaches 3, with 1.1 it jumps over 3 and moves further away."><text x="125" y="26" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">TOO SMALL: α = 0.01</text>
      <line x1="25" y1="202" x2="225" y2="202" stroke="var(--rule)" stroke-width="2"/>
      <path d="M25 101.2 L27.5 106.6 L30 111.9 L32.5 117 L35 122 L37.5 126.8 L40 131.5 L42.5 136 L45 140.4 L47.5 144.6 L50 148.7 L52.5 152.6 L55 156.4 L57.5 160 L60 163.5 L62.5 166.8 L65 170 L67.5 173 L70 175.9 L72.5 178.6 L75 181.2 L77.5 183.6 L80 185.9 L82.5 188 L85 190 L87.5 191.8 L90 193.5 L92.5 195 L95 196.4 L97.5 197.6 L100 198.7 L102.5 199.6 L105 200.4 L107.5 201 L110 201.5 L112.5 201.8 L115 202 L117.5 202 L120 201.9 L122.5 201.6 L125 201.2 L127.5 200.6 L130 199.9 L132.5 199 L135 198 L137.5 196.8 L140 195.5 L142.5 194 L145 192.4 L147.5 190.6 L150 188.7 L152.5 186.6 L155 184.4 L157.5 182 L160 179.5 L162.5 176.8 L165 174 L167.5 171 L170 167.9 L172.5 164.6 L175 161.2 L177.5 157.6 L180 153.9 L182.5 150 L185 146 L187.5 141.8 L190 137.5 L192.5 133 L195 128.4 L197.5 123.6 L200 118.7 L202.5 113.6 L205 108.4 L207.5 103 L210 97.5 L212.5 91.8 L215 86 L217.5 80 L220 73.9 L222.5 67.6 L225 61.2" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <line x1="116.7" y1="202" x2="116.7" y2="208" stroke="var(--teal)" stroke-dasharray="3 3"/>
      <text x="116.7" y="221" text-anchor="middle" font-size="10" fill="var(--teal)">x = 3</text>
      <text x="66.7" y="221" text-anchor="middle" font-size="10" fill="var(--ink-mute)">start 0</text>
      <path d="M66.7 172 L67.7 173.2" stroke="var(--ink-mute)" stroke-width="1.8" fill="none"/><path d="M67.7 173.2 L68.6 174.3" stroke="var(--ink-mute)" stroke-width="1.8" fill="none"/><path d="M68.6 174.3 L69.6 175.4" stroke="var(--ink-mute)" stroke-width="1.8" fill="none"/><path d="M69.6 175.4 L70.5 176.5" stroke="var(--ink-mute)" stroke-width="1.8" fill="none"/><path d="M70.5 176.5 L71.5 177.5" stroke="var(--ink-mute)" stroke-width="1.8" fill="none"/><circle cx="66.7" cy="172" r="5" fill="var(--ink)"/><circle cx="67.7" cy="173.2" r="2.6" fill="var(--ink-mute)"/><circle cx="68.6" cy="174.3" r="2.6" fill="var(--ink-mute)"/><circle cx="69.6" cy="175.4" r="2.6" fill="var(--ink-mute)"/><circle cx="70.5" cy="176.5" r="2.6" fill="var(--ink-mute)"/><circle cx="71.5" cy="177.5" r="2.6" fill="var(--ink-mute)"/>
      <text x="125" y="244" text-anchor="middle" font-size="11" fill="var(--ink-soft)">5 steps: x only reaches 0.29</text>
      <defs><marker id="gd0" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--ink-mute)"/></marker></defs><text x="353" y="26" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">REASONABLE: α = 0.1</text>
      <line x1="253" y1="202" x2="453" y2="202" stroke="var(--rule)" stroke-width="2"/>
      <path d="M253 101.2 L255.5 106.6 L258 111.9 L260.5 117 L263 122 L265.5 126.8 L268 131.5 L270.5 136 L273 140.4 L275.5 144.6 L278 148.7 L280.5 152.6 L283 156.4 L285.5 160 L288 163.5 L290.5 166.8 L293 170 L295.5 173 L298 175.9 L300.5 178.6 L303 181.2 L305.5 183.6 L308 185.9 L310.5 188 L313 190 L315.5 191.8 L318 193.5 L320.5 195 L323 196.4 L325.5 197.6 L328 198.7 L330.5 199.6 L333 200.4 L335.5 201 L338 201.5 L340.5 201.8 L343 202 L345.5 202 L348 201.9 L350.5 201.6 L353 201.2 L355.5 200.6 L358 199.9 L360.5 199 L363 198 L365.5 196.8 L368 195.5 L370.5 194 L373 192.4 L375.5 190.6 L378 188.7 L380.5 186.6 L383 184.4 L385.5 182 L388 179.5 L390.5 176.8 L393 174 L395.5 171 L398 167.9 L400.5 164.6 L403 161.2 L405.5 157.6 L408 153.9 L410.5 150 L413 146 L415.5 141.8 L418 137.5 L420.5 133 L423 128.4 L425.5 123.6 L428 118.7 L430.5 113.6 L433 108.4 L435.5 103 L438 97.5 L440.5 91.8 L443 86 L445.5 80 L448 73.9 L450.5 67.6 L453 61.2" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <line x1="344.7" y1="202" x2="344.7" y2="208" stroke="var(--teal)" stroke-dasharray="3 3"/>
      <text x="344.7" y="221" text-anchor="middle" font-size="10" fill="var(--teal)">x = 3</text>
      <text x="294.7" y="221" text-anchor="middle" font-size="10" fill="var(--ink-mute)">start 0</text>
      <path d="M294.7 172 L304.7 182.8" stroke="var(--teal)" stroke-width="1.8" fill="none"/><path d="M304.7 182.8 L312.7 189.7" stroke="var(--teal)" stroke-width="1.8" fill="none"/><path d="M312.7 189.7 L319.1 194.1" stroke="var(--teal)" stroke-width="1.8" fill="none"/><path d="M319.1 194.1 L324.2 197" stroke="var(--teal)" stroke-width="1.8" fill="none"/><path d="M324.2 197 L328.3 198.8" stroke="var(--teal)" stroke-width="1.8" fill="none"/><circle cx="294.7" cy="172" r="5" fill="var(--ink)"/><circle cx="304.7" cy="182.8" r="2.6" fill="var(--teal)"/><circle cx="312.7" cy="189.7" r="2.6" fill="var(--teal)"/><circle cx="319.1" cy="194.1" r="2.6" fill="var(--teal)"/><circle cx="324.2" cy="197" r="2.6" fill="var(--teal)"/><circle cx="328.3" cy="198.8" r="2.6" fill="var(--teal)"/>
      <text x="353" y="244" text-anchor="middle" font-size="11" fill="var(--ink-soft)">5 steps: x reaches 2.02</text>
      <defs><marker id="gd1" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--teal)"/></marker></defs><text x="581" y="26" text-anchor="middle" font-size="13" fill="var(--ink-mute)" font-weight="600" letter-spacing="0.06em">TOO LARGE: α = 1.1</text>
      <line x1="481" y1="202" x2="681" y2="202" stroke="var(--rule)" stroke-width="2"/>
      <path d="M481 101.2 L483.5 106.6 L486 111.9 L488.5 117 L491 122 L493.5 126.8 L496 131.5 L498.5 136 L501 140.4 L503.5 144.6 L506 148.7 L508.5 152.6 L511 156.4 L513.5 160 L516 163.5 L518.5 166.8 L521 170 L523.5 173 L526 175.9 L528.5 178.6 L531 181.2 L533.5 183.6 L536 185.9 L538.5 188 L541 190 L543.5 191.8 L546 193.5 L548.5 195 L551 196.4 L553.5 197.6 L556 198.7 L558.5 199.6 L561 200.4 L563.5 201 L566 201.5 L568.5 201.8 L571 202 L573.5 202 L576 201.9 L578.5 201.6 L581 201.2 L583.5 200.6 L586 199.9 L588.5 199 L591 198 L593.5 196.8 L596 195.5 L598.5 194 L601 192.4 L603.5 190.6 L606 188.7 L608.5 186.6 L611 184.4 L613.5 182 L616 179.5 L618.5 176.8 L621 174 L623.5 171 L626 167.9 L628.5 164.6 L631 161.2 L633.5 157.6 L636 153.9 L638.5 150 L641 146 L643.5 141.8 L646 137.5 L648.5 133 L651 128.4 L653.5 123.6 L656 118.7 L658.5 113.6 L661 108.4 L663.5 103 L666 97.5 L668.5 91.8 L671 86 L673.5 80 L676 73.9 L678.5 67.6 L681 61.2" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
      <line x1="572.7" y1="202" x2="572.7" y2="208" stroke="var(--teal)" stroke-dasharray="3 3"/>
      <text x="572.7" y="221" text-anchor="middle" font-size="10" fill="var(--teal)">x = 3</text>
      <text x="522.7" y="221" text-anchor="middle" font-size="10" fill="var(--ink-mute)">start 0</text>
      <path d="M522.7 172 L632.7 158.8" stroke="var(--gold)" stroke-width="1.8" fill="none" marker-end="url(#gd2)"/><path d="M632.7 158.8 L500.7 139.8" stroke="var(--gold)" stroke-width="1.8" fill="none" marker-end="url(#gd2)"/><path d="M500.7 139.8 L659.1 112.4" stroke="var(--gold)" stroke-width="1.8" fill="none" marker-end="url(#gd2)"/><circle cx="522.7" cy="172" r="5" fill="var(--ink)"/><circle cx="632.7" cy="158.8" r="4" fill="var(--gold)"/><circle cx="500.7" cy="139.8" r="4" fill="var(--gold)"/><circle cx="659.1" cy="112.4" r="4" fill="var(--gold)"/>
      <text x="581" y="244" text-anchor="middle" font-size="11" fill="var(--ink-soft)">0 → 6.6 → −1.32 → 8.18</text>
      <defs><marker id="gd2" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--gold)"/></marker></defs></svg>
  <div class="diagram-caption">The same function and the same start. Only the learning rate changes.</div>
</div>

<div class="table-figure">
  <div class="table-scroll">
    <table class="env-table" style="white-space: normal;">
      <thead>
        <tr><th scope="col">Learning rate</th><th scope="col">First values of x</th><th scope="col">What happens</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">Too small: 0.01</th><td>0 → 0.06 → 0.12 → 0.18</td><td>Very slow. After 5 steps x is only 0.29. It may look stuck.</td></tr>
        <tr><th scope="row">Reasonable: 0.1</th><td>0 → 0.6 → 1.08 → 1.46</td><td>Steady progress. After 5 steps x is 2.02.</td></tr>
        <tr><th scope="row">Too large: 1.1</th><td>0 → 6.6 → −1.32 → 8.18</td><td>Jumps over 3 and lands further away each time. It never settles.</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>There is no single correct learning rate; it is chosen by experiment. Between "reasonable" and "too large" there is a middle case: with α = 0.9, x jumps from side to side of 3, but each jump is shorter, so it still settles.</p>

<div class="callout note">
  <div class="callout-icon">i</div>
  <div class="callout-body">
    <div class="callout-title">When gradient descent fits</div>
    <p>It needs continuous decision variables and an objective whose slope we can compute (a differentiable function). For (x − 3)² there is only one valley, so with a suitable learning rate (0.1 here) gradient descent approaches the global minimum; with α = 1.1 it does not. A function with several valleys can trap it in a local minimum, just as a local optimum traps hill climbing.</p>
  </div>
</div>

<div class="aha">
  <div class="aha-label">Related to hill climbing, but not the same algorithm</div>
  <p>Both improve one solution step by step, and both can stop at a local optimum. Hill climbing compares a list of neighbours and moves to the best one. Gradient descent never lists neighbours: it uses the derivative to choose the direction, and the learning rate to choose the step size.</p>
</div>

<h3>Where you meet it: training models</h3>

<p>Training a machine learning model means choosing many numbers inside it, called weights, to minimize a loss: how wrong its answers are on examples with known answers. Methods based on gradient descent, run on many weights at once, are how such models are trained. The details come in later courses.</p>

<div class="checkpoint">
  <span class="checkpoint-label">Check yourself</span>
  <p>For f(x) = (x − 3)², start at x = 5 with α = 0.1. Compute one step. Then compute one step from the same start with α = 1.1. Which one helped?</p>
  <details>
    <summary>Show answer</summary>
    <p>f′(5) = 2(5 − 3) = 4. With α = 0.1: x = 5 − 0.4 = <strong>4.6</strong>, closer to 3 (distance 1.6 instead of 2). With α = 1.1: x = 5 − 4.4 = <strong>0.6</strong>. It jumped over 3 and is now further away (distance 2.4). The small rate helped; the large one made things worse.</p>
  </details>
</div>

<p class="reading-time">9 min read</p>
        `
      }
    ],
    cheatsheet: [
      {
        group: "Describing an optimization problem",
        items: [
          "<strong>Decision variables</strong> — what you choose · <strong>candidate solution</strong> — one complete choice",
          "<strong>Search space</strong> — every candidate · <strong>feasible region</strong> — only those that satisfy all constraints",
          "<strong>Objective function</strong> — a number for each candidate: minimize a cost, maximize a fitness",
          "<strong>Constraint</strong> — must hold (yes or no) · <strong>soft preference</strong> — desirable, enters the objective as a penalty or a reward",
          "<strong>Neighbourhood</strong> — candidates reachable by one small, defined change"
        ]
      },
      {
        group: "Discrete or continuous?",
        items: [
          "Decided by the decision variables, not by the algorithm",
          "Discrete: orderings, yes/no choices, timetables — and discrete does not mean finite",
          "Continuous: real values in a range, such as x in (x − 3)²",
          "Hill climbing: either type · genetic algorithm: either type · gradient descent: continuous, with a slope we can compute"
        ]
      },
      {
        group: "Landscape vocabulary",
        items: [
          "<strong>Global optimum</strong> — the best feasible solution overall",
          "<strong>Local optimum</strong> — no neighbour is better; it may or may not be the global optimum",
          "<strong>Plateau</strong> — flat area, no direction to follow",
          "<strong>Ridge</strong> — improves along a line, but every allowed move makes it worse"
        ]
      },
      {
        group: "The three methods",
        items: [
          "<strong>Hill climbing</strong> — single-solution: move to the best neighbour; stop when none is better",
          "<strong>Genetic algorithm</strong> — population-based: fitness → selection → crossover → mutation → next generation",
          "<strong>Gradient descent</strong> — continuous: <code>x ← x − α·f′(x)</code>",
          "<strong>Nature-inspired optimization</strong> — a source of ideas, not a type: GA and swarms keep a population; simulated annealing keeps one solution"
        ]
      },
      {
        group: "Fixes for getting stuck",
        items: [
          "<strong>Sideways moves</strong> — cross a plateau, but set a limit",
          "<strong>Random-restart hill climbing</strong> — about 1/p runs on average; an average, not a promise",
          "Chance of success in k runs: <code>1 − (1 − p)^k</code> — for p = 0.1, 10 runs give 0.65"
        ]
      },
      {
        group: "Gradient descent on (x − 3)², start x = 0",
        items: [
          "α = 0.1: x = 0 → 0.6 → 1.08 → 1.464 — steady progress towards 3",
          "α = 0.01: too small — after 5 steps x is only 0.29",
          "α = 1.1: too large — 0 → 6.6 → −1.32 → 8.18, never settles",
          "No single correct value: the learning rate is chosen by experiment"
        ]
      },
      {
        group: "Mistakes that cost marks",
        items: [
          "Saying hill climbing finds the best answer — it finds <em>a</em> local optimum",
          "Treating the search space as the feasible region",
          "Writing a constraint as a soft preference, or a soft preference as a constraint",
          "Saying crossover or mutation always improves a child — they can make it worse",
          "Scoring a child that is over budget by its benefit — penalize it (fitness 0), reject it, or repair it",
          "Saying gradient descent is hill climbing — it uses the derivative instead of listing neighbours",
          "Saying gradient descent always finds the global minimum — it needs a suitable learning rate, and with several valleys it may stop in a local one"
        ]
      }
    ],
    resources: [
      { type: "video", title: "Optimization — Lecture 3, CS50's Introduction to AI with Python", author: "Brian Yu, Harvard — local search and hill climbing from minute 1", url: "https://www.youtube.com/watch?v=qK46ET1xk2A" },
      { type: "docs", title: "Artificial Intelligence: A Modern Approach, 4th ed. — Chapter 4", author: "Russell & Norvig — this module is Chapter 4", url: "https://aima.cs.berkeley.edu/" },
      { type: "docs", title: "aima-python — hill climbing and genetic algorithm code", author: "AIMA code repository, GitHub", url: "https://github.com/aimacode/aima-python" }
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
      { term: "Utility / payoff", meaning: "The number given to a terminal state, e.g. +1 win, 0 draw, −1 loss. It is Module 2's utility function, applied to finished games." },
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

<p>In the terms of section 2.4, a game is a <strong>competitive multi-agent</strong> task environment: another agent acts, and it wants the opposite of what you want.</p>

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

<p>This is the <strong>semi-dynamic</strong> environment of section 2.4: the board waits while you think, but the clock does not.</p>

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
<p>Backgammon has dice. Card games have a shuffle. The opponent is still against you, but now a third thing decides part of the outcome: chance. This is the <strong>stochastic</strong> case from section 2.4: the same move can lead to different results.</p>

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
      { term: "Hard constraint", meaning: "A rule every solution must satisfy — the hard requirements of a performance measure (section 2.3). Preferences that can only be improved are handled by optimization instead (Module 4)." },
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

<p>The hard requirements in a performance measure (section 2.3) become the constraints here: a solution must satisfy every one, which is why they are also called <strong>hard constraints</strong>. Preferences such as spreading exams evenly are not constraints; improving them is an optimization job (Module 4).</p>

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
<p>Every agent so far reacted to what it perceived, or searched for a path. A <strong>knowledge-based agent</strong> does something different: it stores facts, and it reasons about what those facts imply.</p>

<div class="definition">
  <p>The agent keeps a <strong>knowledge base (KB)</strong>: a set of sentences it believes. Two operations run it. <strong>TELL</strong> adds a new sentence. <strong>ASK</strong> asks what follows from everything in the KB. The reasoning happens inside ASK.</p>
</div>

<p>In the terms of Module 2, the knowledge base plays the role of the agent's <strong>internal state</strong>, written in logic.</p>

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
