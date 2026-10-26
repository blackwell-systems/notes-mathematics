/* Three Lenses — inline practice for the Truth chapter.
   Framework-sensitive examples explicitly name their assumptions.
   No dependencies, remote calls, or tracking. */
(function () {
  "use strict";

  var axes = [
    { key: "modal", label: "Modality", question: "Could the claim have been false?", values: ["Necessary", "Contingent"] },
    { key: "meaning", label: "Meaning", question: "Is meaning alone enough?", values: ["Analytic", "Synthetic"] },
    { key: "knowledge", label: "Justification", question: "Does justification require empirical investigation?", values: ["A priori", "A posteriori"] }
  ];

  var groups = {
    foundations: { label: "Foundations", answers: ["Necessary", "Analytic", "A priori"], context: "Assume the standard definitions, and classical logic or mathematics where relevant.", hint: "Try replacing each defined term with its definition. Then consider what would have to be observed.",
      why: ["Given the standard definitions, this is true in every relevant possible world.", "Under the traditional analytic/synthetic distinction, definitions and meanings suffice.", "Understanding the definitions and reasoning suffices without empirical investigation."] },
    world: { label: "The world", answers: ["Contingent", "Synthetic", "A posteriori"], context: "Classify this true claim about the actual world.", hint: "Separate the meanings of the words from whether the described situation actually obtains.",
      why: ["The world could have been arranged differently while the words retained their meaning.", "The claim depends on a worldly fact, not on meanings alone.", "Observation, experiment, or historical evidence is required to establish it."] },
    identity: { label: "Identity & essence", answers: ["Necessary", "Synthetic", "A posteriori"], context: "Use the Kripke–Putnam account: the relevant names or natural-kind terms rigidly designate their referents.", hint: "Distinguish discovering which thing is named from what it means for a thing to be identical with itself.",
      why: ["On this account, the identical object or essential kind could not have failed to be itself.", "The identity is not obtained merely by unpacking the ordinary meanings of the expressions.", "We needed observation, chemistry, or historical investigation to discover the identity."] },
    philosophy: { label: "Philosophy lab", answers: [], context: "Read the specified philosophical framework before answering.", hint: "The specified framework matters more than your everyday first impression.",
      why: [] }
  };

  // Each item has its own explanatory insight. The first 44 inherit the
  // group classification; framework-dependent cases supply explicit keys.
  var rows = [
    ["foundations", "All bachelors are unmarried.", "The usual meaning of bachelor includes unmarried."],
    ["foundations", "Every square has four sides.", "Four-sidedness is part of the definition of a square."],
    ["foundations", "Every triangle has three sides.", "A polygon with three sides is a triangle by definition."],
    ["foundations", "Every even integer is divisible by 2.", "Divisibility by 2 defines evenness for integers."],
    ["foundations", "Every pentagon has five sides.", "Five-sidedness is built into the geometric term."],
    ["foundations", "No square is a triangle.", "The shapes' definitions are incompatible in ordinary Euclidean geometry."],
    ["foundations", "Every vixen is a female fox.", "The dictionary meaning of vixen supplies the predicate."],
    ["foundations", "Every prime number greater than 1 has exactly two positive divisors.", "This restates the definition of a prime natural number."],
    ["foundations", "A sibling has at least one sibling.", "Being someone's sibling entails a sibling relationship."],
    ["foundations", "If both P and Q are true, then P is true.", "Unlike the preceding examples, this follows from logical form alone."],
    ["foundations", "Every rectangle has four right angles.", "Four right angles belong to the usual definition of rectangle."],
    ["foundations", "No integer is strictly greater than itself.", "Irreflexivity of strict order rules this out."],
    ["foundations", "A person with no siblings has no brothers.", "Brothers are siblings; lacking the latter entails lacking the former."],
    ["foundations", "Every cube has six square faces.", "A Euclidean cube has six congruent square faces by its geometric definition."],

    ["world", "The Eiffel Tower is in Paris.", "Its location could have differed, and must be learned from the world."],
    ["world", "Saturn has rings.", "The rings are an astronomical discovery rather than a definition of Saturn."],
    ["world", "Venus orbits closer to the Sun than Earth does.", "The planets' orbital arrangement is an empirical fact."],
    ["world", "Shakespeare wrote Hamlet.", "Authorship is a historical fact, not part of the meaning of either name."],
    ["world", "Mars has two natural moons.", "The number of natural satellites is established astronomically."],
    ["world", "The Pacific Ocean covers more area than the Atlantic Ocean.", "Relative ocean areas are contingent geographical facts."],
    ["world", "Beethoven composed his Ninth Symphony.", "This historical attribution depends on evidence."],
    ["world", "The Moon has impact craters.", "The craters' existence is observed, not derived from the term Moon."],
    ["world", "Mount Everest is taller than K2.", "The comparison concerns actual mountain elevations."],
    ["world", "The Nile empties into the Mediterranean Sea.", "A river's actual course could have been different."],
    ["world", "The first crewed Moon landing took place in 1969.", "The date of a historical event is contingent and known through records."],
    ["world", "Jupiter is larger than Earth.", "Relative planetary sizes are empirical, not matters of word meaning."],
    ["world", "The Great Pyramid of Giza is in Egypt.", "The monument's actual location is an empirical fact."],
    ["world", "Earth's atmosphere contains more nitrogen than oxygen by volume.", "Its measured composition could have been different."],
    ["world", "The Amazon River flows through South America.", "Geographical placement depends on the actual world."],
    ["world", "Neptune was discovered in 1846.", "A date of discovery is established by historical investigation."],
    ["world", "Mount Fuji is in Japan.", "Political boundaries and mountain locations are contingent facts."],
    ["world", "Venus has no natural moons.", "The claim rests on astronomical investigation."],
    ["world", "Darwin's On the Origin of Species first appeared in 1859.", "Publication dates are contingent historical facts."],
    ["world", "Silver is denser than aluminum under standard conditions.", "The comparison is measured experimentally under specified conditions."],

    ["identity", "Hesperus is Phosphorus.", "The morning and evening names both refer to Venus; discovering this took astronomy."],
    ["identity", "Mark Twain is Samuel Clemens.", "The pen name and birth name identify the same person, a discoverable identity."],
    ["identity", "George Orwell is Eric Arthur Blair.", "The two names refer to the same writer."],
    ["identity", "Cicero is Tully.", "Two historically associated proper names refer to one individual."],
    ["identity", "Venus is Hesperus.", "The proper name and evening-star name rigidly designate the same planet."],
    ["identity", "Samuel Clemens is Mark Twain.", "Reversing the identity does not change the metaphysical claim."],
    ["identity", "Water is H₂O.", "Under natural-kind essentialism, the chemical nature of water was discovered, not stipulated."],
    ["identity", "Gold is the element with atomic number 79.", "The atomic constitution of the kind gold was discovered scientifically."],
    ["identity", "Carbon is the element with atomic number 6.", "Under the named view, atomic number is essential to the chemical kind."],
    ["identity", "Iron is the element with atomic number 26.", "The atomic number was learned experimentally and treated as essential."],

    ["philosophy", "7 + 5 = 12.", "For Kant, arithmetic is synthetic a priori; this is not the only philosophy of arithmetic.",
      ["Necessary", "Synthetic", "A priori"], "Use Kant's own classification of arithmetic, not an unqualified modern consensus.",
      ["Under Kant's view, arithmetic expresses a necessary relation.", "Kant argues that the result adds content not contained merely in the analyzed concepts.", "For Kant, arithmetic is knowable through pure intuition and reasoning, not an empirical survey."]],
    ["philosophy", "A Euclidean triangle's interior angles sum to 180°.", "Kant treats Euclidean geometry as synthetic a priori; other geometries differ.",
      ["Necessary", "Synthetic", "A priori"], "Use Kant's account of Euclidean geometry and keep the Euclidean qualifier.",
      ["The result holds necessarily within the assumed Euclidean geometry.", "Kant views geometric knowledge as extending rather than merely analyzing concepts.", "On Kant's account, geometric justification is independent of measuring triangles in the world."]],
    ["philosophy", "Every event has a cause.", "This is Kant's proposed necessary condition of experience, not a settled scientific universal.",
      ["Necessary", "Synthetic", "A priori"], "Answer from Kant's transcendental account, not from unqualified contemporary physics.",
      ["Kant proposes causality as a necessary condition for objective experience.", "He treats the causal principle as substantive, not true merely by a definition of event.", "Kant argues it is justified through conditions of experience, not inductively established by experiments."]],
    ["philosophy", "Stick S is one meter long at time t₀.", "Kripke's reference-fixing example separates what fixed a length standard from what it could have been.",
      ["Contingent", "Synthetic", "A priori"], "Assume 'one meter' rigidly refers to the actual length of S at t₀, and the reference fixing succeeded.",
      ["The particular stick might have had a different length at that time.", "Its length is not true merely by analyzing the meanings of stick and meter.", "In Kripke's stipulation, the length is known through the successful act fixing the reference, without measuring against a prior standard."]],
    ["philosophy", "If the actual post is red, then the post is red.", "On Evans's reading, actuality fixes an antecedent while the consequent varies by possible world.",
      ["Contingent", "Synthetic", "A priori"], "Use Gareth Evans's reading of 'actually'; assume the post is red in the actual world and exists in the worlds considered.",
      ["With the antecedent anchored to the actual world, the post could be non-red in another considered world.", "The resulting content goes beyond a truth secured merely by conventional meanings.", "Once the actual-world presupposition is fixed, the conditional is knowable through its stipulated form, without new observation."]],
    ["philosophy", "The author of Hamlet is the author of Othello.", "Definite descriptions need not be rigid designators: different people could have written the plays.",
      ["Contingent", "Synthetic", "A posteriori"], "Treat 'the author of …' as ordinary non-rigid descriptions.",
      ["Different people could have authored the two plays.", "The meanings of the descriptions do not guarantee they pick out one person.", "Historical research is needed to find the authors."]]
  ];

  var cases = rows.map(function (row, i) {
    return {
      id: i + 1,
      group: row[0],
      statement: row[1],
      insight: row[2],
      answers: row[3] || groups[row[0]].answers,
      context: row[4] || groups[row[0]].context,
      why: row[5] || groups[row[0]].why
    };
  });

  function escapeHTML(x) {
    return String(x).replace(/[&<>"']/g, function (c) {
      return {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c];
    });
  }

  // The six lens labels are intentionally fixed; the reasoning is not.
  // Mix classifications with reverse-matching and error-spotting exercises.
  function signature(c) { return c.answers.join("|"); }
  function shuffle(items) {
    var a = items.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var v = a[i]; a[i] = a[j]; a[j] = v;
    }
    return a;
  }

  function balancedDeck(pool) {
    // Interleave answer patterns rather than asking 14 definition questions,
    // then 20 world facts, then 10 rigid-identity questions in a row.
    var buckets = new Map();
    shuffle(pool).forEach(function (c) {
      var key = signature(c);
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(c.id);
    });
    var deck = [], last = null;
    while (deck.length < pool.length) {
      var candidates = Array.from(buckets.entries()).filter(function (entry) { return entry[1].length; });
      candidates.sort(function (a, b) { return b[1].length - a[1].length; });
      var next = candidates.find(function (entry) { return entry[0] !== last; }) || candidates[0];
      deck.push(next[1].pop());
      last = next[0];
    }
    return deck;
  }

  function start(el) {
    if (el.dataset.practiceReady) return;
    el.dataset.practiceReady = "true";
    var category = "all", mode = "mixed";
    var order = [], index = 0, picks = [null, null, null], revealed = false, showHint = false;
    var attempts = new Map(), mistakes = new Set(), skipped = new Set(), review = false;
    var matchCache = new Map();

    function activeCase() { return index < order.length ? cases[order[index] - 1] : null; }
    function kind() {
      if (review || mode === "classify") return "classify";
      if (mode === "match") return "match";
      if (mode === "spot") return "spot";
      return index % 5 === 2 ? "match" : index % 5 === 4 ? "spot" : "classify";
    }
    function answered() { return kind() === "classify" ? picks.every(function (p) { return p !== null; }) : picks[0] !== null; }
    function totalCorrect() {
      var n = 0; attempts.forEach(function (a) { n += a.correct; }); return n;
    }
    function totalJudged() {
      var n = 0; attempts.forEach(function (a) { n += a.max; }); return n;
    }
    function focusAfterRender(selector) {
      var target = el.querySelector(selector);
      if (target) target.focus({ preventScroll: true });
    }
    function renderAndFocus(selector) {
      render();
      focusAfterRender(selector);
    }

    function mistakeIndex(c) { return (c.id + index) % axes.length; }
    function wrongLabel(i, c, wrong) {
      return wrong === i ? axes[i].values.find(function (v) { return v !== c.answers[i]; }) : c.answers[i];
    }

    function matchChoices(c) {
      if (matchCache.has(c.id)) return matchCache.get(c.id);
      // Exactly one example for each available answer combination.
      // Distractors are genuine contrasting cases, not superficial variants
      // of the target, and all named frameworks remain visible in context.
      var seen = new Set([signature(c)]);
      var others = shuffle(cases.filter(function (other) { return signature(other) !== signature(c); }));
      var options = [c];
      others.forEach(function (other) {
        var sig = signature(other);
        if (!seen.has(sig) && options.length < 4) {
          seen.add(sig); options.push(other);
        }
      });
      // Stable ordering while selecting/revealing, but varied answer position.
      var shift = (c.id + index) % options.length;
      var stable = options.slice(shift).concat(options.slice(0, shift));
      matchCache.set(c.id, stable);
      return stable;
    }

    function questionHead(c, type) {
      if (type === "match") {
        return '<div class="truth-practice__item truth-practice__item--challenge">' +
          '<span class="truth-practice__category">REVERSE THE LENSES</span>' +
          '<p class="truth-practice__claim" tabindex="-1">Which claim fits all three labels?</p>' +
          '<div class="truth-practice__target">' +
          '<span class="truth-practice__target--modal">' + escapeHTML(c.answers[0]) + '</span>' +
          '<span class="truth-practice__target--meaning">' + escapeHTML(c.answers[1]) + '</span>' +
          '<span class="truth-practice__target--knowledge">' + escapeHTML(c.answers[2]) + '</span></div>' +
          '<p class="truth-practice__context">Treat the named Kantian or Kripkean examples using the framework stated beneath them.</p></div>';
      }
      if (type === "spot") {
        return '<div class="truth-practice__item truth-practice__item--challenge">' +
          '<span class="truth-practice__category">SPOT THE ERROR · ' + escapeHTML(groups[c.group].label) + '</span>' +
          '<p class="truth-practice__claim" tabindex="-1">' + escapeHTML(c.statement) + '</p>' +
          '<p class="truth-practice__context">' + escapeHTML(c.context) + '</p>' +
          '<p class="truth-practice__challenge-intro">Exactly one classification below is wrong. Which lens?</p>' +
          '<div class="truth-practice__target">' + axes.map(function (axis, i) {
            return '<span class="truth-practice__target--' + axis.key + '">' +
              escapeHTML(wrongLabel(i, c, mistakeIndex(c))) + '</span>';
          }).join('') + '</div></div>';
      }
      return '<div class="truth-practice__item"><span class="truth-practice__category">' +
        escapeHTML(groups[c.group].label) + (review ? ' · review' : '') + '</span>' +
        '<p class="truth-practice__claim" tabindex="-1">' + escapeHTML(c.statement) + '</p>' +
        '<p class="truth-practice__context">' + escapeHTML(c.context) + '</p></div>';
    }

    function classificationUI(c) {
      return axes.map(function (axis, i) {
        var result = revealed && picks[i] === c.answers[i];
        var choices = axis.values.map(function (val) {
          var chosen = picks[i] === val;
          var correct = revealed && c.answers[i] === val;
          var cls = 'truth-practice__choice' + (chosen ? ' is-selected' : '') +
            (revealed && correct ? ' is-correct' : '') + (revealed && chosen && !correct ? ' is-wrong' : '');
          return '<button type="button" class="' + cls + '" data-axis="' + i + '" data-value="' + escapeHTML(val) +
            '" aria-pressed="' + chosen + '"' + (revealed ? ' disabled' : '') + '>' + escapeHTML(val) + '</button>';
        }).join('');
        return '<fieldset class="truth-practice__axis truth-practice__axis--' + axis.key + '">' +
          '<legend><span class="truth-practice__axis-index">0' + (i + 1) + '</span> ' + axis.label + '</legend>' +
          '<p class="truth-practice__question">' + axis.question + '</p>' +
          '<div class="truth-practice__choices">' + choices + '</div>' +
          (revealed ? '<p class="truth-practice__feedback ' + (result ? 'is-correct' : 'is-wrong') + '">' +
            '<strong>' + (result ? 'Correct.' : 'Not quite. ' + escapeHTML(c.answers[i]) + '.') + '</strong> ' +
            escapeHTML(c.why[i]) + '</p>' : '') + '</fieldset>';
      }).join('');
    }

    function matchUI(c) {
      var options = matchChoices(c);
      var buttons = options.map(function (candidate) {
        var id = String(candidate.id), chosen = picks[0] === id, correct = candidate.id === c.id;
        var cls = 'truth-practice__match-option truth-practice__choice' +
          (chosen ? ' is-selected' : '') +
          (revealed && correct ? ' is-correct' : '') +
          (revealed && chosen && !correct ? ' is-wrong' : '');
        var framework = candidate.group === "philosophy"
          ? candidate.context
          : candidate.group === "identity"
            ? "Under Kripkean rigid designation."
            : "";
        return '<button type="button" class="' + cls + '" data-pick="' + id +
          '" aria-pressed="' + chosen + '"' + (revealed ? ' disabled' : '') + '>' +
          '<span>' + escapeHTML(candidate.statement) + '</span>' +
          (framework ? '<small>' + escapeHTML(framework) + '</small>' : '') + '</button>';
      }).join('');
      return '<div class="truth-practice__challenge-options" role="group" aria-label="Choose the matching claim">' + buttons + '</div>' +
        (revealed ? '<div class="truth-practice__feedback ' + (picks[0] === String(c.id) ? 'is-correct' : 'is-wrong') + '">' +
          '<strong>' + (picks[0] === String(c.id) ? 'Exactly.' : 'The matching claim is: ' + escapeHTML(c.statement)) + '</strong> ' +
          escapeHTML(c.why.join(' ')) + '</div>' : '');
    }

    function spotUI(c) {
      var wrong = mistakeIndex(c);
      var options = axes.map(function (axis, i) {
        var chosen = picks[0] === String(i), correct = i === wrong;
        return '<button type="button" class="truth-practice__choice' +
          (chosen ? ' is-selected' : '') + (revealed && correct ? ' is-correct' : '') +
          (revealed && chosen && !correct ? ' is-wrong' : '') +
          '" data-pick="' + i + '" aria-pressed="' + chosen + '"' + (revealed ? ' disabled' : '') +
          '>' + escapeHTML(axis.label) + '</button>';
      }).join('');
      return '<div class="truth-practice__spot-options" role="group" aria-label="Choose the incorrectly labelled axis">' +
        options + '</div>' +
        (revealed ? '<div class="truth-practice__feedback ' + (picks[0] === String(wrong) ? 'is-correct' : 'is-wrong') + '">' +
          '<strong>' + escapeHTML(axes[wrong].label) + ' should be ' + escapeHTML(c.answers[wrong]) + '.</strong> ' +
          escapeHTML(c.why[wrong]) + '</div>' : '');
    }

    function render() {
      var c = activeCase();
      if (!c) {
        var scored = Array.from(attempts.values()).filter(function (a) { return a.max > 0; }).length;
        el.innerHTML = '<div class="truth-practice__done" tabindex="-1"><strong>' +
          (review ? 'Review complete.' : 'Set complete.') + '</strong><p>First pass: ' +
          totalCorrect() + ' correct decisions out of ' + totalJudged() + ' across ' + scored +
          ' checked examples. ' + skipped.size + ' skipped on the first pass. ' +
          mistakes.size + ' examples still need review.</p><div class="truth-practice__actions">' +
          (mistakes.size ? '<button type="button" data-action="review">Review mistakes</button>' : '') +
          '<button type="button" data-action="reset">Start again</button></div></div>';
        return;
      }
      var type = kind(), n = order.length;
      var head = '<div class="truth-practice__head"><div><span class="truth-practice__eyebrow">GUIDED PRACTICE · THREE LENSES</span>' +
        '<p class="truth-practice__intro">' + (review ? 'Revisit missed and skipped examples. Your first-pass score stays unchanged.' : 'Classify, match, and spot incorrect classifications.') + '</p></div>' +
        '<div class="truth-practice__count" aria-live="polite">' + (index + 1) + ' / ' + n + '</div></div>' +
        '<div class="truth-practice__track"><span style="width:' + (((index + 1) / n) * 100).toFixed(2) + '%"></span></div>' +
        '<div class="truth-practice__tools"><label>Examples <select aria-label="Example category" data-category>' +
          [['all', 'All 50'], ['foundations', 'Foundations'], ['world', 'The world'], ['identity', 'Identity & essence'], ['philosophy', 'Philosophy lab']].map(function (entry) {
            return '<option value="' + entry[0] + '"' + (category === entry[0] && !review ? ' selected' : '') + '>' + entry[1] + '</option>';
          }).join('') + '</select></label>' +
          '<label>Exercise <select aria-label="Exercise format" data-mode>' +
          [['mixed', 'Mixed'], ['classify', 'Classify all three'], ['match', 'Find the claim'], ['spot', 'Spot the error']].map(function (entry) {
            return '<option value="' + entry[0] + '"' + (mode === entry[0] ? ' selected' : '') + '>' + entry[1] + '</option>';
          }).join('') + '</select></label>' +
          '<button type="button" class="truth-practice__utility" data-action="shuffle">Reshuffle</button>' +
          '<span class="truth-practice__score" aria-live="polite">First pass: ' + totalCorrect() + ' / ' + totalJudged() + '</span></div>';

      var exercise = type === "match" ? matchUI(c) : type === "spot" ? spotUI(c) : classificationUI(c);
      var hintText = type === "match"
        ? "Look for a statement whose modal force, relation to meanings, and route to justification all match—not merely one of them."
        : type === "spot"
          ? "Check each proposed label independently; one conflicts with the statement under the named assumptions."
          : groups[c.group].hint;

      var actions = '<div class="truth-practice__actions">' +
        (revealed
          ? '<button type="button" class="truth-practice__primary" data-action="next">' +
            (index === n - 1 ? 'See results' : 'Next example') + ' →</button>'
          : '<button type="button" class="truth-practice__primary" data-action="check"' +
            (answered() ? '' : ' disabled') + '>Check answers</button>' +
            '<button type="button" data-action="hint">' + (showHint ? 'Hide hint' : 'Show hint') + '</button>' +
            '<button type="button" data-action="skip">Skip</button>') +
        '</div>';
      var hint = showHint && !revealed ? '<p class="truth-practice__hint"><strong>Hint:</strong> ' +
        escapeHTML(hintText) + '</p>' : '';
      var insight = revealed ? '<div class="truth-practice__insight" tabindex="-1"><strong>Takeaway.</strong> ' +
        escapeHTML(c.insight) + '</div>' : '';
      el.innerHTML = head + questionHead(c, type) + exercise + hint + insight + actions +
        '<p class="truth-practice__disclaimer">Framework-sensitive cases are labelled. The analytic/synthetic distinction is philosophically contested; keys follow the stated framework.</p>';
    }

    function rebuildOrder() {
      var pool = cases.filter(function (c) { return category === "all" || c.group === category; });
      order = balancedDeck(pool);
      index = 0; picks = [null, null, null]; revealed = false; showHint = false; review = false;
      attempts.clear(); mistakes.clear(); skipped.clear(); matchCache.clear();
      render();
    }

    el.addEventListener("change", function (event) {
      if (event.target.matches("select[data-category]")) {
        category = event.target.value; rebuildOrder(); focusAfterRender('select[data-category]');
      } else if (event.target.matches("select[data-mode]")) {
        mode = event.target.value; rebuildOrder(); focusAfterRender('select[data-mode]');
      }
    });

    el.addEventListener("click", function (event) {
      var btn = event.target.closest("button");
      if (!btn || !el.contains(btn)) return;
      var axis = btn.getAttribute("data-axis");
      if (axis !== null && !revealed) {
        picks[Number(axis)] = btn.getAttribute("data-value");
        renderAndFocus('button[data-axis="' + axis + '"][data-value="' + btn.getAttribute("data-value") + '"]'); return;
      }
      var pick = btn.getAttribute("data-pick");
      if (pick !== null && !revealed) {
        picks[0] = pick; renderAndFocus('button[data-pick="' + pick + '"]'); return;
      }
      switch (btn.getAttribute("data-action")) {
        case "hint": showHint = !showHint; renderAndFocus('button[data-action="hint"]'); break;
        case "check":
          if (!answered() || revealed) return;
          var c = activeCase(), type = kind();
          var max = type === "classify" ? 3 : 1;
          var correct = type === "classify"
            ? picks.filter(function (p, i) { return p === c.answers[i]; }).length
            : type === "match" ? Number(picks[0] === String(c.id))
            : Number(picks[0] === String(mistakeIndex(c)));
          if (!review) attempts.set(c.id, { correct: correct, max: max });
          if (correct < max) mistakes.add(c.id); else mistakes.delete(c.id);
          revealed = true; renderAndFocus('.truth-practice__insight'); break;
        case "skip":
          if (!review) { skipped.add(activeCase().id); mistakes.add(activeCase().id); }
          index++; picks = [null, null, null]; revealed = false; showHint = false;
          renderAndFocus('.truth-practice__claim, .truth-practice__done'); break;
        case "next":
          index++; picks = [null, null, null]; revealed = false; showHint = false;
          renderAndFocus('.truth-practice__claim, .truth-practice__done'); break;
        case "shuffle": rebuildOrder(); focusAfterRender('.truth-practice__claim'); break;
        case "review":
          if (!mistakes.size) return;
          order = balancedDeck(cases.filter(function (c) { return mistakes.has(c.id); }));
          review = true; mode = "classify";
          index = 0; picks = [null, null, null]; revealed = false; showHint = false;
          renderAndFocus('.truth-practice__claim'); break;
        case "reset":
          category = "all"; mode = "mixed"; rebuildOrder(); focusAfterRender('.truth-practice__claim'); break;
      }
    });

    rebuildOrder();
  }

  function mount() {
    var el = document.querySelector("[data-truth-practice]");
    if (el) start(el);
  }

  if (!window.__truthPracticeListener) {
    window.__truthPracticeListener = true;
    document.addEventListener("nav", mount);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount, { once: true });
  else mount();
})();
