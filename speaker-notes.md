# Speaker Notes - MCP Servers & Agentic AI Lunch & Learn

**Presentation Duration:** ~35-40 minutes  
**Format:** Interactive demonstration with live coding examples  
**Audience:** Syniti development team

---

## Pre-Session Setup (5 mins before start)

- [ ] Open presentation website at `localhost:3000`
- [ ] Open VSCode with a sample project
- [ ] Ensure MCP servers are configured (Atlassian, GitHub, Figma)
- [ ] Have Jira board ready with test ticket (PBI-1234)
- [ ] Open ideas/enhancement-features.md in separate tab
- [ ] Test internet connection for live demo
- [ ] Have backup screenshots ready in case of connection issues

---

## Welcome & Introduction (2-3 mins)

**Opening:**

> "Good morning/afternoon everyone! Thanks for joining today's Lunch & Learn. Today we're diving into something has the potntial to fundamentally change how we write code at Syniti - the Model Context Protocol, or MCP, and how it enables true agentic AI workflows."

**Set Expectations:**

- This is about making AI smarter by giving it context
- We'll do a live demo - things might break, that's part of learning!
- Focus on practical applications for our daily work
- Questions welcome throughout; this is not a lecture.

**Personal Hook:**

> "How many of you have asked Copilot to write something and it hallucinated a completely wrong API? Or generated code that doesn't match our architecture? That may end today."

---

## Section 1: Why Context Matters for AI (5 mins)

### The Problem (1 min)

**Key Point:** AI assistants are smart but contextually blind.

**Talking Points:**

- Current AI tools (Copilot, ChatGPT) only know what's in their training data
- They don't know about YOUR Jira tickets, YOUR design files, YOUR codebase specifics
- It's like asking a brilliant contractor to renovate your house without showing them the blueprints

**Relatable Example:**

> "Imagine you're new to Syniti. Someone says 'implement the standard data validation pattern.' Without context - our Confluence docs, existing code, architectural decisions - you'd be guessing. That's exactly where AI is right now."

### The Opportunity (2 mins)

**Key Point:** Context transforms AI from autocomplete to teammate.

**Statistics to Share:**

- Studies show context-aware AI reduces hallucinations by 60-70%
- Developers report 2-3x faster feature implementation
- Code quality improves because AI follows existing patterns

**Paint the Vision:**

> "What if AI could read the Jira ticket, check the Figma design, review our architecture docs in Confluence, find similar patterns in our codebase, and THEN write the code? That's not science fiction - that's what we're showing you today."

### Enter MCP (2 mins)

**Key Point:** MCP is the standard protocol that makes this possible.

**Analogy:**

> "Think of MCP like USB-C. Before USB-C, every device had its own charging cable - chaos. MCP does the same thing for AI and data sources - it's a universal connector."

**Technical Overview (keep it simple):**

- Open standard created by Anthropic (makers of Claude)
- Provides standardized way for AI to query external systems
- Already has servers for Jira, GitHub, Figma, Slack, databases, and more
- We can even build custom MCP servers for Syniti-specific tools

**Show the diagram on screen** and walk through:

1. AI needs information
2. Asks MCP server using standard protocol
3. MCP server queries the actual data source (Jira/Figma/etc)
4. Returns structured data to AI
5. AI uses that context to write better code

---

## Section 2: Core Concepts (10-12 mins)

### Three Key Players (3 mins)

**Walk through each concept card:**

**AI Assistant:**

> "This is Claude, GPT-4, Copilot - the brain. It's incredibly smart but needs to know what to think about."

**Context Sources:**

> "These are your project's knowledge repositories. For us at Syniti, this is:
>
> - Jira for requirements and tickets
> - Confluence for architecture and decisions
> - Figma for UI/UX designs
> - GitHub for our codebase
> - Internal APIs and databases"

**MCP Server:**

> "This is the translator and messenger. It speaks AI language on one side and speaks Jira API, Figma API, etc. on the other side. It's the magic middleware."

### How MCP Works - The Flow (4 mins)

**Walk through the interaction diagram step by step:**

**Step 1 - AI asks MCP:**

> "When you type '@atlassian get me ticket PBI-1234', Copilot knows it needs external data. It sends a standardized MCP request."

