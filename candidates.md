# Funniest Sign on a Haunted Server Room Door — candidates

The judge compares two signs at a time and keeps the funnier one. Its
brief, most important first:

1. The line is a sign for the door of a haunted server room, the kind a
   ghost would tape up — a joke about anything else loses to any sign
   on that door.
2. It gets a real laugh in one line, from the collision of office IT
   life and the supernatural, rather than a pun that needs a second read.
3. It sounds like a sign: short, punchy and readable at a glance, the
   sort of line that fits on a printed sheet.
4. The haunting is specific and fresh — a ghost, a cold aisle or a
   beeping rack used in a way we have not read a hundred times.
5. It stays inside the 120-character limit and still reads cleanly
   aloud, with no filler padding it out.

Target: a line that makes a tired sysadmin laugh at 3am.

## Candidates

1. **"DO NOT TURN OFF — the ghost is mid-update and will haunt your
   calendar."** Sign-shaped warning, ghost mid-update is a clean
   IT-meets-supernatural collision, and "haunt your calendar" (phantom
   meeting invites forever) is a fresh haunting. Weakness: the punch
   lands on an abstraction — calendars are funny, but the threat is
   one step removed from the door itself.
2. **"HAUNTED: The ghost has root access. Do not sudo. He takes it
   personally."** Very short, very sign-like, ghost plus root/sudo is
   instantly funny to anyone who has run a server. Weakness: it is
   closer to a one-liner joke than a door notice, and "takes it
   personally" is a well-used tag.
3. **"Room is haunted. Ticket #666 is still open. Do not close it.
   He'll know."** Ticket-system collision with a good deadpan tail.
   Weakness: #666 is the single most predictable haunted number; it
   leans on a trope the judge's criterion 4 explicitly discounts.
4. **"Please knock. The ghost is in a meeting that could have been an
   email since 2007."** Real laugh, office-life collision, specific
   year. Weakness: it reads more like a caption than a door sign, and
   the haunting is decorative — swap "ghost" for "manager" and the
   joke barely changes.
5. **"Do not unplug anything. Last person who did is now the
   night-shift monitoring system."** Good sign warning with a real
   consequence. Weakness: the consequence is clever rather than
   laugh-out-loud, and it needs the full sentence to land.
6. **"WARNING: Cold aisle is colder than usual. That's Dave. Dave is
   dead. Dave likes it that way."** Specific haunting (cold aisle,
   named ghost), deadpan. Weakness: four beats is a lot for a printed
   sheet, and the Dave routine is a familiar shape.
7. **"AUTHORIZED PERSONNEL ONLY. Everyone else joins the ghost on the
   on-call rotation. Permanently."** A verbatim door notice, then the
   consequence: trespassers do not get fined, they get scheduled —
   with the ghost, forever. The haunting is specific (eternal on-call
   duty as the afterlife), the collision is pure sysadmin dread, and
   the one-word kicker "Permanently." is the deadpan turn a tired
   sysadmin feels in their spine at 3am.
8. **"DO NOT ENTER AFTER MIDNIGHT — the ghost does his standup then.
   Not comedy. Daily standup. From 2004."** Funny double meaning.
   Weakness: it is a pun that needs the second read the judge
   penalises, and it runs long for a sign.

## Pick

**Candidate 7: "AUTHORIZED PERSONNEL ONLY. Everyone else joins the
ghost on the on-call rotation. Permanently."**

It wins where the judge weighs most. Criterion 1: it opens with the
exact words printed on real server-room doors, so it is unmistakably
a sign for that door, and the ghost is on the rota — the kind of
notice a ghost would tape up. Criterion 2: the laugh is the collision
itself — the worst punishment IT can imagine is not death, it is
being on call forever, and the sign sentences trespassers to exactly
that, alongside the resident ghost. Criterion 3: three short beats,
readable at a glance, fits a printed sheet. Criterion 4: the haunting
is specific and fresh — not flickering lights or a beeping rack, but
an afterlife spent on the on-call rotation. Criterion 5: it reads
cleanly aloud with no filler, well inside 120 characters.

Against the runner-up (candidate 1, mid-update/calendar): that line's
threat is clever but abstract, while the pick's threat is the single
most dreaded duty in a sysadmin's life, made eternal. Against
candidate 2 (root/sudo): shorter, but it is a joke about a ghost
rather than a notice from the door, and its tag is familiar.

## Second look (revision)

Re-tested the pick against the two strongest runners-up before
locking it:

- Against **candidate 1**: "haunt your calendar" is fresh, but a
  calendar haunting can be muted. An eternal on-call rotation cannot.
  Criterion 2 decides for the pick.
- Against **candidate 2**: the sudo line is punchier per character,
  but the pick is more sign-shaped (criterion 1 and 3), and its
  kicker word carries the whole haunting in one syllable of dread.
- Wording: "Everyone else" beats "Unauthorized staff" — broader,
  funnier, and it mirrors how real door signs divide the world into
  the authorised and everyone else. "joins the ghost on the on-call
  rotation" keeps the ghost explicit so the haunting is never merely
  implied. No trailing newline: the file holds exactly the sign as it
  would be printed.

Pick confirmed.
