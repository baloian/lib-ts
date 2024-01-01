export function abort(error, signame = 'SIGTERM') {
  if (typeof error !== 'undefined') console.error('Aborting: ', error);
  if (process) process.kill(process.pid, signame);
}