**Step 2 - MCP queries source:**

> "The Atlassian MCP server receives this request, translates it to a Jira API call, authenticates with your credentials, and fetches the ticket."

**Step 3 - Structured data returned:**

> "MCP doesn't just dump HTML or JSON. It returns structured data: title, description, acceptance criteria, comments, linked tickets - everything the AI needs."

**Step 4 - AI writes better code:**

> "Now the AI has REAL requirements. It's not guessing what PBI-1234 means - it knows exactly what you're building."

### Real vs Fake Context (2-3 mins)

**Critical Distinction:**

**Without MCP (current state):**

```
You: "Write a data validation service for the new PBI"
AI: "Sure! Here's a generic validation service..."
[Generates code that doesn't match our patterns]
```

**With MCP (future state):**

```
You: "Write a data validation service for PBI-1234"
AI: [reads Jira ticket]
    [checks Confluence for validation standards]
    [finds similar services in our codebase]
    [reviews architecture decisions]
    "Based on PBI-1234 requirements and our existing ValidationServiceBase
     pattern, here's the implementation..."
[Generates code that fits perfectly]
```

**The Difference:** Real requirements, real patterns, real architecture = real productivity.

### Q&A Checkpoint (1-2 mins)

> "Before we dive into the live demo, any questions about the concepts? MCP servers? How the protocol works?"

---

## Section 3: Live Demo - AI + MCP in Action (10 mins)

**Setup:**

> "Alright, this is where it gets fun. I'm going to show you a complete workflow - from idea to Jira epic, through design and architecture, to working code. All with AI + MCP doing the heavy lifting."

### Demo Step 1: Create Jira Epic (2 mins)

**What to do:**

1. Open VSCode with Copilot Chat
2. Open ideas/enhancement-features.md in the editor
3. Type in Copilot Chat:

```
@atlassian Create an epic from ideas/enhancement-features.md.
Title it "Website Enhancement - Interactive Presentation Features"
Break down the 9 features into individual user stories with:
- Acceptance criteria
- Story points estimate
- Technical notes
```

**What to highlight:**

- AI is READING our actual enhancement doc
- It's creating properly formatted Jira content
- Breaking down complex ideas into trackable stories
- This would normally take 30-45 minutes of manual work

**Talking point:**

> "Notice how it's not just copying the markdown. It's understanding the features, structuring them as proper user stories, and even estimating complexity. That's context at work."

### Demo Step 2: Read Requirements (1.5 mins)

**What to do:**

```
@atlassian What are the requirements in PBI-1234?
```

**What to highlight:**

- AI fetches real-time data from Jira
- Shows acceptance criteria, description, comments
- No context switching - you stay in VSCode

**Talking point:**

> "In the old workflow, you'd open Jira in a browser, read the ticket, switch back to VSCode, try to remember everything. Now? The AI has perfect memory of every detail."

### Demo Step 3: Check Design Specs (1.5 mins)

**What to do:**

```
@figma Show me the design specs for the login page redesign
```

**What to highlight:**

- Pulls exact colors, spacing, dimensions
- Component structure from Figma
- Design tokens and variables

**Talking point:**

> "How many times have you implemented a design, only to find out the blue you used was #2563EB instead of #2463EA? AI doesn't guess - it knows."

### Demo Step 4: Find Similar Code (2 mins)

**What to do:**

```
@github Find similar authentication services in our codebase.
Show me the patterns we're currently using.
```

**What to highlight:**

- Searches across all repositories
- Identifies common patterns
- Shows actual implementation examples

**Talking point:**

> "This is huge for consistency. New developers especially - instead of guessing how we do things, AI shows them our established patterns."

### Demo Step 5: Review Architecture (1.5 mins)

**What to do:**

```
@atlassian Get the architecture guidelines from Confluence
for building REST services
```

**What to highlight:**

- Fetches documentation from Confluence
- Includes best practices and standards
- References related architectural decision records (ADRs)

**Talking point:**

> "Our architecture docs are the source of truth, but they're scattered across Confluence. MCP makes them instantly accessible."

### Demo Step 6: Generate Code (1.5 mins)

**What to do:**

```
Now write the authentication service based on:
- PBI-1234 requirements
- The Figma design tokens for the login UI
- Our existing AuthServiceBase pattern
- REST service architecture guidelines
```

