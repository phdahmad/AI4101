/* =========================================================
   Quiz Bank — Artificial Intelligence Principles (AI4101)
   8-12 questions per module, each with an explanation.
   Question type: multiple choice, single answer.
   ========================================================= */

const QUIZ_BANK = {

  // ==================== MODULE 1 ====================
  1: [
    {
      q: "An agent crosses a road after looking both ways and is hit by an object falling from a plane. Was the agent rational?",
      choices: [
        "No — a rational agent never gets a bad outcome.",
        "Yes — rationality is judged on the decision made with the available evidence, not on luck.",
        "No — it should have predicted the falling object.",
        "The question cannot be answered without knowing the agent's code."
      ],
      correct: 1,
      explanation: "Rationality means choosing the action expected to do best given what you know. Expecting a good outcome every time is expecting omniscience, which no agent has."
    },
    {
      q: "What is the Turing test?",
      choices: [
        "A benchmark that measures how fast an AI system runs.",
        "A test where a human judge cannot reliably tell a machine from a human in written conversation.",
        "A proof that machines cannot think.",
        "The standard evaluation used for modern AI systems in industry."
      ],
      correct: 1,
      explanation: "Turing proposed it in 1950 as a thought experiment. Engineers rarely aim at it, because it rewards imitating humans — including human errors and human slowness."
    },
    {
      q: "Which statement about machine learning and AI is correct?",
      choices: [
        "They are two names for the same field.",
        "Machine learning is one part of AI; search, logic, and planning are other parts.",
        "AI is one part of machine learning.",
        "Machine learning replaced all earlier AI methods after 2012."
      ],
      correct: 1,
      explanation: "ML is a sub-field of AI. Classical methods are still in daily use: your maps app runs search, timetables run constraint solving, and chess engines run alpha-beta."
    },
    {
      q: "What caused the two AI winters?",
      choices: [
        "Computers were physically destroyed.",
        "Researchers promised general intelligence and delivered narrow tools, so funding collapsed.",
        "The mathematics behind AI was proved wrong.",
        "Companies moved their money to space research."
      ],
      correct: 1,
      explanation: "Both winters followed the same pattern: large promises, narrow results, lost confidence. It is the reason to describe honestly what your system does and where it fails."
    },
    {
      q: "\"Narrow AI\" means:",
      choices: [
        "An AI system that runs on small devices.",
        "A system that is good at one task and cannot transfer that ability to another.",
        "An AI system that uses a small amount of data.",
        "A system built by a small team."
      ],
      correct: 1,
      explanation: "A model that reads X-rays cannot book a flight. Narrow means built for one job, and it is the shape of essentially every system in use today. Whether any current system is approaching general intelligence is a separate question, and one researchers still argue over."
    },
    {
      q: "A recruitment model is trained on a company's past hiring decisions and starts rejecting qualified applicants from a group that was rarely hired before. This is mainly:",
      choices: [
        "A coding bug in the model.",
        "Bias inherited from the training data.",
        "A hardware limitation.",
        "Evidence that those applicants are less qualified."
      ],
      correct: 1,
      explanation: "The model faithfully repeats the pattern in its data, including past unfairness. Bias is usually a data or goal problem, not a bug in the code."
    },
    {
      q: "Which sub-field of AI does exam timetabling belong to?",
      choices: [
        "Computer vision",
        "Search, planning, and constraint solving",
        "Natural language processing",
        "Robotics"
      ],
      correct: 1,
      explanation: "Timetabling assigns exams to rooms and slots under rules. That is constraint satisfaction — Module 6 — which is a form of search."
    },
    {
      q: "Why is \"explainability\" important for a system that decides on loan or admission applications?",
      choices: [
        "It makes the model more accurate.",
        "The person affected deserves a reason, and the organisation must be able to check that the reason is legitimate.",
        "It reduces the training time.",
        "It is only needed for deep learning models."
      ],
      correct: 1,
      explanation: "\"The model said so\" is not a reason. Without an explanation, neither the applicant nor the institution can tell a valid decision from an unfair one."
    },
    {
      q: "A language model can write essays, translate between languages, summarise documents, and produce working code. Does doing many tasks make it general intelligence?",
      choices: [
        "Yes — handling many different tasks is what general intelligence means.",
        "No — breadth of tasks measures coverage, not the ability to transfer to genuinely new problems.",
        "Yes, but only if it performs each task better than a human.",
        "The question cannot be answered, because general intelligence has no meaning."
      ],
      correct: 1,
      explanation: "A model trained on an enormous amount of human text covers many tasks partly because those tasks appeared in that text. More useful questions than counting tasks: can it transfer to a genuinely new kind of problem, learn a new domain from a handful of examples, and recognise its own limits? Researchers disagree about where today's systems sit on those three — but counting tasks is weak evidence either way."
    },
    {
      q: "Which of these is the clearest example of an agent?",
      choices: [
        "A spreadsheet containing student grades.",
        "A thermostat that reads the temperature and switches the cooling on or off.",
        "A printed exam timetable.",
        "A folder of training images."
      ],
      correct: 1,
      explanation: "An agent perceives its environment and acts upon it. The thermostat perceives the temperature and acts by switching the cooling. The thermostat is the clearest agent here: it senses the temperature of its environment and acts on that environment by switching the cooling. A spreadsheet that only stores or recalculates values is better viewed here as computation rather than an agent; the timetable and the image folder hold data and act on nothing. Note that being an agent is not the same as being an intelligent one: the thermostat follows one fixed rule and decides nothing."
    }
  ],

  // ==================== MODULE 2 ====================
  2: [
    {
      q: "What is the difference between an agent function and an agent program?",
      choices: [
        "The agent function is the code; the agent program is the hardware.",
        "There is no difference; they are two names for the same thing.",
        "The agent function maps any percept sequence to an action; the agent program is the code that produces that behaviour.",
        "The agent function works only in static environments."
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
        "The cameras have a limited resolution.",
        "The agent cannot perceive everything it needs to make a decision, such as what other drivers intend to do.",
        "GPS signals are sometimes lost.",
        "The road map may be out of date."
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
        "Only its current percept — a simple reflex agent.",
        "An internal state recording which rooms it has already cleaned — a model-based reflex agent.",
        "A value for each possible outcome — a utility-based agent.",
        "Experience collected over many days — a learning agent."
      ],
      correct: 1,
      explanation: "The rooms it already cleaned are not in its current percept, so it must keep them in an internal state — that is what a model-based reflex agent adds. Goal-based and utility-based agents keep a model too, but they add more than this rule needs."
    },
    {
      q: "What does a utility-based agent add beyond simply having a goal?",
      choices: [
        "The ability to perceive the environment.",
        "The ability to remember previous percepts.",
        "A way to assign values to outcomes and compare the trade-offs between them.",
        "The ability to use condition–action rules."
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
        "It has more sensors.",
        "It runs without an internet connection.",
        "It has a larger lookup table."
      ],
      correct: 0,
      explanation: "Autonomy is about the source of the agent's knowledge. A system that can only follow built-in assumptions fails when reality differs from what the designer imagined."
    },
    {
      q: "You need an agent to open a valve whenever a tank level drops below a threshold, in a simple and fully observable setting. Which is the simplest suitable agent design?",
      choices: [
        "A learning agent, because learning is always better.",
        "A simple reflex agent: the current percept is enough to choose the right action.",
        "A utility-based agent, so it can weigh options.",
        "A goal-based agent with full search."
      ],
      correct: 1,
      explanation: "When the current percept is enough, a condition–action rule solves the task exactly. Other designs could also work, but they add complexity the task does not need."
    },
    {
      q: "An agent chooses the action expected to give the best result, given everything it has perceived and knows. The outcome is bad because of something it could not predict. Was the action necessarily irrational?",
      choices: [
        "No. Rationality depends on the information available when the decision was made.",
        "Yes, because a rational action always succeeds.",
        "Yes, because rational agents know what will happen.",
        "No, because outcomes never matter."
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
      q: "Which of the following is NOT one of the five components used to define a search problem?",
      choices: [
        "The transition model",
        "The action cost function",
        "The heuristic function",
        "The goal test"
      ],
      correct: 2,
      explanation: "A search problem is defined by the initial state, actions, transition model, goal test, and action cost function. A heuristic is extra knowledge supplied to an informed algorithm — it is a property of the solver, not of the problem."
    },
    {
      q: "What is the difference between a state and a node in a search tree?",
      choices: [
        "They are two names for the same thing.",
        "A state is a configuration of the world; a node is a bookkeeping object holding a state plus its parent, action, and path cost.",
        "A node is a configuration of the world; a state records how the node was reached.",
        "States exist only in graph search; nodes exist only in tree-like search."
      ],
      correct: 1,
      explanation: "One state can appear in many nodes, because several different paths may lead to the same configuration. That is exactly why a reached table is needed to avoid re-expanding the same state."
    },
    {
      q: "Under what condition is breadth-first search cost-optimal?",
      choices: [
        "Always, since it explores the shallowest nodes first.",
        "Only when all actions have the same cost.",
        "Only when a consistent heuristic is available.",
        "Only when the state space contains no cycles."
      ],
      correct: 1,
      explanation: "BFS returns the solution with the fewest actions. That is the cheapest solution only when every action costs the same. With varying costs you need uniform-cost search, which orders the frontier by path cost g(n)."
    },
    {
      q: "Why is iterative deepening search usually preferred over breadth-first search when the solution depth is unknown?",
      choices: [
        "It generates far fewer nodes in total.",
        "It is optimal even when action costs vary.",
        "It has the same time complexity but uses O(bd) memory instead of O(b^d).",
        "It never re-expands a node it has already seen."
      ],
      correct: 2,
      explanation: "IDS repeats the shallow levels, but since the deepest level dominates the node count the overhead is small (about 11% when b = 10). In exchange, memory falls from exponential to linear in the depth — and memory is usually the binding constraint."
    },
    {
      q: "A heuristic h is admissible if:",
      choices: [
        "h(n) never overestimates the true cost from n to the nearest goal.",
        "h(n) is always equal to the true remaining cost.",
        "h(n) ≥ c + h(n') for every successor n' reached at cost c.",
        "h(n) can be computed in constant time."
      ],
      correct: 0,
      explanation: "Admissibility means optimism: h(n) ≤ h*(n). It is what guarantees A* returns an optimal solution, because f(n) = g(n) + h(n) then never overestimates the cost of a complete solution through n."
    },
    {
      q: "h₁ counts misplaced tiles in the 8-puzzle and h₂ sums their Manhattan distances. Both are admissible, and h₂(n) ≥ h₁(n) for every n. What follows?",
      choices: [
        "h₁ is the better choice because it is cheaper to compute.",
        "h₂ dominates h₁, so A* with h₂ never expands more nodes than A* with h₁.",
        "h₂ may be inadmissible because it produces larger values.",
        "The two heuristics will expand identical numbers of nodes."
      ],
      correct: 1,
      explanation: "Among admissible heuristics, larger is better: a higher estimate prunes more of the tree while remaining safe. This is dominance, and it is why Manhattan distance is preferred over misplaced tiles in practice."
    },
    {
      q: "Greedy best-first search orders the frontier by h(n) alone. What is its principal weakness?",
      choices: [
        "It requires more memory than A*.",
        "It cannot use a heuristic that is merely admissible.",
        "It ignores the cost already paid, so the solution it returns need not be optimal.",
        "It is slower than uniform-cost search on every problem."
      ],
      correct: 2,
      explanation: "By dropping g(n), greedy search commits to whatever looks closest to the goal right now and never reconsiders what that commitment cost. On the Romania map it returns a 450-cost route where A* finds 418."
    },
    {
      q: "In A*, why should the goal test be applied when a node is popped from the frontier rather than when it is generated?",
      choices: [
        "Because popping is faster than generating.",
        "Because a goal found in the frontier may be reachable by a cheaper path still waiting in the queue.",
        "Because the heuristic is only defined for popped nodes.",
        "Because the reached table is only updated on pop."
      ],
      correct: 1,
      explanation: "Generating a goal node proves a path exists, not that it is the cheapest. Only when the goal reaches the front of the priority queue is it certain that no lower-f path remains, which is what preserves optimality."
    },
    {
      q: "What does setting h(n) = 0 for all n turn A* into?",
      choices: [
        "Greedy best-first search",
        "Depth-first search",
        "Uniform-cost search",
        "Iterative deepening search"
      ],
      correct: 2,
      explanation: "With h = 0, f(n) = g(n), so A* expands the node with the lowest path cost — exactly uniform-cost search. h = 0 is admissible but carries no information, which is why A* degenerates to a blind algorithm."
    },
    {
      q: "Your A* pathfinder exhausts memory on a large map. Which change preserves optimality?",
      choices: [
        "Switch to weighted A* with W = 2.",
        "Switch to IDA*.",
        "Switch to beam search with k = 100.",
        "Switch to greedy best-first search."
      ],
      correct: 1,
      explanation: "IDA* keeps the admissible f-cutoff and therefore optimality, while storing only the current path. Weighted A* is bounded-suboptimal (cost ≤ W × optimal), and beam search and greedy search give up optimality altogether — and beam search gives up completeness too."
    },
    {
      q: "Which statement about depth-first search is correct?",
      choices: [
        "It is complete in infinite state spaces because it always goes deeper.",
        "Its space complexity is O(bm), which is its main advantage.",
        "It is cost-optimal whenever all action costs are equal.",
        "It expands the node with the lowest path cost first."
      ],
      correct: 1,
      explanation: "DFS stores only the current path and its unexpanded siblings, giving O(bm) space — linear rather than exponential. It pays for this with no optimality guarantee, and in its tree-like form it is not complete: it can follow an infinite branch or loop forever."
    },
    {
      q: "A search problem has branching factor b = 10 and the shallowest goal is at depth d = 12. Bidirectional search would reduce the node count to roughly:",
      choices: [
        "10^6 instead of 10^12",
        "10^11 instead of 10^12",
        "12 × 10 instead of 10^12",
        "It does not reduce the count; it only reduces memory."
      ],
      correct: 0,
      explanation: "Two searches of depth d/2 = 6 each generate about b^6 = 10^6 nodes, instead of one search generating b^12 = 10^12. The saving is enormous, but bidirectional search requires the ability to search backwards from an explicitly known goal state."
    }
  ],

  // ==================== MODULE 4 ====================
  4: [
    { q: "When is local search a better choice than A*?",
      choices: ["When the state space is very small.", "When the answer is a final state and the path taken to reach it does not matter.", "When all actions have the same cost.", "When a perfect heuristic is available."],
      correct: 1,
      explanation: "Local search throws away the path and keeps only the current state, so its memory is constant. That is exactly right for timetables, facility placement, and other problems judged only on the final arrangement." },
    { q: "Hill climbing stops when:",
      choices: ["It reaches the global maximum.", "No neighbour of the current state is better than the current state.", "The temperature reaches zero.", "The frontier becomes empty."],
      correct: 1,
      explanation: "It stops at any point where all neighbours are worse — which may be a local maximum, far below the best answer. It has no way to know which kind of peak it is on." },
    { q: "A search area where all neighbours have the same value, giving no direction to follow, is called:",
      choices: ["A ridge", "A plateau", "A local maximum", "A global maximum"],
      correct: 1,
      explanation: "On a plateau the objective function is flat. Allowing a limited number of sideways moves lets the search cross it, but the limit is needed or it will wander forever." },
    { q: "Why does random-restart hill climbing work so well?",
      choices: ["Each run is guaranteed to find the global maximum.", "If a single run succeeds with probability p, about 1/p cheap runs are enough to succeed once.", "It removes all randomness from the search.", "It never gets stuck in a local maximum."],
      correct: 1,
      explanation: "Individual runs are cheap and often fail, but failures are independent. Running many times and keeping the best result turns a weak method into a strong one." },
    { q: "In simulated annealing, a worse state is accepted:",
      choices: ["Never — that would be hill climbing in reverse.", "With a probability that depends on how much worse it is and on the current temperature.", "Always, so the search stays free.", "Only at the very end of the run."],
      correct: 1,
      explanation: "Slightly worse states at a high temperature are usually accepted; much worse states at a low temperature almost never are. This is what lets the search leave a local maximum early on and settle later." },
    { q: "What happens if the annealing temperature is kept high and constant?",
      choices: ["The search converges faster.", "The search becomes a random walk and never settles.", "It behaves exactly like hill climbing.", "It guarantees the global maximum."],
      correct: 1,
      explanation: "A high temperature accepts almost every move, good or bad. Exploration only helps if it is followed by commitment, which is what the falling temperature provides." },
    { q: "How does local beam search differ from running k separate hill climbers?",
      choices: ["It uses less memory.", "The k states share information, because the best k successors are chosen from all of their neighbours together.", "It never gets stuck.", "It only works on continuous problems."],
      correct: 1,
      explanation: "Because survivors are chosen across the whole pool, a promising region pulls the other searchers towards it. The risk is the opposite one: all k can crowd into the same area and lose variety." },
    { q: "In a genetic algorithm, the role of mutation is to:",
      choices: ["Combine two parent states into a child.", "Introduce small random changes so the population does not lose variety.", "Rank the population by quality.", "Delete the worst states."],
      correct: 1,
      explanation: "Crossover combines existing material; without mutation, any option lost from the whole population can never come back, and the search converges early on a narrow set of answers." },
    { q: "Crossover is most useful when:",
      choices: ["The state string is as short as possible.", "Parts of the string are meaningful building blocks on their own.", "The population is small.", "The problem is continuous."],
      correct: 1,
      explanation: "Cutting and swapping helps when a segment carries independent meaning, such as a good set of routes for one district. If positions have no independent meaning, crossover mostly destroys good states." },
    { q: "In gradient descent, a learning rate that is too large will:",
      choices: ["Make the search very slow but safe.", "Jump over the minimum and oscillate, possibly getting worse each step.", "Guarantee the global minimum.", "Have no effect on the result."],
      correct: 1,
      explanation: "The step size controls how far you move along the slope. Too small is slow; too large overshoots the bottom and can diverge. There is no universally correct value — it is tuned by experiment." }
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
