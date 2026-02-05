import json
import sys

def is_binary_like(s: str) -> bool:
    # dianggap biner kalau banyak karakter non-printable/non-ascii
    bad = 0
    for ch in s:
        o = ord(ch)
        if ch in ("\t", "\n", "\r"):
            continue
        if o < 32 or o > 126:
            bad += 1
            if bad >= 3:
                return True
    return False

def main(inp, out):
    with open(inp, "r", encoding="utf-8", errors="replace") as f:
        har = json.load(f)

    entries = har.get("log", {}).get("entries", [])
    kept = []
    removed = []

    for e in entries:
        req = e.get("request", {})
        method = req.get("method", "")
        url = req.get("url", "")
        post = req.get("postData", {})
        text = post.get("text", "")

        if method in ("POST", "PUT", "PATCH") and isinstance(text, str) and text and is_binary_like(text):
            removed.append(f"{method} {url}")
            continue

        kept.append(e)

    har["log"]["entries"] = kept

    with open(out, "w", encoding="utf-8") as f:
        json.dump(har, f)

    print(f"Kept: {len(kept)} entries")
    print(f"Removed (binary-like post bodies): {len(removed)} entries")
    for x in removed[:30]:
        print(" -", x)
    if len(removed) > 30:
        print(f" - ... and {len(removed)-30} more")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python sanitize_har.py full_flow.har full_flow_clean.har")
        sys.exit(1)
    main(sys.argv[1], sys.argv[2])
