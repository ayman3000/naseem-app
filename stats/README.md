# Download stats

`downloads.csv` is appended once a day by the *Download stats snapshot* workflow
from GitHub release-asset download counts.

- `stable_dmg_total` — lifetime downloads of `Naseem.dmg`, the site's Download button. ≈ new installs.
- `versioned_dmg_total` — lifetime downloads of `Naseem-x.y.z.dmg`. Mostly Sparkle auto-updates.
- `appcast_total` — lifetime `appcast.xml` fetches. Sparkle checks ~daily per Mac, so the
  day-over-day delta ≈ daily active Macs.
- `latest_*` — the same three for the newest release only.

Daily deltas are the useful number; totals only ever grow.
