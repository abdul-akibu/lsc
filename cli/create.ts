'use strict';

import { create, update } from '../lib/commands'

module.exports = {
    usage: [
        'lsc create app - creates a LabShare app inside the current directory',
        ''
    ], app: create
};