**What to highlight:**

- AI combines ALL the context
- Code matches requirements exactly
- Follows our patterns and style
- Uses correct design tokens

**Talking point:**

> "This is the magic moment. The AI has context from Jira, Figma, GitHub, and Confluence. It's not hallucinating - it's building with knowledge."

### Watch For Section (briefer)

**Point out on screen:**

- ✅ Code matches requirements exactly (because it read them)
- ✅ Written in seconds (no back-and-forth confusion)
- ✅ Fewer hallucinations (real data, not assumptions)
- ✅ Context from multiple sources combined (the superpower)

---

## Section 4: Installing MCPs in VSCode (5 mins)

**Transition:**

> "That demo looked pretty good, right? The best part? Setting this up takes about 5 minutes. Let me show you."

### Step 1: Command Palette (30 sec)

**Live demo:**

- Press `Cmd+Shift+P` (show the keys on screen)
- Type "MCP"

**Talking point:**

> "VSCode has built-in MCP support now. Microsoft is all-in on this."

### Step 2: Add Server (1 min)

**Live demo:**

- Select "MCP: Add Server..."
- Show the list of available servers

**Talking point:**

> "Look at this list - GitHub, Atlassian, Figma, Slack, Postgres, MongoDB... There are hundreds of MCP servers already built."

### Step 3: Select Server Type (1.5 mins)

**Walk through the three cards on screen:**

**GitHub MCP:**

> "For code search, PR reviews, issue tracking. Essential."

**Atlassian MCP (KEY FOR SYNITI!):**

> "This is our golden ticket. Jira tickets, Confluence docs, our entire knowledge base becomes AI-accessible."

**Figma MCP:**

> "For any team doing frontend work. Design specs, component libraries, everything."

### Step 4: Authentication (1 min)

**Important security note:**

> "These MCPs use YOUR credentials. The AI can only access what YOU can access. If you don't have permission to a Jira project, neither does the AI. Security is preserved."

**Quick guide:**

- GitHub: Personal Access Token from Settings → Developer Settings
- Atlassian: API Token from your account settings
- Figma: Generate token in account settings

**Pro tip:**

> "Store these in environment variables or VSCode settings. Don't hard-code tokens."

### Step 5: Verify Connection (1 min)

**Live test:**

```
@github show me my recent pull requests
@atlassian list my assigned tickets
@figma get design system colors
```

**Success indicators:**

- Quick responses (< 2 seconds)
- Accurate data
- No authentication errors

**Troubleshooting tip:**

> "If something doesn't work, check the VSCode Output panel → MCP Servers. Logs will tell you what's wrong."

### Quick Links (briefer)

**Point to resources:**

> "All the links are on the website. The official MCP docs are excellent. There's also a huge community building servers - check the GitHub org."

---

## Section 5: Real-World Benefits (5 mins)

**Transition:**

> "We've seen how it works. Now let's talk about why this matters for Syniti specifically."

### Faster Onboarding (1 min)

**The Problem:**

> "New developers at Syniti face a steep learning curve. Our domain is complex - data management, migration, quality. Our codebase is large. Our patterns are specific."

**The Solution:**

> "With MCP, new devs ask AI: 'How do we handle data validation in Syniti projects?' AI pulls from our Confluence docs, shows code examples from our repos, references our standards. Onboarding time cuts in half."

**Real Example:**

> "Instead of spending 2 weeks reading docs, new devs are productive in 3-4 days because AI is their onboarding buddy with perfect memory."

### Reduced Context-Switching (1.5 mins)

**The Problem:**

> "Typical development workflow: Check Jira ticket → Switch to Figma → Check Confluence for standards → Search GitHub for examples → Back to VSCode → Try to remember everything → Realize you forgot something → Start over."

**The Pain:**

> "Studies show it takes 23 minutes to fully regain focus after a context switch. If you're switching 10 times a day, that's 4 hours of lost productivity."

**The Solution:**

> "Stay in your IDE. AI fetches everything. Your brain stays in flow state."

**Personal testimony:**

> "I've been using this for 2 weeks. My focus time increased by 40%. I'm shipping faster and with less mental fatigue."

