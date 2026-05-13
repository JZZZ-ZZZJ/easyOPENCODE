export const NotificationPlugin = async ({ $ }) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        const ps1 = `${process.env.USERPROFILE}/.config/opencode/notify.ps1`
        try {
          await $`powershell -WindowStyle Hidden -File ${ps1}`
        } catch {
          // silently ignore
        }
      }
    },
  }
}
