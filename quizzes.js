/* =========================================================
   Quiz Bank — Artificial Intelligence Principles (AI4101)
   8-12 questions per module, each with an explanation.
   Question type: multiple choice, single answer.
   ========================================================= */

const QUIZ_BANK = {

  // ==================== MODULE 1 ====================
  1: [
    {
      q: "An automatic door opens whenever someone steps in front of it. Which description fits it best?",
      choices: [
        "An intelligent agent, because it perceives people and acts on the door.",
        "Not an agent, because it has no software inside it.",
        "An agent but not an intelligent one: it perceives and acts, but decides nothing.",
        "An intelligent agent, because its goal is to let people pass through."
      ],
      correct: 2,
      explanation: "It perceives someone in front of it and acts by opening, so it is an agent. But one input always gives the same fixed response: it never chooses between options to reach a goal, so it is not an intelligent agent (section 1.2). Being an agent does not need software or a robot body."
    },
    {
      q: "What is the Turing test?",
      choices: [
        "A benchmark that measures how quickly an AI system answers questions.",
        "A proof, published by Turing in 1950, that machines will never be able to think.",
        "The standard test that companies use today to approve new AI systems.",
        "A judge chats in writing with a hidden human and a hidden machine and tries to tell them apart."
      ],
      correct: 3,
      explanation: "Turing proposed it in 1950 (section 1.4): a judge exchanges written messages with a hidden human and a hidden machine. If the judge cannot reliably tell which is which, the machine passes. It is a famous thought experiment, not a proof and not an industry benchmark."
    },
    {
      q: "Which statement about machine learning and AI is correct?",
      choices: [
        "Machine learning is one part of AI; search, logic, and planning are other parts.",
        "They are two names for the same field.",
        "AI is one part of machine learning.",
        "Machine learning replaced all earlier AI methods after 2012."
      ],
      correct: 0,
      explanation: "ML is a subfield of AI. Classical methods are still in daily use: your maps app runs search, timetables run constraint solving, and leading chess engines use alpha-beta search."
    },
    {
      q: "According to section 1.4, what lay behind the AI winters?",
      choices: [
        "Several causes: limited computing power, scarce data, and promises the systems could not keep.",
        "One cause only: a proof in the 1970s showed that the mathematics behind AI was wrong.",
        "One cause only: governments moved all research money from computing to space programmes.",
        "One cause only: computers became cheap, so nobody would pay for AI research any more."
      ],
      correct: 0,
      explanation: "Section 1.4 lists several causes: limited computing power, scarce data, problems that proved harder than expected, and expectations that exceeded what the systems could deliver. The lesson is to describe honestly what a system can and cannot do."
    },
    {
      q: "\"Narrow AI\" means:",
      choices: [
        "An AI system small enough to run on a phone or a watch.",
        "An AI system trained on only a small amount of data.",
        "An AI system built for one job or one limited domain.",
        "An AI system built and maintained by a small team."
      ],
      correct: 2,
      explanation: "A model that reads X-rays cannot book a flight. Narrow means built for one job or one limited domain. Whether any current system is approaching general intelligence is a separate question, and one researchers still argue over."
    },
    {
      q: "A recruitment model is trained on a company's past hiring decisions and starts rejecting qualified applicants from a group that was rarely hired before. This is mainly:",
      choices: [
        "A coding bug in the model.",
        "A hardware limitation.",
        "Evidence that those applicants are less qualified.",
        "Bias inherited from the training data."
      ],
      correct: 3,
      explanation: "The model faithfully repeats the pattern in its data, including past unfairness. Bias can come from the data, the design, the objective the system was given, or the way it is used — not from a bug in the code."
    },
    {
      q: "Which subfield of AI does exam timetabling belong to?",
      choices: [
        "Computer vision",
        "Search and planning",
        "Natural language processing",
        "Robotics"
      ],
      correct: 1,
      explanation: "Section 1.5 places schedules under search and planning. Timetabling assigns exams to rooms and slots so that every rule holds; Module 6 solves it as constraint satisfaction, which is a form of search."
    },
    {
      q: "Why is \"explainability\" important for a system that decides on loan or admission applications?",
      choices: [
        "The person affected deserves a reason, and the organization must be able to check that reason.",
        "It makes the model more accurate, because each decision is checked twice.",
        "It reduces the training time, because the model has fewer rules to learn.",
        "It lets the model make decisions without any human signing them off."
      ],
      correct: 0,
      explanation: "\"The model said so\" is not a reason. Without an explanation, neither the applicant nor the institution can tell a valid decision from an unfair one."
    },
    {
      q: "A language model can write essays, translate between languages, summarize documents, and produce working code. Does doing many tasks make it general intelligence?",
      choices: [
        "Yes — handling many different tasks is what general intelligence means.",
        "No — breadth of tasks measures coverage, not the ability to transfer to genuinely new problems.",
        "Yes, but only if it performs each task better than a human.",
        "The question cannot be answered, because general intelligence has no meaning."
      ],
      correct: 1,
      explanation: "A model trained on an enormous amount of human text covers many tasks partly because those tasks appeared in that text. More useful questions than counting tasks: can it transfer to a genuinely new kind of problem, learn a new domain from a handful of examples, and recognize its own limits? Researchers disagree about where today's systems sit on those three — but counting tasks is weak evidence either way."
    },
    {
      q: "Which of these is the clearest example of an agent?",
      choices: [
        "A spreadsheet that stores the grades of every student in a course.",
        "A thermostat that reads the temperature and switches the cooling on or off.",
        "A printed exam timetable pinned on the noticeboard of the college.",
        "A folder of training images collected for a vision model."
      ],
      correct: 1,
      explanation: "An agent perceives its environment and acts upon it. The thermostat is the clearest agent here: it perceives the temperature of its environment and acts on that environment by switching the cooling. A spreadsheet that only stores or recalculates values is better viewed here as computation rather than an agent; the timetable and the image folder hold data and act on nothing. Note that being an agent is not the same as being an intelligent one: the thermostat follows one fixed rule and decides nothing."
    }
  ],

  // ==================== MODULE 2 ====================
  2: [
    {
      q: "What is the difference between an agent function and an agent program?",
      choices: [
        "The agent function is the code that runs; the agent program is the hardware it runs on.",
        "There is no real difference; both are names for the code inside the agent.",
        "The agent function maps percept sequences to actions; the agent program is the code that produces it.",
        "The agent function is used only in static environments; the agent program in dynamic ones."
      ],
      correct: 2,
      explanation: "The function describes the behaviour, possibly as a huge table. The program is the real implementation. Very different programs can produce the same function, with very different memory and speed."
    },
    {
      q: "The performance measure of an agent should:",
      choices: [
        "Be chosen by the agent as it learns.",
        "Always be a single number.",
        "Describe exactly how the agent should act.",
        "Define what counts as success for the agent's task."
      ],
      correct: 3,
      explanation: "The performance measure defines success; it does not tell the agent how to act. Reward a cleaning robot for dust collected and it may dump dust to collect it again — scoring well while cleaning nothing."
    },
    {
      q: "PEAS is the checklist for describing an agent's task environment. What do the four letters stand for?",
      choices: [
        "Performance measure, Environment, Actuators, Sensors",
        "Perception, Environment, Action, State",
        "Planning, Execution, Analysis, Sensing",
        "Percept, Episode, Agent, Sequence"
      ],
      correct: 0,
      explanation: "Together the four parts are the task environment: Task environment = P + E + A + S. The Environment (E) is only one of them. A wrong P or S defeats even a perfect algorithm."
    },
    {
      q: "Driving a taxi in a busy city is partially observable mainly because:",
      choices: [
        "The cameras have a limited resolution, so the images are never sharp enough.",
        "The agent cannot perceive everything it needs, such as what other drivers intend to do.",
        "GPS signals are sometimes lost between tall buildings and in tunnels.",
        "The road map stored in the taxi may be out of date after road works."
      ],
      correct: 1,
      explanation: "Partial observability means the sensors do not reveal the full state. Other drivers' intentions are part of the state that decides the right action, and no sensor can read them."
    },
    {
      q: "Chess played with a clock is best described as:",
      choices: [
        "Partially observable, stochastic, dynamic, single-agent",
        "Fully observable, stochastic, static, multi-agent",
        "Fully observable, deterministic, semi-dynamic, multi-agent",
        "Partially observable, deterministic, static, multi-agent"
      ],
      correct: 2,
      explanation: "The board is fully visible and moves are deterministic. It is semi-dynamic because the board waits while you think, but your clock does not. And the opponent makes it multi-agent."
    },
    {
      q: "A robot vacuum follows the rule \"do not clean the kitchen twice before cleaning the bedroom\". What does it need, and what is the simplest design that provides it?",
      choices: [
        "Only its current percept of the room it is in — a simple reflex agent.",
        "An internal state of which rooms it has cleaned — a model-based reflex agent.",
        "A value for each possible outcome, to compare them — a utility-based agent.",
        "Experience collected over many days of cleaning — a learning agent."
      ],
      correct: 1,
      explanation: "The rooms it already cleaned are not in its current percept, so it must keep them in an internal state — that is what a model-based reflex agent adds. Goal-based and utility-based agents keep a model too, but they add more than this rule needs."
    },
    {
      q: "What does a utility-based agent add beyond simply having a goal?",
      choices: [
        "The ability to perceive the environment through more sensors.",
        "The ability to remember previous percepts in an internal state.",
        "A way to give outcomes values and compare the trade-offs between them.",
        "The ability to act through condition–action rules alone."
      ],
      correct: 2,
      explanation: "A goal tells the agent what it wants to achieve, but not how desirable each outcome is. A utility function assigns values to outcomes, so the agent can weigh speed against comfort, or safety against cost, and handle uncertainty by expected utility."
    },
    {
      q: "A task is episodic when:",
      choices: [
        "It happens repeatedly at fixed times.",
        "The environment changes while the agent thinks.",
        "There is more than one agent.",
        "Each decision is independent and does not affect later decisions."
      ],
      correct: 3,
      explanation: "Sorting parcels by label is episodic — each parcel stands alone. Driving is sequential: what you do now changes the choices available later."
    },
    {
      q: "An agent is more autonomous when:",
      choices: [
        "It relies on its own experience to correct what its designer assumed.",
        "It has more sensors, so it can perceive more of its environment.",
        "It runs without an internet connection or any outside server.",
        "It has a larger lookup table built in by its designer."
      ],
      correct: 0,
      explanation: "Autonomy is about the source of the agent's knowledge. A system that can only follow built-in assumptions fails when reality differs from what the designer imagined."
    },
    {
      q: "You need an agent to open a valve whenever a tank level drops below a threshold, in a simple and fully observable setting. Which is the simplest suitable agent design?",
      choices: [
        "A learning agent, because learning always gives better results.",
        "A simple reflex agent: the current percept is enough to select the action.",
        "A utility-based agent, so it can weigh the possible outcomes.",
        "A goal-based agent that searches for a full plan."
      ],
      correct: 1,
      explanation: "When the current percept is enough, a condition–action rule solves the task exactly. Other designs could also work, but they add complexity the task does not need."
    },
    {
      q: "An agent chooses the action expected to give the best result, given everything it has perceived and knows. The outcome is bad because of something it could not predict. Was the action necessarily irrational?",
      choices: [
        "No. Rationality depends on what the agent could know when it decided.",
        "Yes, because a rational action always leads to a good outcome.",
        "Yes, because a rational agent knows in advance what will happen.",
        "No, because the outcome never matters when we judge an agent."
      ],
      correct: 0,
      explanation: "Rationality is judged on the decision, not on the luck of the outcome. Outcomes still matter — the performance measure evaluates them — but a bad outcome alone does not make a decision irrational."
    },
    {
      q: "Where does learning fit among the five agent designs?",
      choices: [
        "It is the fifth and most advanced design, above utility-based agents.",
        "It replaces the need for a performance measure.",
        "It is only possible in a fully observable environment.",
        "It is an ability that can be added to any of the other designs."
      ],
      correct: 3,
      explanation: "Learning is not a separate way of choosing actions. A goal-based route planner that learns better travel-time estimates still plans towards a goal — learning improves how it does so."
    }
  ],

  // ==================== MODULE 3 ====================
  3: [
    {
      q: "Which of the following is NOT one of the five parts used to define a search problem?",
      choices: [
        "The transition model",
        "The action cost",
        "The heuristic function",
        "The goal test"
      ],
      correct: 2,
      explanation: "A search problem has five parts: initial state, actions, transition model, goal test, and action cost. A heuristic is extra knowledge that an informed algorithm brings to the problem — it belongs to the solver, not to the problem (section 3.1)."
    },
    {
      q: "What is the difference between a state and a node?",
      choices: [
        "They are two names for the same thing, used by different textbooks.",
        "A node is a situation in the world; a state records how that node was reached.",
        "States exist only in graph search, and nodes exist only in tree-like search.",
        "A state is a situation in the world; a node is a record of one path that reached it."
      ],
      correct: 3,
      explanation: "A node holds a state, the node it came from, the action taken, and the cost so far. One state can appear in many nodes, because several paths can lead to it — which is why graph search keeps a reached table (section 3.2)."
    },
    {
      q: "A route planner returns a route of 8 km. To find it, the algorithm created 40 nodes and never held more than 12 of them at once. Which number describes the algorithm's search time?",
      choices: [
        "The 8 km of the route it returned.",
        "The 40 nodes it created.",
        "The 12 nodes it held at once.",
        "The number of roads on the route."
      ],
      correct: 1,
      explanation: "Search time is the work the algorithm does, counted in nodes created (or expanded): 40. The 8 km is the path cost — a property of the answer, not of the work. The 12 nodes held at once measure search memory (section 3.3)."
    },
    {
      q: "Under what condition does breadth-first search return the cheapest solution?",
      choices: [
        "Only when all actions have the same cost.",
        "Always, since it expands the shallowest nodes first.",
        "Only when a consistent heuristic is available.",
        "Only when the state space contains no cycles."
      ],
      correct: 0,
      explanation: "BFS returns the solution with the fewest actions. That is the cheapest solution only when every action costs the same (and b is finite, so BFS is complete). On the delivery map BFS returns S → B → G, 9 km, while S → A → C → G is 8 km. With different costs you need uniform-cost search (section 3.4)."
    },
    {
      q: "A tree has root P. P's children are Q and R; Q's children are S and T; R's only child is U. Children are considered left to right, and the first one goes on top of the stack. In which order does tree-like DFS take the nodes out of the frontier?",
      choices: [
        "P, Q, S, T, R, U",
        "P, Q, R, S, T, U",
        "P, R, U, Q, T, S",
        "P, Q, S, R, T, U"
      ],
      correct: 0,
      explanation: "DFS always takes out the newest node, so it finishes Q's whole branch (S, then T) before it comes back to R and then U. P, Q, R, S, T, U is the BFS order, level by level. P, R, U, Q, T, S takes the right child first, which breaks the stated rule (section 3.4)."
    },
    {
      q: "Which statement about depth-first search is correct?",
      choices: [
        "It is complete in infinite state spaces because it always goes deeper.",
        "Tree-like DFS needs only O(bm) memory, and that is its main strength.",
        "It returns the cheapest path whenever all action costs are equal.",
        "It expands the node with the lowest path cost first, using a stack."
      ],
      correct: 1,
      explanation: "Tree-like DFS stores only the current path and the unexpanded siblings along it: O(bm) memory, linear rather than exponential. A DFS that keeps a reached table of every state loses this advantage. DFS gives no optimality guarantee, and in its tree-like form it is not complete: it can go around a cycle or follow an endless branch (section 3.4)."
    },
    {
      q: "In uniform-cost search, the frontier holds four nodes: G with g = 9 (G is a goal), C with g = 5, D with g = 3, and H with g = 7. Which node does UCS take out next?",
      choices: [
        "G, because it is a goal.",
        "C, because it was created first.",
        "H, because it was created most recently.",
        "D, because it has the lowest g."
      ],
      correct: 3,
      explanation: "UCS always takes out the node with the lowest path cost g(n): D, with g = 3. Having G in the frontier only proves that a path exists; UCS returns G only when G itself comes out of the frontier, because a cheaper path to G may still be found through D or C (section 3.4)."
    },
    {
      q: "Why is iterative deepening preferred over breadth-first search when memory is limited and the solution depth is unknown?",
      choices: [
        "It creates far fewer nodes in total than BFS does.",
        "It returns the cheapest path even when action costs vary.",
        "It has the same time, O(b^d), but needs only O(bd) memory.",
        "It never expands the same state twice, unlike BFS."
      ],
      correct: 2,
      explanation: "IDS repeats the shallow levels, but the deepest level holds most of the nodes, so the extra work is small (about 11% when b = 10, d = 5). In exchange, memory falls from O(b^d) to O(bd) — and memory is what runs out first (section 3.4)."
    },
    {
      q: "The frontier holds two nodes. X has g = 2 and h = 6. Y has g = 7 and h = 2. Which node does A* take out next, and which does greedy best-first search take out?",
      choices: [
        "A* takes Y; greedy takes X.",
        "Both take X.",
        "A* takes X; greedy takes Y.",
        "Both take Y."
      ],
      correct: 2,
      explanation: "f(X) = 2 + 6 = 8 and f(Y) = 7 + 2 = 9, so A* takes X. Greedy looks only at h, and h(Y) = 2 is smaller, so it takes Y — ignoring the 7 already paid to reach Y (section 3.5)."
    },
    {
      q: "On a road map, the real remaining cost from node K to the goal is 12 km. Which value of h(K) would make the heuristic NOT admissible?",
      choices: [
        "h(K) = 0",
        "h(K) = 9",
        "h(K) = 12",
        "h(K) = 14"
      ],
      correct: 3,
      explanation: "Admissible means h never guesses higher than the real remaining cost, so h(K) must be at most 12. Equal is allowed, and 0 is admissible but gives no help. 14 guesses too high (section 3.6)."
    },
    {
      q: "h₁ counts misplaced tiles in the 8-puzzle and h₂ sums their Manhattan distances. Both are admissible, and h₂(n) ≥ h₁(n) for every n. What follows from these facts alone?",
      choices: [
        "h₁ is the better choice because it is cheaper to compute.",
        "h₂ dominates h₁, so A* with h₂ expands no more nodes, apart from ties.",
        "h₂ may be inadmissible because it produces larger values.",
        "The two heuristics will expand identical numbers of nodes."
      ],
      correct: 1,
      explanation: "This is dominance: h₂ is never smaller and never too high. For consistent heuristics like these, A* with h₂ expands no more nodes than with h₁, apart from ties among nodes whose f equals the best cost. Russell & Norvig report about 230 nodes with h₁ and about 70 with h₂ on 12-move puzzles. Option A describes a real trade-off, but it does not follow from these facts alone (section 3.6)."
    },
    {
      q: "An ambulance service plans routes on a city road map. Roads have different travel times, there is plenty of memory, a heuristic is available that never overestimates the remaining time, and the fastest route is required. Which algorithm fits best?",
      choices: [
        "A* with that heuristic",
        "Breadth-first search",
        "Greedy best-first search",
        "Depth-first search"
      ],
      correct: 0,
      explanation: "Different travel times rule out BFS, which finds the fewest roads, not the fastest route. Greedy search and DFS give no guarantee of the fastest route. With an admissible heuristic, A* returns the fastest route, and its hint guides the search towards the goal (section 3.7)."
    }
  ],

  // ==================== MODULE 4 ====================
  4: [
    { q: "In the exam timetable, which of these is a constraint rather than a soft preference?",
      choices: ["No student has two exams at the same time.", "Few students have two exams on the same day.", "Exams are spread evenly over the two weeks.", "Large exams are placed early in the exam period."],
      correct: 0,
      explanation: "A constraint must hold, or the timetable cannot be used at all. The other three are desirable but not required, so they enter the objective as penalties: a timetable that ignores them is worse, but still usable." },
    { q: "Which of these is a continuous optimization problem?",
      choices: ["Choosing the order in which a van visits 5 customers.", "Choosing which of 4 projects to fund within a budget.", "Choosing a time slot and a room for every exam.", "Choosing a real number w in a model to make its error smallest."],
      correct: 3,
      explanation: "The type depends on the decision variables. An order, a yes/no choice for each project, and a slot for each exam are separate values, so those problems are discrete. A real number w can take any value in a range, so that problem is continuous." },
    { q: "A timetable in which one student has two exams at the same time is:",
      choices: ["In the feasible region, but with a high penalty.", "Outside the search space, because it breaks a rule.", "In the search space, but not in the feasible region.", "In the feasible region, because every timetable is."],
      correct: 2,
      explanation: "The search space holds every timetable the representation allows, including ones that break constraints. The feasible region keeps only the timetables that satisfy every constraint, so this one is in the search space but not in the feasible region." },
    { q: "When does hill climbing stop?",
      choices: ["When it reaches the global optimum of the problem.", "When no neighbour is better than the current solution.", "When it has scored every candidate in the search space.", "When the population stops changing between generations."],
      correct: 1,
      explanation: "Hill climbing stops as soon as no neighbour is better. That point may be a local optimum, far from the best answer, and hill climbing cannot tell which kind it has reached." },
    { q: "A region where all neighbours have the same objective value, so the search has no direction to follow, is called:",
      choices: ["A plateau", "A ridge", "A local optimum", "A global optimum"],
      correct: 0,
      explanation: "On a plateau the objective is flat. Allowing a limited number of sideways moves lets the search cross it; without a limit it may walk in circles." },
    { q: "One run of hill climbing finds the best timetable with probability p = 0.2, and runs are independent. What can we say about random restarts?",
      choices: ["Five runs are guaranteed to find the best timetable.", "Each new run has a higher chance than the run before.", "On average, about five runs are needed for one success.", "Restarts cannot help, because every run is the same."],
      correct: 2,
      explanation: "The expected number of runs until the first success is 1/p = 1/0.2 = 5. That is an average, not a guarantee: five runs succeed only about 67% of the time. Each run starts from a new random solution, so runs differ, and each has the same chance p." },
    { q: "In a genetic algorithm, what does mutation do?",
      choices: ["It combines parts of two parents to make a child.", "It makes a small random change that keeps variety.", "It chooses which chromosomes become the parents.", "It removes every child that breaks a constraint."],
      correct: 1,
      explanation: "Mutation changes a chromosome at random, for example by flipping one bit. It keeps variety in the population, and the change can make the child better or worse. Combining parents is crossover, and choosing parents is selection." },
    { q: "In the project example (budget 90 thousand riyals), crossover produces child 1110, which costs 120. What should the algorithm do with it?",
      choices: ["Keep its benefit of 100 as its fitness, because benefit is the objective.", "Stop the algorithm, because the population now holds an infeasible child.", "Flip every bit of the child, so that it becomes a different chromosome.", "Penalize it with fitness 0, or repair it by dropping projects until it fits."],
      correct: 3,
      explanation: "The child breaks the budget constraint, so it cannot be scored as if it were feasible. Common rules: penalize it with fitness 0, so it cannot be chosen as a parent; reject it and make a new child instead; or repair it — dropping P2 turns 1110 into 1010, which costs exactly 90." },
    { q: "Gradient descent minimizes f(x) = (x − 3)², whose slope is f′(x) = 2(x − 3). It starts at x = 0 with learning rate 0.1. What is x after one step?",
      choices: ["−0.6", "0.6", "0.3", "6"],
      correct: 1,
      explanation: "f′(0) = 2(0 − 3) = −6. The update is x − α·f′(x) = 0 − 0.1 × (−6) = 0.6. The negative slope means f goes down as x grows, so the step moves x to the right, towards 3." },
    { q: "For f(x) = (x − 3)², starting at x = 0, gradient descent with learning rate 1.1 gives x = 6.6, then −1.32, then 8.18. What is happening?",
      choices: ["The steps jump over the minimum and land further away.", "The learning rate is too small, so progress is very slow.", "The search has found a local minimum and has stopped.", "The search is moving steadily towards the minimum at 3."],
      correct: 0,
      explanation: "The learning rate is too large. Each step jumps over x = 3 to the other side, and each time it lands further away than before (distance 3, then 3.6, 4.32, 5.18), so the search never settles. A smaller rate, such as 0.1, approaches 3 steadily." }
  ],

  // ==================== MODULE 5 ====================
  5: [
    { q: "In a two-player zero-sum game, the solution returned by minimax is:",
      choices: ["A single path of moves to the win.", "A strategy: a reply for every possible reply of the opponent.", "The list of all terminal states.", "The shortest sequence of moves."],
      correct: 1,
      explanation: "You control only half the moves, so a single planned line is worthless. The answer must specify what you do in response to whatever the opponent chooses." },
    { q: "At a MIN node, the minimax value is:",
      choices: ["The maximum of the children's values.", "The minimum of the children's values.", "The average of the children's values.", "The value of the first child examined."],
      correct: 1,
      explanation: "MIN is the opponent and will choose whatever is worst for MAX, so a MIN node passes upward the smallest value among its children." },
    { q: "A student says a branch is worth 8 because its best leaf holds 8, but the opponent moves next in that branch. What is the error?",
      choices: ["Leaves should be averaged, not maximised.", "The branch is worth what the opponent will allow, which is the minimum of its children, not the best leaf.", "8 should be negated.", "The branch is worth the sum of its leaves."],
      correct: 1,
      explanation: "You never get to choose the leaf when the opponent moves next. Always evaluate a branch by what the player to move there would actually pick." },
    { q: "Compared with minimax, alpha-beta pruning returns:",
      choices: ["A slightly worse move, but much faster.", "Exactly the same move, having examined fewer nodes.", "A different move whenever the tree is deep.", "An approximate value with a known error bound."],
      correct: 1,
      explanation: "Alpha-beta only skips branches that cannot change the decision. It is an exact optimisation, not an approximation." },
    { q: "The pruning condition in alpha-beta is:",
      choices: ["α > β", "α ≥ β", "α + β = 0", "β > α"],
      correct: 1,
      explanation: "α is the best MAX can already guarantee and β the best MIN can already guarantee. When α ≥ β, no player would ever choose to reach this node, so the remaining children can be skipped." },
    { q: "With perfect move ordering, the time complexity of alpha-beta becomes roughly:",
      choices: ["O(b^m)", "O(b^(m/2))", "O(bm)", "O(m^b)"],
      correct: 1,
      explanation: "Good ordering roughly halves the exponent, which means the same time budget now searches twice as deep. This is why engines spend real effort guessing a good move order before searching." },
    { q: "What is the horizon effect?",
      choices: ["Losing accuracy because the evaluation function is too slow.", "A bad event just beyond the search depth stays invisible, and the program may even push it further away with pointless moves.", "Running out of memory during the search.", "Pruning a branch that contained the best move."],
      correct: 1,
      explanation: "The usual cure is to extend the search on unstable positions — captures and checks — so the program never stops in the middle of an exchange." },
    { q: "An evaluation function is needed because:",
      choices: ["Minimax cannot handle two players.", "Real game trees are far too large to search to terminal states, so we stop early and estimate.", "Terminal states have no utility.", "Alpha-beta requires it to prune."],
      correct: 1,
      explanation: "We replace the terminal test with a cutoff test and the utility with a fast estimate of how good a non-final position is." },
    { q: "At a chance node in expectiminimax, the value is:",
      choices: ["The maximum of the children.", "The minimum of the children.", "The sum of each child's value multiplied by its probability.", "The child with the highest probability."],
      correct: 2,
      explanation: "A chance node takes the expected value: not the best case and not the worst case, but the probability-weighted average of all outcomes." },
    { q: "Why does the exact scale of the evaluation numbers matter in expectiminimax, but not in plain minimax?",
      choices: ["Because chance nodes average the values, so changing a value changes the average and can change the decision.", "Because expectiminimax always maximises.", "Because pruning requires exact numbers.", "Because the utility must be between 0 and 1."],
      correct: 0,
      explanation: "Plain minimax only compares values, so any evaluation that ranks positions identically gives the same move. Averaging is sensitive to the actual magnitudes, not only to their order." }
  ],

  // ==================== MODULE 6 ====================
  6: [
    { q: "A constraint satisfaction problem is defined by:",
      choices: ["An initial state, actions, and a goal test.", "Variables, a domain for each variable, and constraints on combinations of values.", "A heuristic and a cost function.", "A population, a fitness function, and a mutation rate."],
      correct: 1,
      explanation: "Those three parts are what make a CSP special: the internal structure of a state is visible, so the solver can reason about it instead of treating each state as a black box." },
    { q: "Why does a CSP search tree need to consider only one variable per level, rather than every order of assignment?",
      choices: ["Because domains are always small.", "Because the order of assignments does not change the final assignment — the path is not part of the answer.", "Because constraints are always binary.", "Because backtracking would otherwise be impossible."],
      correct: 1,
      explanation: "Assigning A then B produces the same result as B then A, so different orders need not be explored separately. This reduces the tree from n! to d^n." },
    { q: "The MRV heuristic tells you to choose next:",
      choices: ["The variable with the most legal values remaining.", "The variable with the fewest legal values remaining.", "The variable involved in the fewest constraints.", "A variable at random, to avoid bias."],
      correct: 1,
      explanation: "Minimum Remaining Values picks the most constrained variable, so that a dead branch is discovered as early as possible instead of after many more assignments." },
    { q: "The LCV heuristic tells you to try first:",
      choices: ["The value that rules out the fewest options for the remaining variables.", "The value that rules out the most options.", "The smallest value in the domain.", "The value used most often so far."],
      correct: 0,
      explanation: "You only need one value per variable to work, so keeping the remaining options open makes success more likely. Note the deliberate contrast: most constrained variable, least constraining value." },
    { q: "Why do MRV and LCV point in opposite directions?",
      choices: ["It is an arbitrary convention.", "Every variable must be assigned, so fail fast there; but only one value per variable is needed, so stay flexible there.", "MRV is for binary constraints and LCV for unary ones.", "Because LCV is only used after backtracking."],
      correct: 1,
      explanation: "They answer different questions. Variables are a conjunction — all must succeed, so find failure early. Values are a disjunction — one must succeed, so maximise the chances." },
    { q: "An arc X → Y is arc consistent when:",
      choices: ["X and Y have the same domain.", "For every value left in X's domain there is at least one value in Y's domain satisfying the constraint.", "X and Y have exactly one value each.", "There is no constraint between X and Y."],
      correct: 1,
      explanation: "Any value of X with no possible partner in Y can never appear in a solution, so it is deleted. This is the pruning you already do when playing Sudoku." },
    { q: "In AC-3, after removing a value from X's domain, you must:",
      choices: ["Restart the algorithm from the beginning.", "Re-add every arc pointing into X to the queue, because the removal can cascade.", "Remove the same value from every other domain.", "Stop, because the CSP is now inconsistent."],
      correct: 1,
      explanation: "Shrinking X's domain may leave some neighbour's value without a partner, so those arcs must be checked again. Forgetting this step is the classic AC-3 exam mistake." },
    { q: "The difference between forward checking and full arc consistency is:",
      choices: ["Forward checking is applied before the search, AC-3 during it.", "Forward checking only cleans the immediate neighbours of the variable just assigned; AC-3 cascades through the whole graph.", "Forward checking works only on unary constraints.", "They are two names for the same thing."],
      correct: 1,
      explanation: "Forward checking is cheap and catches many failures early. AC-3 is stronger and catches failures two or more steps away, at a higher cost per assignment." },
    { q: "Min-conflicts is a good choice when:",
      choices: ["The problem has very few variables.", "The problem is very large, so starting from a complete but broken assignment and repairing it is more practical than backtracking.", "All constraints are unary.", "You need a guarantee of completeness."],
      correct: 1,
      explanation: "Min-conflicts is local search applied to a CSP: pick a variable that breaks a rule and give it the value breaking the fewest rules. It solves enormous problems quickly, without any completeness guarantee." },
    { q: "\"Removing a constraint always makes a CSP faster to solve.\" This claim is:",
      choices: ["Always true — fewer rules means less checking.", "Often false — constraints let the solver delete possibilities without trying them, so removing one can enlarge the search.", "True only for binary constraints.", "True only when using AC-3."],
      correct: 1,
      explanation: "Constraints are pruning power. A weakly constrained problem has a huge space of legal arrangements to wander through. The hardest problems sit at the edge between many solutions and none." }
  ],

  // ==================== MODULE 7 ====================
  7: [
    { q: "In a knowledge-based agent, TELL and ASK are:",
      choices: ["Two inference rules.", "The operations that add a sentence to the knowledge base and query what follows from it.", "Two kinds of logical connective.", "The names of the sound and complete procedures."],
      correct: 1,
      explanation: "TELL adds knowledge; ASK does the reasoning. The agent derives conclusions nobody explicitly programmed, and the chain of derivation doubles as an explanation." },
    { q: "KB ⊨ α means:",
      choices: ["α appears somewhere in the knowledge base.", "In every model where the KB is true, α is also true.", "α can be derived using modus ponens.", "α is true in at least one model."],
      correct: 1,
      explanation: "Entailment is about all models, not about any particular derivation. It is the standard against which we judge whether an inference procedure is sound and complete." },
    { q: "The sentence A ⇒ B is false:",
      choices: ["Whenever A is false.", "Only when A is true and B is false.", "Whenever B is false.", "Only when both are false."],
      correct: 1,
      explanation: "Implication is a promise that is broken only when the condition holds and the conclusion fails. If A is false the sentence is true, however strange that feels in everyday language." },
    { q: "An inference procedure is sound if:",
      choices: ["It can derive every sentence that is entailed.", "Everything it derives is genuinely entailed.", "It always terminates.", "It works in first-order logic."],
      correct: 1,
      explanation: "Sound = says only true things. Complete = says all the true things. An unsound system is dangerous; an incomplete one is merely limited." },
    { q: "Which is the correct CNF rewrite of A ⇒ B?",
      choices: ["A ∨ ¬B", "¬A ∨ B", "¬A ∧ B", "A ∧ ¬B"],
      correct: 1,
      explanation: "Removing implication is the second step of CNF conversion, and it is the one worth memorising: A ⇒ B is exactly ¬A ∨ B." },
    { q: "Resolving (A ∨ B) with (¬B ∨ C) gives:",
      choices: ["(A ∨ B ∨ C)", "(A ∨ C)", "(B ∨ ¬B)", "The empty clause"],
      correct: 1,
      explanation: "B and ¬B cancel, and the remaining literals from both clauses are joined: (A ∨ C)." },
    { q: "To prove KB ⊨ α by resolution, you:",
      choices: ["Add α to the KB and look for a contradiction.", "Add ¬α to the KB, convert to CNF, and resolve until the empty clause appears.", "Build the full truth table and check every row.", "Apply modus ponens until α appears."],
      correct: 1,
      explanation: "It is proof by contradiction: assuming α is false must break the world. Producing the empty clause is that contradiction." },
    { q: "Deriving the empty clause during resolution means:",
      choices: ["The knowledge base is empty.", "A contradiction was found, so the sentence you negated must be entailed.", "The proof failed.", "Two clauses were identical."],
      correct: 1,
      explanation: "The empty clause is a clause with no literals — it can never be satisfied. Reaching it proves that the assumption ¬α is impossible." },
    { q: "Which sentence correctly says \"every student registered in AI4101 must sit the final exam\"?",
      choices: ["∀x Registered(x, AI4101) ∧ MustSitFinal(x)", "∀x Registered(x, AI4101) ⇒ MustSitFinal(x)", "∃x Registered(x, AI4101) ⇒ MustSitFinal(x)", "∃x Registered(x, AI4101) ∧ MustSitFinal(x)"],
      correct: 1,
      explanation: "∀ pairs with ⇒. Using ∧ would claim that everything in the universe is registered in AI4101, including the room and the moon — the single most common mistake in first-order logic." },
    { q: "Unifying Teaches(x, AI4101) with Teaches(Ahmad, y) gives:",
      choices: ["Failure — the expressions do not match.", "{x = Ahmad, y = AI4101}", "{x = y}", "{x = AI4101, y = Ahmad}"],
      correct: 1,
      explanation: "Unification finds the substitution that makes two expressions identical. It is what allows one general rule to fire on thousands of specific facts in first-order inference." }
  ]

};

window.QUIZ_BANK = QUIZ_BANK;