### Higher Quality Code (1.5 mins)

**The Problem:**

> "Hallucinations and inconsistent patterns lead to:
>
> - Bugs that slip through code review
> - Technical debt from non-standard implementations
> - Rework when designs don't match implementation"

**The Solution - Three Quality Improvements:**

1. **Requirements Accuracy:**

   > "AI reads actual requirements, not your memory of requirements."

2. **Pattern Consistency:**

   > "AI sees all our existing patterns and follows them automatically."

3. **Design Precision:**
   > "AI uses exact design tokens - no more 'close enough' colors or spacing."

**The Result:**

> "Fewer bugs. Less rework. Happier QA team. Happier customers."

### Foundation for Agentic Workflows (1 min)

**The Vision:**

> "This is just the beginning. Right now, we're asking AI to fetch context. The future? AI takes autonomous actions."

**Future Scenarios:**

```
"AI, when the PR is approved and merged, update the Jira ticket
 and post in the team Slack channel"

"AI, monitor this service in production. If errors spike,
 create a bug ticket with logs and ping me"

"AI, every Friday generate a summary of this epic's progress
 and email it to stakeholders"
```

**The Foundation:**

> "MCP is the protocol that makes this possible. We're building the foundation for autonomous AI workflows."

### Impact Metrics (briefer)

**Show the three metrics:**

**2-3x Faster Development:**

> "Not hype. Real teams shipping real features 2-3x faster with context-aware AI."

**50% Less Context-Switching:**

> "Measured time in IDE vs switching between tools. Massive difference."

**Fewer AI Hallucinations:**

> "When AI has real data, it doesn't need to guess. Hallucinations drop dramatically."

---

## Conclusion & Next Steps (3-5 mins)

### Summary (1 min)

**The Core Message:**

> "Context is everything. MCP gives AI the context it needs to be a true teammate, not just a fancy autocomplete."

**Three Key Takeaways:**

1. MCP connects AI to your real project data
2. Setup is simple - 5 minutes per server
3. Benefits are immediate and measurable

### Getting Started at Syniti (2 mins)

**Immediate Action Items:**

**For Individuals:**

> "Anyone can start today. Install the Atlassian and GitHub MCP servers. Start small - just use them for reading Jira tickets and searching code. You'll be hooked in a week."

**For Teams:**

> "Talk to your team lead about setting up MCP servers for your project. Share authentication best practices. Start building a library of useful prompts."

**For Leadership:**

> "This is a competitive advantage. Teams using MCP ship faster, with higher quality. We should standardize on this across Syniti."

### Resources (1 min)

**Point to the resources section:**

- MCP official docs
- MCP registry (hundreds of servers)
- This demo repository (all code is public)
- My contact info for questions

**Community:**

> "There's a massive community building MCP servers. If you need a connector to some tool, it probably exists. If not, building one is surprisingly easy - I can show you how."

### Call to Action (1 min)

**The Ask:**

> "Here's what I want from you:
>
> 1. Try it this week. Just one MCP server.
> 2. Share your experience - good or bad - in our Slack channel.
> 3. Think about Syniti-specific MCP servers we could build.
> 4. Spread the word. This works best when whole teams adopt it."

**Final Thought:**

> "Five years ago, we learned Git. Three years ago, we adopted Docker. Last year, we integrated AI assistants. This year, we're giving those AI assistants the context they need to truly help us. This is the next evolution. Let's be early adopters, not late followers."

---

## Q&A Session (5-10 mins)

### Anticipated Questions & Answers

**Q: "Is this secure? What about our proprietary code?"**
A: "MCP servers run locally or in your controlled environment. They use YOUR credentials and respect YOUR permissions. Nothing goes to OpenAI or Anthropic that wouldn't already go there when you use their tools. The MCP server is just a messenger."

**Q: "What if the MCP server is down?"**
A: "You fall back to regular AI - no context. It's graceful degradation. Your IDE still works, AI still works, you just lose the context advantage temporarily."

**Q: "Can we build custom MCP servers for Syniti-specific tools?"**
A: "Absolutely! The protocol is open source. We could build MCP servers for:

- Our internal APIs
- Custom databases
- Legacy systems
- Proprietary tools
  I'd love to lead a working group on this."

