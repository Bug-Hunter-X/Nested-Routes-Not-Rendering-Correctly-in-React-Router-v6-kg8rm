# React Router v6 Nested Route Bug

This repository demonstrates a bug encountered when using nested routes in React Router v6.  The catch-all route (`/*`) incorrectly intercepts routes that should be handled by nested routes, preventing the nested components from rendering.

## Bug Description

Nested routes are not functioning as expected.  Despite correctly defining nested routes, the catch-all route always renders, effectively overriding the nested route paths.

## Solution

The solution involves ensuring that the catch-all route (`/*`) is placed after more specific routes. React Router processes routes in the order they are defined, so placing the catch-all route last ensures that it only matches paths not already handled by other routes.