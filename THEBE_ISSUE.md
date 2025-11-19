# Issue: Thebe Configuration Embedded in Notebook Output

## Summary

PR #62 of `sphinx-tojupyter` is adding HTML/JavaScript Thebe configuration blocks as markdown cells at the end of generated notebooks. While these are intended for round-trip conversion (notebook → HTML), they serve no purpose in the notebooks themselves and may confuse users.

## Example

### Before (v0.6.0)
- `memoryless.ipynb`: 27 cells (ends with code cell)
- No Thebe configuration in notebook

### After (PR #62)
- `memoryless.ipynb`: 28 cells (ends with markdown cell containing HTML/JS)
- Last cell contains:

```html
<script type="text/x-thebe-config">
{
    requestKernel: true,
    binderOptions: {
        repo: "binder-examples/jupyter-stacks-datascience",
        ref: "master",
    },
    codeMirrorConfig: {
        theme: "abcdef",
        mode: "python"
    },
    kernelOptions: {
        name: "python3",
        path: "./."
    },
    predefinedOutput: true
}
</script>

<script>kernelName = 'python3'</script>
```

## Impact

**Affected Notebooks:** All 10 notebooks in the build
- 2 notebooks show +1 cell count (`memoryless.ipynb`, `poisson.ipynb`)
- Others may have the configuration merged into existing cells

**User Experience Issues:**
1. Users see raw HTML/JavaScript at the bottom of notebooks
2. No functional value when notebook is opened in JupyterLab/VS Code
3. May cause confusion about purpose of the code
4. Clutters the notebook with web-specific configuration

## Root Cause

The Thebe configuration is likely being preserved from the source MyST markdown files or Jupyter Book HTML build. The `sphinx-tojupyter` conversion is treating this as content to include rather than metadata to strip.

## Proposed Solutions

### Option 1: Configuration Flag (Recommended)
Add a configuration option to `sphinx-tojupyter`:
```python
# In _config.yml or conf.py
tojupyter_strip_thebe: true  # Default: false for backward compatibility
```

### Option 2: Automatic Detection
Automatically detect and strip Thebe configuration blocks:
- Pattern: `<script type="text/x-thebe-config">...</script>`
- Pattern: `<script>kernelName = ...</script>`

### Option 3: Separate Metadata
Store Thebe configuration in notebook metadata rather than as a visible cell:
```json
{
  "metadata": {
    "thebe": {
      "requestKernel": true,
      ...
    }
  }
}
```

## Testing

To verify the issue:

```bash
# Compare old vs new notebooks
diff /tmp/continuous_time_mcs.notebooks/memoryless.ipynb \
     lectures/_build/jupyter/memoryless.ipynb
```

**Expected:** New notebook has extra markdown cell at the end with Thebe config

## Recommendation

Implement **Option 1** with default `tojupyter_strip_thebe: false` to maintain backward compatibility, allowing projects to opt-in to cleaner notebook output.

For the `continuous_time_mcs` project specifically, we should enable this flag once available:

```yaml
# In lectures/_config.yml
sphinx:
  config:
    tojupyter_strip_thebe: true
```

## Related Files

- PR: https://github.com/QuantEcon/sphinx-tojupyter/pull/62
- Test branch: `test-sphinx-tojupyter-pr62`
- Affected notebooks: `lectures/_build/jupyter/*.ipynb`
- Comparison report: `COMPARISON_REPORT.md`

---

**Date:** 19 November 2025  
**Project:** QuantEcon/continuous_time_mcs  
**Discovered during:** PR #62 testing and comparison with v0.6.0