**Q: "What's the performance impact?"**
A: "MCP calls are async and cached. Typical response: 500ms-2s depending on the source. Negligible compared to manually switching contexts."

**Q: "Does this work with Claude/ChatGPT/other AIs?"**
A: "MCP was created by Anthropic but is an open standard. VSCode's Copilot supports it. Claude supports it. Other AI tools are rapidly adopting it."

**Q: "What's the learning curve?"**
A: "If you can use Copilot, you can use MCP. The syntax is just @servername followed by your request. 5 minutes to learn."

**Q: "What about rate limits and API costs?"**
A: "GitHub, Jira, Figma all have generous API limits. For normal development use, you won't hit them. If you do, MCP servers usually handle rate limiting gracefully."

**Q: "Can this replace our documentation?"**
A: "No! MCP makes documentation MORE important. AI is only as good as the docs it reads. This is motivation to keep our Confluence current."

### Difficult Questions

**Q: "Will this replace junior developers?"**
A: "No. This makes junior developers MORE productive. They learn faster, ship faster, but we still need human judgment, creativity, and problem-solving. AI is a tool, not a replacement."

**Q: "What if it generates vulnerable code?"**
A: "Same risk as today with Copilot. MCP doesn't change that - you still need code review, security scanning, testing. MCP actually helps because AI can reference our security guidelines."

**Q: "Is this just hype?"**
A: "Try it for a week. If it's hype, stop using it. But I predict you won't stop."

---

## Post-Session Follow-Up

### Immediately After Session

- [ ] Share presentation link in Slack
- [ ] Share this demo repository URL
- [ ] Post recording link (when available)
- [ ] Create Slack channel #mcp-at-syniti for ongoing discussion

### This Week

- [ ] Schedule office hours for installation help
- [ ] Document our recommended MCP server configurations
- [ ] Start list of potential Syniti-specific MCP servers
- [ ] Survey attendees for feedback and adoption rate

### This Month

- [ ] Present adoption metrics to leadership
- [ ] Propose MCP server development working group
- [ ] Create internal best practices guide
- [ ] Share success stories

---

## Personal Preparation Checklist

**Night Before:**

- [ ] Test all MCP servers are working
- [ ] Rehearse demo flow
- [ ] Prepare backup slides if live demo fails
- [ ] Charge laptop fully
- [ ] Test screen sharing / projection

**30 Minutes Before:**

- [ ] Set up dual monitors (presentation + notes)
- [ ] Close unnecessary applications
- [ ] Set phone to Do Not Disturb
- [ ] Have water nearby
- [ ] Test microphone if hybrid session

**During Presentation:**

- [ ] Speak clearly and pace yourself
- [ ] Pause for questions
- [ ] Watch chat for questions if virtual
- [ ] Stay enthusiastic - your energy is contagious
- [ ] If demo fails, pivot to backup gracefully

---

## Energy & Timing Tips

**Pacing:**

- Introduction: High energy, set the stage
- Concepts: Moderate pace, ensure understanding
- Demo: High energy, show the magic
- Installation: Practical, reassuring tone
- Benefits: Inspirational, paint the vision
- Q&A: Open, encouraging

**Engagement Techniques:**

- Ask questions: "How many of you have experienced...?"
- Use names: "As Sarah mentioned in the chat..."
- Relate to pain points: "We've all been there..."
- Celebrate wins: "That's exactly the kind of thinking we need!"

**Time Management:**

- Check clock every 5 minutes
- Have "time compression" points if running long
- Save Q&A time - questions are the best part
- Better to end 5 minutes early than run over

---

## Success Metrics

**During Presentation:**

- Audience engagement (questions, reactions)
- Demo success rate (aim for 90%+)
- Time management (stay on schedule)

**Post-Presentation:**

- Survey scores (target: 4.5+/5)
- Adoption rate (target: 30% try it within 1 week)
- Slack activity in #mcp-at-syniti channel

**Long-Term:**

- MCP usage across teams (target: 50% within 3 months)
- Productivity metrics (tracked by willing teams)
- Custom MCP server development (target: 2-3 servers built)

---

**Remember:** You're not just teaching a tool - you're inspiring a shift in how we work with AI. Be passionate. Be clear. Be helpful. Good luck! 🚀
