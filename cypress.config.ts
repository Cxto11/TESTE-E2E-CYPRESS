import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'gdi1xz',
  e2e: {
    setupNodeEvents(on, config) {
      module.exports = defineConfig({
        e2e: {
            setupNodeEvents(on, config) {
                projectId: "gdi1xz"
                { "reporter"; "mochawesome"
                    "reporterOptions"; 
                        { "reportDir"; "cypress/report/mochawesome-report"
                        "overwrite"; true
                        "html"; true
                        "json"; false
                        "timestamp"; "mmddyyyy_HHMMss" }}
            },
        },
    });
    
    },
  },
});
